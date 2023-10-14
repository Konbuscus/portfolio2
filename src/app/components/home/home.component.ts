import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/my-portfolio/api.service';
import { ContactComponent } from './contact/contact.component';
import { Contact } from 'src/app/models/contact-inerface';
import { Education } from 'src/app/models/education-interface';
import { WorkExperience } from 'src/app/models/work-experience-interface';
import { Skill } from 'src/app/models/skill-inerface';
import { Tech } from 'src/app/models/tech-interface';
import { Project } from 'src/app/models/project-interface';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private readonly apiService: ApiService) {}

  contacts: Contact[];
  educations: Education[];
  workExperiences: WorkExperience[];
  skills: Skill[];
  techs: Tech[];
  projects: Project[];

  ngOnInit(): void {
    this.apiService.getContacts().pipe(
      map((resp) => {
        this.contacts = resp.data as Contact[];
      })
    ).subscribe();
    this.apiService.getEducation().pipe(
      map((resp) => {
        this.educations = resp.data as Education[];
      })
    ).subscribe();
    this.apiService.getWorkExperiences().pipe(map((resp ) => {
      this.workExperiences = resp.data as WorkExperience[];
      console.log(this.workExperiences);
    })).subscribe();

    this.apiService.getSkills().pipe(
      map((resp) => {
        this.skills = resp.data as Skill[];
      })
    ).subscribe();
    this.apiService.getTechs().pipe(
      map((resp) => {
        this.techs = resp.data as Tech[];
      })
    ).subscribe();
    this.apiService.getProjects().pipe(
      map((resp) => {
        this.projects = resp.data as Project[];
      })
    ).subscribe();
  }
}
