import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Card } from "../card/card";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [Card, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {

}
