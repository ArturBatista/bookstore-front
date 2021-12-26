import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

  categorias:Categoria[] = [];

  displayedColumns: string[] = ['id', 'nome', 'descricao','livros', 'acoes'];

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }


  findAll(): void {
    this.service.findAll().subscribe(resposta =>{
      console.log(resposta);
      this.categorias  = resposta;
    })
  }

  navegarParaCategoriaCreate(): void {
    this.router.navigate(["categorias/create"])
  }

}
