import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {Contacts,Projects,Education,Users} from '../module/module.js'




dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(helmet());
app.use(cors());
app.get('/', (req, res) =>{
  res.json({"message": "Welcome to My Application Portfolio" });
})

// app.get('/', async(req, res) => {
//  try {
//     const users = await User.find({});
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// })

app.post('/user', async(req, res) => {
   try {
    const project = await Projects.create(req.body);
    
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
})

async function connect() {
  console.log('Starting DB connection...');
  try
  { await mongoose.connect(process.env.MONGO_URI);
  console.log("data base successfully connected");
  app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}/`)
});

  }
  catch(error){
    console.error("Error is ", error);

  }

  

}
connect();
