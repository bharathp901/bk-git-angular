import { Header } from './../header/header';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  imports: [CommonModule, RouterModule, Header],
  templateUrl: './master.html',
  styleUrl: './master.scss'
})
export class Master {

}
