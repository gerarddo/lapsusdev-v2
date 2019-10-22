import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './shared/contact/contact.component';
import { AboutComponent } from './home/about/about.component';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it
import { FlexLayoutModule } from '@angular/flex-layout';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './portfolio/project/project.component';
import { ProjectListComponent } from './portfolio/project-list/project-list.component';
import { ImageComponent } from './shared/image/image.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './portfolio/menu/menu.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CertsComponent } from './home/certs/certs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PortfolioComponent,
    ProjectComponent,
    ProjectListComponent,
    ImageComponent,
    FooterComponent,
    MenuComponent,
    CertsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    LazyLoadImageModule,
    ScrollingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
