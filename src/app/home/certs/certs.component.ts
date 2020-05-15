import { Component, OnInit } from '@angular/core';
import { CertsService } from '../../certs.service';


@Component({
  selector: 'app-certs',
  templateUrl: './certs.component.html',
  styleUrls: ['./certs.component.scss']
})
export class CertsComponent implements OnInit {

  constructor(
    private certsService: CertsService
  ) { }

  certs: Array<Object>;
  ngOnInit() {
    this.certs = this.certsService.getCerts()
  }



}
