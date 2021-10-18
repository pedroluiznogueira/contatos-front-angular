import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

interface response {
  msg: string;
  token: string;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome = '';
  email = '';
  senha = '';
  conf = '';

  constructor(
    private servico: AuthService,
    private router: Router
    ) {}

  ngOnInit(): void {
  }

  cadastrar(): void {
    let observable = this.servico.cadastrar(this.nome, this.email, this.senha);
    observable.subscribe(
        {
          next: data => {
            // salvar o token no session storage
            window.sessionStorage.setItem("token", (<response>data).token),
            // direcionar o usuário para a home
            this.router.navigateByUrl("/home")
          },

          error: err => console.log(err),
          complete: () => console.log("O observavel já não tem mais o que ser observado")
        }
    );
  }

}
