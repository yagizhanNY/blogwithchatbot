import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-modal',
  templateUrl: './chat-modal.component.html',
  styleUrls: ['./chat-modal.component.css']
})
export class ChatModalComponent implements OnInit {

  constructor() { }
  isVisible: boolean = false;
  ngOnInit(): void {
  }

  chatbotClicked() {
    this.isVisible = !this.isVisible;
  }

}
