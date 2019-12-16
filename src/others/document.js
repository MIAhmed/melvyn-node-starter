import mongoose, { Schema } from 'mongoose';



const contactusSchema = new Schema({  talkabout: {
    type: String,
    required: true
  },  
  timeframe: {
      type: String,
      required: true
  },
  projecttype: {
      type: String,
      required: true
  },
  budget: {
      type: String,
      required: true
  },
  description: {
    type: String,
    required: true
    },
  requestor: {
      name: {
          type: String,
          required: true
      },
      companyname: {
          type: String,
          required: true
      },
      email: {
          type: String,
          required: true
      },
      phonenumber: {
          type: String,
          required: true
      }
  }
  
});



export const ContactUs = mongoose.model('ContactUs', contactusSchema);
