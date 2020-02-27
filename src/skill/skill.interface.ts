import { Document } from 'mongoose';

type SkillGroups = 'frontend' | 'backend' | 'devTools' | 'misc' | 'future';

export interface Skill extends Document {
  readonly name: string;
  readonly description: string;
  readonly group: SkillGroups;
  readonly order: 1 | 2 | 3;
  readonly lastUsed: number;
  readonly frequency: string;
  readonly hot: boolean;
  readonly top: boolean;
  readonly workedWith: Array<string>;
  readonly yetToLearn: Array<string>;
  readonly image: string;
  readonly cv: boolean;
}
