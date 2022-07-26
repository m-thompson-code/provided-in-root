import { Component } from '@angular/core';
import { AsciiService } from '../../services/ascii.service';

@Component({
  selector: 'app-route-b',
  templateUrl: './route-b.component.html',
  styleUrls: ['./route-b.component.scss']
})
export class RouteBComponent {
  constructor(private readonly asciiService: AsciiService) { }

  ngOnInit(): void {
    this.asciiService.injectArt();
  }
}
