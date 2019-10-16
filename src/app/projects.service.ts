import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

let PROJECTS = [
  {
    name: 'Pretotype',
    short_description: 'This is a really short desc',
    description: 'This is the pretotyping test for the class',
    img: 'some/path/to/image',
    stack: ['Wordpress', 'Woocommecre', 'UX Themes'],
    repo: 'some/url/to/repo',
    url: 'some/url/to/online/instance'
  },
  {
    name: 'Another Pretotype',
    short_description: 'This is a really short desc',
    description: 'This is the pretotyping second test for the class',
    img: 'some/path/to/image',
    stack: ['NodeJS', 'Angular', 'Express'],
    repo: 'some/url/to/repo',
    url: 'some/url/to/online/instance'
  }
];


let WEBPROJECTS = [
  {
    name: 'WEB PROTOTYPE',
    short_description: 'This is a really short desc',
    description: 'This is the pretotyping test for the class',
    img: 'http://lapsusdev.com/images/nucleum-optimized.png',
    stack: ['Wordpress', 'Woocommecre', 'UX Themes'],
    repo: 'some/url/to/repo',
    url: 'some/url/to/online/instance'
  },
  {
    name: 'Another WEB Pretotype',
    short_description: 'This is a really short desc',
    description: 'This is the pretotyping second test for the class',
    img: 'http://lapsusdev.com/images/filler.png',
    stack: ['NodeJS', 'Angular', 'Express'],
    repo: 'some/url/to/repo',
    url: 'some/url/to/online/instance'
  }
];

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { 
    this.projects = PROJECTS;
  }

  updateCategory(category: string): any {
    if(category == 'web'){
      this.setProjects(WEBPROJECTS);
    }
  }

  projects: any[];

  setProjects(projects): void {
    this.projects = projects;
  }

  getProjects(category: string): Observable<any[]> {
    if(category == 'web'){
      this.setProjects(WEBPROJECTS);
    } else {
      this.setProjects(PROJECTS);
    }
    return of(this.projects);
  }
}
