import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor(private headSer: HeaderService) { }

  ngOnInit(): void {
    this.headSer.chgHeaderValue(2);
  }

}
