import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Card } from '../../shared/component/card/card';

@Component({
  selector: 'app-login',
  imports: [Card],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

}
