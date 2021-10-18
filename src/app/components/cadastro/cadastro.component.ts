import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private servico: AuthService) { }

  ngOnInit(): void {
  }

  cadastrar(): void {
    this.servico.cadastrar(this.nome, this.email, this.senha);
  }

}
