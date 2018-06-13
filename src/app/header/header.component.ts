import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public connexion = false;
  public userConnecte = false;
  public userName = 'Login';
  public pwd = 'password';
  constructor() { }

  ngOnInit() {
  }

  public affichageConnect() {
    this.connexion = !this.connexion;
  }

  public connection() {
    if (this.userName !== 'admin' && this.pwd !== 'admin') {
      alert ('Mot de passe ou User Name incorrect');
    } else {
      this.userConnecte = true;
    }
  }

  public disconnect() {
    this.userConnecte = false;
    this.userName = 'Login';
    this.pwd = 'password';
  }
}
