import { Component } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DnDeathmatchUi';

  constructor(private httpClient: HttpClient){

  }

  pingBackend(){
    console.log("Ping on Frontend side");
    this.httpClient.get('http://localhost:8080/UI/hello').subscribe(
      (response) => { console.log(response) },
      (error) => { console.log(error); });;
  }
}
