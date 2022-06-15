import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BACKEND_URL, SEND_MESSAGE } from '../../constants/backend';
import { Message } from '../../models/message.interface';

@Injectable({
  providedIn: 'root'
})
export class DialogflowService {

  constructor(private http: HttpClient) { }

  sendMessage(message: Message): Promise<HttpResponse<Object>> {
    return new Promise((resolve, reject) => {
      this.http.get(BACKEND_URL + SEND_MESSAGE, {observe: 'response', params: {
        message: message.content
      }})
      .subscribe(response => {
        resolve(response);
      })
    })
    
  }
}
