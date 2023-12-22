import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

@Injectable()
export class SocketService {
  private readonly connectedClients: Map<string, Socket> = new Map();

  handleConnection(socket: Socket): void {
    const clientId = socket.id;
    this.connectedClients.set(clientId, socket);

    socket.on('disconnect', () => {
      this.connectedClients.delete(clientId);
    });

    socket.on('message', (data) => {
      broadcast('message', data);
    });

    const broadcast = (event: string, data: any) => {
      socket.emit(event, data);
      socket.broadcast.emit(event, data);
    };
  }
}
