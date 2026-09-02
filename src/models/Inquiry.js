import mongoose from 'mongoose';

const InquirySchema = new mongoose.Schema(
  {
    formType: {
      type: String,
      enum: ['contact', 'quote'],
      default: 'contact',
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      default: '',
    },
    service: {
      type: String,
      default: 'General Inquiry',
    },
    areaSize: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      default: '',
    },
    estimatedPrice: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
    notes: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      enum: ['New', 'Contacted', 'Quoted', 'In Progress', 'Completed', 'Closed'],
      default: 'New',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Inquiry || mongoose.model('Inquiry', InquirySchema);
