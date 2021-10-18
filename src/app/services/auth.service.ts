import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly url?: string = "http://contatos-nodb.herokuapp.com/registrar";

  constructor(private http: HttpClient) { }

  cadastrar(nome: string, email: string, senha: string) {
    let u = {nome, email, senha}
    return this.http.post(`${this.url}registrar`, u);
  }
}
