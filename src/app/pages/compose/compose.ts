import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Card } from '../../shared/component/card/card';
import { Sidebar } from '../../shared/component/sidebar/sidebar';

@Component({
  selector: 'app-compose',
  imports: [Card, Sidebar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './compose.html',
  styleUrl: './compose.scss'
})
export class Compose {

}
