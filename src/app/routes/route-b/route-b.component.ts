import { Component, OnInit } from '@angular/core';
import { AsciiService } from 'src/app/services/ascii.service';

@Component({
  selector: 'app-route-b',
  templateUrl: './route-b.component.html',
  styleUrls: ['./route-b.component.scss']
})
export class RouteBComponent implements OnInit {

  constructor(private readonly asciiService: AsciiService) { }

  ngOnInit(): void {
    this.asciiService.injectArt();
  }

}
