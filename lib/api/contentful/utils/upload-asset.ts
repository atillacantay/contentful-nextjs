import { client } from "../client";

export async function uploadAsset(file: File) {
  const asset = await client.asset.createFromFiles(
    {},
    {
      fields: {
        title: {
          "en-US": file.name,
        },
        file: {
          "en-US": {
            contentType: file.type,
            fileName: file.name,
            file: await file.arrayBuffer(),
          },
        },
        description: {
          "en-US": file.name,
        },
      },
    }
  );
  const processedAsset = await client.asset.processForAllLocales({}, asset);
  const publishedAsset = await client.asset.publish(
    { assetId: asset.sys.id },
    processedAsset
  );
  return publishedAsset;
}
