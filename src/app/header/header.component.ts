import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../services/user-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public connexion = false;
  public userConnecte = false;
  user = [];

  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit() {
    this.user = this.userService.user;
  }

  public affichageConnect() {
    this.connexion = !this.connexion;
  }

  public connection() {
    this.userConnecte = true;
  }

  public disconnect() {
    this.userConnecte = false;
  }
}
