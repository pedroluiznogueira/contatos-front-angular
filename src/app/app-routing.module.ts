import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HomeComponent } from './components/home/home.component';
import { ListaDeContatosComponent } from './components/lista-de-contatos/lista-de-contatos.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { SobreComponent } from './components/sobre/sobre.component';

const routes: Routes = [
  { 
    path: '', component: LoginComponent
  },
  { 
    path: 'cadastro', component: CadastroComponent
  },
  { 
    path: 'home', component: HomeComponent,
    children: [
      {
        path: '',
        component: ListaDeContatosComponent
      },
      { 
        path: 'sobre', 
        component: SobreComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
