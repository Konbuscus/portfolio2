import { ObjectId } from 'mongoose';

export interface WorkExperience {
  _Id: ObjectId;
  Where: string;
  Description: string;
  As: string;
  Date: string;
  StillActive: boolean;
  CompanyLogo: string;
  lang:string;
}
