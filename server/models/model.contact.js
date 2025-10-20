import mongoose from "mongoose";

const contactsSchema = new mongoose.Schema({
 firstname: String,
 lastname: String,
 email:String,
})

const Contacts = mongoose.model('Contacts', contactsSchema);
export default Contacts; 