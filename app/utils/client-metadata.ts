import { ComponentAuthor } from "lib/__generated/sdk";

export const getAuthorAvatarAlt = (author?: ComponentAuthor) => {
  return (
    author?.avatar?.title ||
    author?.avatar?.description ||
    author?.name ||
    "User Avatar"
  );
};
