import mongoose from "mongoose";
const contactsSchema = new mongoose.Schema({
 firstname: String,
 lastname: String,
 email:String,
})
const Contacts = mongoose.model('Contacts', contactsSchema);

const projectsSchema = new mongoose.Schema({
  title: String,
  firstname: String,
  lastname: String,
  email: String,
  completion: Date,
  description:String,
})
const Projects = mongoose.model('Projects', projectsSchema);

const educationSchema = new mongoose.Schema({
  title: String,
  firstname: String,
  lastname: String,
  email: String,
  completion: Date,
  description:String,
})
const Education = mongoose.model('Education', educationSchema);


const usersSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  created: Date,
  upstated: Date,
});
const Users = mongoose.model('Users', usersSchema);

export {Contacts,Projects,Education,Users}
