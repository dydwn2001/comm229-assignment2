import mongoose from "mongoose";
const projectsSchema = new mongoose.Schema({
  title: String,
  firstname: String,
  lastname: String,
  email: String,
  completion: Date,
  description:String,
})
const Projects = mongoose.model('Projects', projectsSchema);
export default Projects;