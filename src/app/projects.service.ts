import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Router, NavigationEnd, Route, ActivatedRoute } from '@angular/router';


let SCIENTIFICPROJECTS = [
  {
    name: 'Recreating Mona Lisa',
    short_description: 'Genetic algorithm implemented for recreating an image',
    description: 'The implemented code features genetic algorithms, matrix algebra and triangle rasterization. This was created as a homework for the Computational Physics 2 class in 2019.',
    img: '../../../assets/images/monalisa.png',
    implements: ['Genetic Algorithms','Matrix Algebra','Triangle Rasterization','Vectorized code'],
    stack: ['Numpy', 'Matplotlib', 'Jupyter notebook'],
    repo_name: 'gioconda-reconstruction',
    repo: 'https://www.github.com/gerarddo/gioconda-reconstruction',
    url: 'https://www.youtube.com/watch?v=8Frn09aKMqI'
  },
  {
    name: 'Mechanical Statistics of Money Simulation',
    short_description: 'Fixed number of agents and money, multiple transactions.',
    description: 'N people with a total of M/N money units each (where M is the total amount of money in the system) make transactions with one another. This simulation recreates a situation proposed by Yakovenko where analogies between Stefan-Boltzmann particle distribution and a closed economy.',
    img: '../../../assets/images/mechanical_statistics_of_money.png',
    implements: ['Data visualization','Statistics','Vectorized code'],
    stack: ['Numpy', 'Matplotlib', 'Jupyter Notebook'],
    repo_name: 'mechanical_statistics_of_money',
    repo: 'https://www.github.com/gerarddo/mechanical_statistics_of_money',
    url: 'javascript:void(0)'
  }
];

let THEORICPROJECTS = [
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
    name: 'NUCLEUM 2018',
    short_description: 'Student-run congress of chemical sciences and biotechnology.',
    description: 'Pro bono jr. project for the 2018 edition of NUCLEUM congress, the most notorious annual event organized by the chemical sciences, alimentary and biotechnology school at ITESM campus Monterrey.',
    img: '../../../assets/images/nucleum-optimized.png',
    implements: ['Front made from scratch', 'API-based forecast', 'Mobile-friendly', 'Modal implementation', 'Responsive grids'],
    stack: ['NodeJS', 'EJS', 'Express'],
    repo_name: 'nucleumproj',
    repo: 'https://www.github.com/gerarddo/nucleumproj',
    url: 'https://nucleumproj.herokuapp.com/'
  },
  {
    name: 'Filler (API & UI) ',
    short_description: 'Scientific software development project for CIDEP',
    description: 'First scientific development project featuring two independent servers. The API itself contains the G-Code generation algortihms and sends the data over to the UI. Additionally, a  third-party G-Code path visualization tool was integrated.',
    img: '../../../assets/images/filler-optimized.png',
    implements: ['HTTP-based API', 'SPA GUI', 'G-Code path simulator integrated','Server-side UT'],
    stack: ['NodeJS', 'Angular', 'Express','ngBootstrap','Moka'],
    repo_name: 'filler-cidep',
    repo: 'https://www.github.com/gerarddo/filler-cidep',
    url: 'https://filler-cidep.herokuapp.com/'
  }
];

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  constructor(private router: Router, private route: ActivatedRoute) { 
    this.projects = WEBPROJECTS;
    this.currentCategory = 'scientific';
  }
  
  projects: any[];
  currentCategory: string;
  

  setProjects(projects): void {
    this.projects = projects;
  }

  getProjects(category: string): Observable<any[]> {
    if(category == 'web'){
      this.setProjects(WEBPROJECTS);
    } else if (category == 'scientific'){
      this.setProjects(SCIENTIFICPROJECTS);
    } else if (category == 'theoric'){
      this.setProjects(THEORICPROJECTS);
    }
    return of(this.projects);
  }

  setCurrentCategory(category: string): void{
    console.log('Current category updated. Now set to: ' + category);
    this.currentCategory = category;
  }

  getCurrentCategory(): string{
    return this.currentCategory;
  }
}
