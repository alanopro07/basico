import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io'

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public checkstatus = false;

  constructor(
    private socket: Socket
  ) {
    this.estatusCheck();
   }

  public estatusCheck() {
    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
      this.checkstatus = true;
    });

     this.socket.on('disconnect', () => {
      console.log('desconectado al servidor');
      this.checkstatus = false;
    });
  }

  emit( evento: string, payload?: any, callback?: Function) {
    console.log('Emitiendo', evento);
    // dispara evento hacia el ser
    this.socket.emit(evento, payload, callback);
  }
}
