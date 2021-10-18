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

  constructor(private authServico: AuthService) { }

  ngOnInit(): void {
  }

  cadastrar(): void {
    console.log(this.nome, this.email);
  }

}
