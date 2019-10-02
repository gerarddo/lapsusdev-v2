import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectListComponent } from './portfolio/project-list/project-list.component';

const routes: Routes = [
  { 
    path: '', 
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
        path: 'academic', 
        component: ProjectListComponent,
        data: {category: 'academic'}
      },
      {
        path: 'scientific', 
        component: ProjectListComponent,
        data: {category: 'scientific'}
      }
    ]
  },
  { path: '**', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
