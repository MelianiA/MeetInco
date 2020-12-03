import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

  annonces  =['Pour la vie','Faire connaissance','Je m\'ennuie'];
  constructor() { }

  ngOnInit(): void {
  }

}
