import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    this.connect()
  }

  greetings: string[] = [];
    disabled = true;
    name: string;
    private stompClient = null;

    setConnected(connected: boolean) {
      this.disabled = !connected;
  
      if (connected) {
        this.greetings = [];
      }
    }
  
    connect() {
      const socket = new SockJS('http://localhost:8080/client-registry');
      this.stompClient = Stomp.over(socket);
  
      const _this = this;
      this.stompClient.connect({}, function (frame) {
        _this.setConnected(true);
        console.log('Connected: ' + frame);
  
        _this.stompClient.subscribe('/out/message', function (hello) {
          _this.showGreeting(JSON.parse(hello.body).greeting);
        });
      });
    }
  
    disconnect() {
      if (this.stompClient != null) {
        this.stompClient.disconnect();
      }
  
      this.setConnected(false);
      console.log('Disconnected!');
    }
  
    pingBackend() {
      this.stompClient.send(
        '/in/message',
        {},
        JSON.stringify({ 'player': 'name from frontend', 'id':'id from frontend' })
      );
    }
  
    showGreeting(message) {
      this.greetings.push(message);
    }
}

export interface GameState{
  player: string;
  id: string;
}
