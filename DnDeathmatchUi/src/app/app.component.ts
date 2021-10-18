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
      const socket = new SockJS('http://localhost:8080/gkz-stomp-endpoint');
      this.stompClient = Stomp.over(socket);
  
      const _this = this;
      this.stompClient.connect({}, function (frame) {
        _this.setConnected(true);
        console.log('Connected: ' + frame);
  
        _this.stompClient.subscribe('/topic/hi', function (hello) {
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
  
    sendName() {
      this.stompClient.send(
        '/gkz/hello',
        {},
        JSON.stringify({ 'name': this.name })
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
