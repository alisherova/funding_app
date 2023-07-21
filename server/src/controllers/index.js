import {
  createPostService,
  getAllPosts,
  getPostById,
} from "../services/posts.js";

export const getAll = async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.json(posts);
  } catch (_) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const getOnePost = async (req, res) => {
  try {
    const selectedPost = await getPostById(req.params.id);
    res.json(selectedPost);
  } catch (_) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const createPost = async (req, res) => {
  const data = req.body;

  if (
    !data.company ||
    !data.title ||
    !data.description ||
    !data.lastDay ||
    !data.supporters ||
    !data.total ||
    !data.currency ||
    !data.funded ||
    !data.mainImage ||
    !data.secondaryImage
  ) {
    return res.status(400).json({ error: "Some fields are required" });
  }

  try {
    const newPost = await createPostService(data);
    res.status(201).json(newPost);
  } catch (_) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
