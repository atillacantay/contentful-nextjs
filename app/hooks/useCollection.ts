import { useState } from "react";
import useWebApi from "./useWebApi";

const collectionUrl = "collection";

export interface CollectionShort {
  collectionId: number;
  public: boolean;
  images: {
    imageUrl: string;
    imageTitle: string;
  };
  name: string;
  recipesNumber: number;
  userId: number;
}

export interface UserCollectionForRecipe {
  name: string;
  collectionId: number;
  inCollection: boolean;
  image: string;
}

export interface ResponseType {
  collections: UserCollectionForRecipe[];
}

export interface AddOrEditCollectionData {
  name: string;
  public: boolean;
  recipeGuid: string;
}

export interface AddToCollectionData {
  collectionIds: string[];
  recipe: string;
}

export interface RemoveFromCollectionData {
  collectionId: string;
  recipe: string;
}

export const mockCollections: UserCollectionForRecipe[] = [
  {
    collectionId: 0,
    name: "Khaliji Recipes",
    inCollection: false,
    image: "",
  },
  {
    collectionId: 1,
    name: "Indian Recipes",
    inCollection: false,
    image: "",
  },
  {
    collectionId: 2,
    name: "Mexican Recipes",
    inCollection: false,
    image: "",
  },
  {
    collectionId: 3,
    name: "Italian Recipes",
    inCollection: false,
    image: "",
  },
  {
    collectionId: 4,
    name: "Turkish Recipes",
    inCollection: false,
    image: "",
  },
];

const useCollection = (cultureName: string) => {
  const { error, isLoading, post, get, deleteApi } = useWebApi(null);
  const [collections, setCollections] = useState<UserCollectionForRecipe[]>([]);

  const getCollections = async (userId: string, recipeGuid: string) => {
    await get(
      `${collectionUrl}/${userId}/${recipeGuid}`,
      undefined,
      (result) => {
        setCollections(result.data);
      }
    );
  };

  const addNewCollection = async (
    userId: string,
    newCollectionData: AddOrEditCollectionData,
    callback: () => void
  ) => {
    const onSuccess = () => {
      callback?.();
    };

    await post(
      `${collectionUrl}/${userId}/add?cultureCode=${cultureName}`,
      newCollectionData,
      undefined,
      onSuccess
    );
  };

  const editCollection = async (
    userId: string,
    collectionId: string,
    editCollectionData: AddOrEditCollectionData
  ) => {
    await post(
      `${collectionUrl}/${userId}/${collectionId}/edit?cultureCode=${cultureName}`,
      editCollectionData
    );
  };

  const addToCollection = async (
    userId: string,
    addToCollectionData: AddToCollectionData,
    callback?: () => void
  ) => {
    const onSuccess = () => {
      // const updatedCollections = collections.map((collection) =>
      //   addToCollectionData.collectionIds.includes(
      //     String(collection.collectionId)
      //   )
      //     ? { ...collection, inCollection: true }
      //     : collection
      // );

      // setCollections(updatedCollections);
      callback?.();
    };

    await post(
      `${collectionUrl}/${userId}/addToCollection?cultureCode=${cultureName}`,
      addToCollectionData,
      undefined,
      onSuccess
    );
  };

  const removeFromCollection = async (
    userId: string,
    removeFromCollectionData: RemoveFromCollectionData,
    callback?: () => void
  ) => {
    await post(
      `${collectionUrl}/${userId}/removeFromCollection?cultureCode=${cultureName}`,
      removeFromCollectionData,
      undefined,
      callback
    );
  };

  const removeCollection = async (
    collectionId: string,
    callback?: () => void
  ) => {
    await deleteApi(
      `${collectionUrl}/delete/${collectionId}?cultureCode=${cultureName}`,
      { onSuccess: callback }
    );
  };

  return {
    getCollections,
    addNewCollection,
    editCollection,
    addToCollection,
    removeFromCollection,
    removeCollection,
    collections,
    error,
    isLoading,
  };
};

export default useCollection;
