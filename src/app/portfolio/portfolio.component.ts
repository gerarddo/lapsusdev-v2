import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(
    public router: Router,
    public projectsService: ProjectsService,
    public route: ActivatedRoute
    ) 
    {
      router.events.subscribe(function(val){
      
        if(val instanceof NavigationEnd){
  
          try {
            let currentCategory = route.snapshot.firstChild.data.category;
            projectsService.setCurrentCategory(currentCategory);
          } catch (TypeError) {
            let url = val.url;
            let parseCategory = function(url){return url.substring(url.lastIndexOf('/') + 1)}
            let lastUrlSection = parseCategory(url);
            let currentCategory = projectsService.getCurrentCategory();
            if(lastUrlSection == 'portfolio'){
              router.navigate(['portfolio/' + currentCategory])
            }
            console.log('Navigated to portfolio without category. Redirecting to current category: ' + currentCategory);
          }

        }
      })
  
    }

  ngOnInit() {

    
  }

}
