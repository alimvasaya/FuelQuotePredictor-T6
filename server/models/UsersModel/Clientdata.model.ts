import { Schema, model, models } from 'mongoose';

const ClientDataSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
    },

    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },

    address1: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    address2: {
      type: String,
      required: false,
      trim: true,
      maxlength: 100,
    },

    city: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    state: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2,
    },

    zipcode: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 9,
      minlength: 5,
    },
  },
  {
    timestamps: true,
  },
);

const ClientData =
  models.ClientDataSchema || model('client_data', ClientDataSchema);

export default ClientData;
