import { Document } from 'mongoose';

export interface Work extends Document {
  readonly name: string;
  readonly description: string;
  readonly order: 1 | 2 | 3;
  readonly date: number;
  readonly image: string;
  readonly techStack: Array<string>;
  readonly goals: Array<string>;
  readonly githubLink: string;
  readonly liveLink: string;
}
