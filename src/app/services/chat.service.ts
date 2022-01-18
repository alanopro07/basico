import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    // comunicacion entre usuarios
    public webSocketService: WebsocketService
  ) { }

  sendMensaje(mensaje: string) {
    const payload = {
      de: 'Fernando',
      cuerpo: mensaje
    };

    this.webSocketService.emit('mensaje', payload);
  }

}
