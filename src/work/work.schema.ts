import * as mongoose from 'mongoose';

export const WorkSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    order: Number,
    date: Number,
    image: String,
    techStack: Array,
    goals: Array,
    githubLink: String,
    liveLink: String,
  },
  {
    collection: 'works',
  },
);
