import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClientModule) { }

  cadastrar(nome: string, email: string, senha: string) {
    console.log(nome, email, senha)
  }

}
