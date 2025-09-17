import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-sexto-componente',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './sexto-componente.html',
  styleUrl: './sexto-componente.css'
})
export class SextoComponente {

//Objeto de formulário 
formulario = new FormGroup({
  nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
  idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)])

});

// Visibilidade dos botões 
btnCadastrar: boolean = true; 

//Vetor Pessoa 
Vetor: Pessoa []

//Função cadastrar 

cadastrar (){
  //Inclusão da função do vetor
  this.Vetor.push(this.formulario.value as Pessoa); 
  
  //Limpeza dos inputs 
  this.formulario.reset();

  //Visualização no console 
  console.table(this.Vetor);
}

//Armazenar indice da pessoa selecionada
indice: number = -1; 

selecionar(indice:number){

  //Atribuir o indice da pessoa
 this.indice = indice;
  
 //Atribuir os dados das pessoa no formulario
 this.formulario.setValue ({
  nome: this.Vetor [indice].nome, 
  idade: this.Vetor [indice].idade,
  cidade: this.Vetor [indice].cidade
 });
 this.btnCadastrar = false;
}
}
