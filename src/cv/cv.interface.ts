import { Document } from 'mongoose';

interface Job {
  name: string;
  start: Date;
  end: Date | false;
  description?: string;
  title: string;
  techStack?: Array<string>;
}

export interface CV extends Document {
  readonly job: Job;
}
