import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Contato } from 'src/app/model/entities/Contato';
import { ContatoService } from 'src/app/model/services/contato.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public listaDeContatos : Contato[] = [];

  constructor(private alertController: AlertController,
    private router : Router, private contatoService : ContatoService) {
      this.listaDeContatos = this.contatoService.obterTodos();
    }



  irParaCadastrar(){
    this.router.navigate(["/cadastrar"]);
  }

  editar(indice :  number){
    this.router.navigate(["/detalhar", indice]);
  }

  onSearch(event: CustomEvent) {
    const term = event.detail.value;
    console.log('Termo de pesquisa:', term);
  }
}
