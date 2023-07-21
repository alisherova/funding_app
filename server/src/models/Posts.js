import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  company: {
    logo: { type: String },
    name: { type: String },
  },
  mainImage: { type: String },
  secondaryImage: { type: String },
  title: { type: String, trim: true },
  description: { type: String, trim: true },
  lastDay: { type: Date },
  supporters: { type: Number },
  funded: { type: Number },
  total: { type: Number },
  currency: {
    character: { type: String },
    abbr: { type: String },
  },
});

const PostModel = mongoose.model("posts", PostSchema);

export default PostModel;
