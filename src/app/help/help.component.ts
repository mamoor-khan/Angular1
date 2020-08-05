import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(private headSer: HeaderService) { }

  ngOnInit(): void {
    this.headSer.chgHeaderValue(3);
  }

}
