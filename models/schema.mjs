import mongoose from "mongoose";
const portfolioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  about: { type: String, required: true },
  skills: [{ name: String, icon: String }],
  projects: [{ title: String, description: String, techstack: [String] }],
  contact: { email: String, phone: String, location: String, linkedin: String },
});
export default mongoose.model("portfolio", portfolioSchema);
