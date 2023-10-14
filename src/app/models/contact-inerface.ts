import { ObjectId } from 'mongoose';

export interface Contact {
  _id: ObjectId;
  network: string;
  value: string;
  title: string;
}
