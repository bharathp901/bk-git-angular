import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Card } from '../../shared/component/card/card';
import { Sidebar } from '../../shared/component/sidebar/sidebar';
import { MessageItem } from '../../shared/component/message-item/message-item';

@Component({
  selector: 'app-messages',
  imports: [ Card, Sidebar, MessageItem],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './messages.html',
  styleUrl: './messages.scss'
})
export class Messages {

}
