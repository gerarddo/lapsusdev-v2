import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [Title]
})
export class AppComponent {

  constructor(private titleService: Title) {}
 
 
  ngOnInit() {
      this.setTitle('lapsusdev');
  }


  public setTitle( newTitle: string) {
      this.titleService.setTitle( newTitle );
  }

}
