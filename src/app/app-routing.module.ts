import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectListComponent } from './portfolio/project-list/project-list.component';
import { MenuComponent } from './portfolio/menu/menu.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent 
  },
  { 
    path: 'portfolio', 
    component: PortfolioComponent ,
    children: [
      {
        path: 'web', 
        component: ProjectListComponent,
        data: {category: 'web'}
      },
      {
        path: 'theoric', 
        component: ProjectListComponent,
        data: {category: 'theoric'}
      },
      {
        path: 'scientific', 
        component: ProjectListComponent,
        data: {category: 'scientific'}
      }
    ]
  },
  { path: '**',  redirectTo: '/home', }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
