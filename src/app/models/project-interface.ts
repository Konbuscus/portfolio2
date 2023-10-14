import { ObjectId } from 'mongoose';

export interface Project {
  _id: ObjectId;
  title: string;
  body: string;
  image: string;
  datePublished: string;
  published: boolean;
  excerpt: string;
}
