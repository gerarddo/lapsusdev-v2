import { Component, OnInit } from '@angular/core';

import { ProjectsService } from '../../projects.service';

import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})


export class ProjectListComponent implements OnInit {

  constructor(
    private projectsService: ProjectsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.category = (data.category));
    this.sub = this.getProjects(this.category);
  }

  projects: any[];
  
  sub: Subscription;

  category: string;
  
  getProjects(category): Subscription {
    return this.projectsService.getProjects(category).subscribe(projects => this.projects = projects);
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
