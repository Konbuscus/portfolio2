import { ObjectId } from 'mongoose';

export interface Education {
  _id: ObjectId;
  graduation: string;
  where: string;
  date: string;
  entityLogo: string;
}
