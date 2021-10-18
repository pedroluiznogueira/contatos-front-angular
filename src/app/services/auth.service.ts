import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  cadastrar(nome: string, email: string, senha: string) {
    console.log(nome, email, senha)
  }
}
