import mongoose, { Schema, models } from 'mongoose';

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
        'Invalid email address',
      ],
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
    },
    dataCompleted: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const UserCredentials =
  models.UserSchema || mongoose.model('user_credentials', UserSchema);

export default UserCredentials;
