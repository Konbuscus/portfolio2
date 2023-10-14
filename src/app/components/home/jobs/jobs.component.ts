import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WorkExperience } from 'src/app/models/work-experience-interface';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  
  active = 0
  
  @Input()
  workExperiences : WorkExperience[];

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
