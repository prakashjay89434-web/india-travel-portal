// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log(`MongoDB Connected! ✅`);
//   } catch (error) {
//     console.error(`MongoDB Error: ${error.message} ❌`);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

// Temporary export
const connectDB = () => {
  console.log('DB skipped for now!');
};

module.exports = connectDB;