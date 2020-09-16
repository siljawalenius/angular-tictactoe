import { Component, Input } from '@angular/core';

//decorators are things that start with an @
@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  @Input() value : 'X' | 'O';
}
