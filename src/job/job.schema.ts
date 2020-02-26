import * as mongoose from 'mongoose';

export const JobSchema = new mongoose.Schema(
  {
    open: Boolean,
  },
  {
    collection: 'lookingForJob',
  },
);
