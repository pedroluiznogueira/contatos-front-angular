import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  cadastrar(): void {
    console.log(this.nome, this.email);
  }

}
