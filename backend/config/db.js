require('dotenv').config();

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('mongoDB connection ok');
  } catch (error) {
    console.log('ca marche pas');
    process.exit(1);
  }
}

module.exports = connectDB