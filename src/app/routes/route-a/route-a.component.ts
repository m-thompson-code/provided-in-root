import { Component, OnInit } from '@angular/core';
import { AsciiService } from 'src/app/services/ascii.service';

@Component({
  selector: 'app-route-a',
  templateUrl: './route-a.component.html',
  styleUrls: ['./route-a.component.scss']
})
export class RouteAComponent implements OnInit {

  constructor(private readonly asciiService: AsciiService) { }

  ngOnInit(): void {
    this.asciiService.injectArt();
  }

}
