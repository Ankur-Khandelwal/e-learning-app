const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();


env.config();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/api', routes);

// SET UP DB CONNECTION
mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_ID}.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(()=>{
  console.log("Database connected");
}).catch((error)=>{
  console.log(error);
});

// STARTING THE SERVER
app.listen(PORT, ()=>{
  console.log(`Server started on port ${PORT}`);
});

app.get('/', (req, res, next)=>{
  res.status(200).json({
    message: 'Welcome to the Cuvette Learning App'    
  });
})