import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  res.send(req.body);
})

async function connect() {
  console.log('Starting DB connection...');
  console.log('MONGO_URI:', process.env.MONGO_URI);
  try{
    await mongoose.connect(process.env.MONGO_URI);
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
