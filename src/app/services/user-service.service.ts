import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  user: [
    {
      nom: string,
      prenom: string,
      adresse: string,
      ville: string,
      Telephone: number,
      password: string
    }
  ];

  user: [
    {
      name: 'pierre',
      password: 'toto'
    }
  ];

  constructor() { }
}
