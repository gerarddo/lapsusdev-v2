import { Injectable } from '@angular/core';

let CERTIFICATES = [
  {
    emitter_name: 'CeroUno',
    emitter_url: 'https://www.cerouno.io',
    emitted: [
      {
        name: 'Cybersecurity',
        stack: ['Kali linux', 'Network scanning', 'Social engineering','Forensics analyisis', 'Web App Security', 'Passive/Active sniffing', 'Federal Data Protection law'],
        url: '../../../assets/certs/cybersecurity_cert.png'
      }
    ]
  },
  {
    emitter_name: 'Northware',
    emitter_url: 'https://www.northware.mx',
    emitted: [
      {
        name: 'SQL Beginner',
        // short_description: 'Genetic algorithm implemented for recreating an image',
        // description: 'The implemented code features genetic algorithms, matrix algebra and triangle rasterization. This was created as a homework for the Computational Physics 2 class in 2019.',
        // img: '../../../assets/images/monalisa.png',
        // implements: ['Genetic Algorithms','Matrix Algebra','Triangle Rasterization','Vectorized code'],
        stack: ['SQL Server', 'Entity Framework'],
        // repo_name: 'genetic_algorithm_monalisa',
        // repo: 'https://github.com/gerarddo/genetic_algorithm_monalisa',
        url: '../../../assets/certs/SQL_beginner.jpg'
      },
      {
        name: 'SQL Intermediate',
        stack: ['SQL Server', 'Entity Framework'],
        url: '../../../assets/certs/SQL_intermediate.jpg'
      },
      {
        name: 'SQL Advanced',
        stack: ['SQL Server', 'Entity Framework'],
        url: '../../../assets/certs/SQL_advanced.jpg'
      },
    ]
  },
  {
    emitter_name: 'Udemy',
    emitter_url: 'https://www.udemy.com',
    emitted: [
      {
        name: 'The Web Developer Bootcamp',
        stack: ['HTML/EJS', 'CSS/Bootstrap/Responsive', 'Javascript/jQuery', 'NodeJS/Express/Heroku', 'MongoDB/Mongoose'],
        url: '../../../assets/certs/UC-1KXZVZ6L.pdf'
      },
      {
        name: 'Become a Good Matlab programmer in less than 30 days',
        stack: ['Plotting', 'Vectorized code', 'Matrix algebra', 'Complex algebra', 'Numeric calculus'],
        url: '../../../assets/certs/UC-1LMM8VFI.pdf'
      },
    ]
  },

  


];

@Injectable({
  providedIn: 'root'
})
export class CertsService {

  constructor() { }


  getCerts(): Array<Object> {
    return CERTIFICATES;
  }
}
