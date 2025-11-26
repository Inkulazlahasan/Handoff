const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  varsityId: {
    // rename id → varsityId
    type: String,
    required: true,
  },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  verified: { type: Boolean, default: false },
  verificationToken: String,
  role: { type: String, enum: ['user', 'admin'], default: 'user' }, // Add admin role
<<<<<<< HEAD
  phoneNumber: { type: String }, // Phone number for WhatsApp chat
  resetToken: String,
  resetTokenExpires: Date,
=======
>>>>>>> b87634541d4cd96c63876b9b589c09bf2e1db5ec
  address: [
    {
      name: String,
      mobileNo: String,
      houseNo: String,
      city: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
