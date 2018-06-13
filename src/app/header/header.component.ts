import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public connexion = false;
  public userConnecte = false;
  constructor() { }

  ngOnInit() {
  }

  public affichageConnect() {
    this.connexion = !this.connexion;
  }

  public connection(){
    this.userConnecte = true;
  }

  public disconnect(){
    this.userConnecte = false;
  }
}
