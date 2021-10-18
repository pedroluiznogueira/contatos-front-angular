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
    this.http.post(`${this.url}registrar`, u)
                  .subscribe(
                    {
                      next: data => console.log(data),
                      error: err => console.log(err),
                      complete: () => console.log("O observavel já não tem mais o que ser observado")
                    }
                  );
  }

}
