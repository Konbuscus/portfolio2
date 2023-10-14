import { Component, OnInit } from '@angular/core';
import { ObjectId } from 'mongoose';
import { map, Observable } from 'rxjs';
import { Project } from 'src/app/models/project-interface';
import { Skill } from 'src/app/models/skill-inerface';
import { Tech } from 'src/app/models/tech-interface';
import { Education } from 'src/app/models/education-interface';
import { WorkExperience } from 'src/app/models/work-experience-interface';
import { Contact } from 'src/app/models/contact-inerface';
import { HttpClient } from '@angular/common/http';
import { PortfolioQuery } from 'src/app/models/portfolio-query-intierface';
@Component({
  selector: 'api',
  template: '',
})
export class ApiService implements OnInit {
  constructor(private readonly httpClient: HttpClient) {
    
  }
  private baseURL = 'https://portfolio-api-4u9u.onrender.com/api';
  private PROJECTS = '/projects';
  private SKILLS = '/skills';
  private TECHS = '/techs';
  private WORKEXPERIENCES = '/workexperiences';
  private EDUCATION = '/educations';
  private CONTACTS = '/contact';

  ngOnInit(): void {}

  getProjects(): Observable<PortfolioQuery> {
    try {
      return this.httpClient.get<PortfolioQuery>(this.baseURL + this.PROJECTS);
    } catch (err) {
      console.log(err);
    }
  }
  getProject(_id: ObjectId):Observable<PortfolioQuery> {
    try {
      return this.httpClient.get<PortfolioQuery>(this.baseURL + this.PROJECTS + '/' + _id);
    } catch (err) {
      console.log(err);
    }
  }
  getSkills(): Observable<PortfolioQuery> {
    try {
      return this.httpClient.get<PortfolioQuery>(this.baseURL + this.SKILLS);
    } catch (err) {
      console.log(err);
    }
  }
  getTechs(): Observable<PortfolioQuery> {
    try {
      return this.httpClient.get<PortfolioQuery>(this.baseURL + this.TECHS);
    } catch (err) {
      console.log(err);
    }
  }
  getEducation(): Observable<PortfolioQuery> {
    try {
      return this.httpClient.get<PortfolioQuery>(this.baseURL + this.EDUCATION);
    } catch (err) {
      console.log(err);
    }
  }
  getWorkExperiences(): Observable<PortfolioQuery> {
    try {
      return this.httpClient.get<PortfolioQuery>(this.baseURL + this.WORKEXPERIENCES);
    } catch (err) {
      console.log(err);
    }
  }
  getContacts(): Observable<PortfolioQuery> {
    try {
      return this.httpClient.get<PortfolioQuery>(this.baseURL + this.CONTACTS);
    } catch (err) {
      console.log(err);
    }
  }
}
