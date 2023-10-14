import { ObjectId } from 'mongoose';

export interface Skill {
  _id: ObjectId;
  name: string;
  percentage: number;
}
