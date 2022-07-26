import { Component } from '@angular/core';
import { AsciiService } from '../../services/ascii.service';

@Component({
  selector: 'app-route-a',
  templateUrl: './route-a.component.html',
  styleUrls: ['./route-a.component.scss']
})
export class RouteAComponent {
  constructor(private readonly asciiService: AsciiService) { }

  ngOnInit(): void {
    this.asciiService.injectArt();
  }
}
