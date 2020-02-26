import { Document } from 'mongoose';

export interface JobInterface extends Document {
  readonly open: boolean;
}
