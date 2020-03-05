import * as mongoose from 'mongoose';

export const CvSchema = new mongoose.Schema(
  {
    name: String,
    start: Date,
    end: Date || Boolean,
    description: String,
    title: String,
    techStack: Array,
  },
  {
    collection: 'cv',
  },
);
