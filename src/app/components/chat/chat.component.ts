import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public texto: string = '';

  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit(): void {
  }

  enviar() {
    this.chatService.sendMensaje(this.texto);
    console.log('enviando', this.texto);
    this.texto = '';
  }

}
