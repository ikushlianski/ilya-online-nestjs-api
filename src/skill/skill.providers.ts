import { Connection } from 'mongoose';

import { SkillSchema } from './skill.schema';
import { SKILL_MODEL_PROVIDER, DB_PROVIDER } from '../db/constants';

export const skillProviders = [
  {
    provide: SKILL_MODEL_PROVIDER,
    useFactory: (connection: Connection) =>
      connection.model('Skill', SkillSchema), // resulting db collection is 'skills'
    inject: [DB_PROVIDER],
  },
];
