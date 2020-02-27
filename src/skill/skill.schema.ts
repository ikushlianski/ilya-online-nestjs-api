import * as mongoose from 'mongoose';

export const SkillSchema = new mongoose.Schema({
  name: String,
  description: String,
  group: String,
  order: Number,
  lastUsed: Number,
  frequency: String,
  hot: Boolean,
  top: Boolean,
  workedWith: Array,
  yetToLearn: Array,
  image: String,
  cv: Boolean,
});
