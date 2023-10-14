import { Component, EventEmitter, OnInit, Output, Type } from '@angular/core';
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
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private readonly apiService: ApiService,
    private readonly translateService: TranslateService
  ) {}
  
  contacts: Contact[];
  educations: Education[];
  workExperiences: WorkExperience[];
  skills: Skill[];
  techs: Tech[];
  projects: Project[];
  currentLang: string;
  ngOnInit(): void {
    this.currentLang = 'fr';
    this.apiService
      .getContacts()
      .pipe(
        map((resp) => {
          this.contacts = resp.data as Contact[];
        })
      )
      .subscribe();
    this.apiService
      .getEducation()
      .pipe(
        map((resp) => {
          this.educations = resp.data as Education[];
        })
      )
      .subscribe();
    this.apiService
      .getWorkExperiences()
      .pipe(
        map((resp) => {
          console.log(this.currentLang);
          this.workExperiences = (resp.data as WorkExperience[])
            .filter((wo) => wo.lang == this.currentLang)
            .sort((a, b) =>
              b.Date.split('-')[0].localeCompare(a.Date.split('-')[0])
            );
          console.log(this.workExperiences);
        })
      )
      .subscribe();

    this.apiService
      .getSkills()
      .pipe(
        map((resp) => {
          this.skills = resp.data as Skill[];
        })
      )
      .subscribe();
    this.apiService
      .getTechs()
      .pipe(
        map((resp) => {
          this.techs = resp.data as Tech[];
        })
      )
      .subscribe();
    this.apiService
      .getProjects()
      .pipe(
        map((resp) => {
          this.projects = resp.data as Project[];
        })
      )
      .subscribe();
  }
}
