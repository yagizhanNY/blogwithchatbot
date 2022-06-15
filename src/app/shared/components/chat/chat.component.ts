import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../models/message.interface';
import { ResponseMessage } from '../../models/response-message.interface';
import { DialogflowService } from '../../services/dialogflow/dialogflow.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [DialogflowService]
})
export class ChatComponent implements OnInit {
  messageText: string = "";
  messages: Message[] = [];
  constructor(private chatService: DialogflowService) { }

  @Input() isVisible: boolean = false;

  ngOnInit(): void {
  }

  async sendMessage() {
    const message: Message = {
      content: this.messageText,
      isResponse: false
    }
    this.messages.push(message);
    this.messageText = "";
    const response = (await this.chatService.sendMessage(message)).body as ResponseMessage;

    const resMessage: Message = {
      content: response.response,
      isResponse: true
    }

    this.messages.push(resMessage);
  }

}
