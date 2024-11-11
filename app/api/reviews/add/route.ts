import { client } from "lib/api/contentful/client";
import { createLinkObject } from "lib/api/contentful/utils/create-link-object";
import { createMultipleLinkObject } from "lib/api/contentful/utils/create-multiple-link-object";
import { uploadAsset } from "lib/api/contentful/utils/upload-asset";
import { NextResponse, type NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const formData = await request.formData();
  const authorId = formData.get("authorId");
  const content = formData.get("content");
  const relatedId = formData.get("relatedId");
  const ratingOverall = formData.get("ratingOverall");
  const ratingIngredients = formData.get("ratingIngredients");
  const ratingAccuracy = formData.get("ratingAccuracy");
  const ratingDifficulty = formData.get("ratingDifficulty");
  const ratingTaste = formData.get("ratingTaste");

  if (!relatedId || !authorId || !content || !ratingOverall) {
    return new NextResponse(
      JSON.stringify({ success: false, error: "Invalid data provided." }),
      {
        status: 500,
      }
    );
  }

  try {
    const images: File[] = [];
    formData.forEach((value, key) => {
      if (key.startsWith("images-")) {
        images.push(value as File);
      }
    });

    let assetsData = undefined;
    if (images.length > 0) {
      const assetUploadPromises = images.map(uploadAsset);
      const uploadedAssets = await Promise.all(assetUploadPromises);
      const assetIds = uploadedAssets.map((asset) => asset.sys.id);
      assetsData = createMultipleLinkObject(assetIds, "Asset");
    }

    const recipeReference = createLinkObject(relatedId?.toString());

    await client.entry.create(
      { contentTypeId: "recipeReview" },
      {
        fields: {
          content: {
            "en-US": content,
          },
          ratingOverall: {
            "en-US": Number(ratingOverall),
          },
          ratingIngredients: {
            "en-US": Number(ratingIngredients),
          },
          ratingAccuracy: {
            "en-US": Number(ratingAccuracy),
          },
          ratingDifficulty: {
            "en-US": Number(ratingDifficulty),
          },
          ratingTaste: {
            "en-US": Number(ratingTaste),
          },
          ...(assetsData && { images: assetsData }),
          recipe: recipeReference,
          authorId: {
            "en-US": authorId,
          },
        },
      }
    );

    return new NextResponse(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
};
