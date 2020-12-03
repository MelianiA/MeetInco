import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MeetIncognito';
  name = "Abderrahmen";

  changeName(){
    this.name = "MELIANI"
  }

  valideNewName(nom: any){
     this.name = nom;
  }
}
