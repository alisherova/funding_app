import PostModel from "../models/Posts.js";

export const getAllPosts = async () => {
  try {
    return PostModel.find();
  } catch (err) {
    throw err;
  }
};

export const getPostById = async (postId) => {
  try {
    return PostModel.findById({ _id: postId });
  } catch (err) {
    throw err;
  }
};

export const createPostService = async (postData) => {
  try {
    const newPost = new PostModel(postData);
    return newPost.save();
  } catch (err) {
    throw err;
  }
};
