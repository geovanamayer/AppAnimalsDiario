export class Contato{
 private _nome: string;
 private _especie: number;
 private _genero!: number;
 private _raridade!: string;

 constructor(nome : string, especie: number){
  this._nome = nome;
  this._especie= especie;
 }

 public get nome() : string{
  return this._nome;
 }

 public set nome(nome: string){
  this._nome = nome;
 }

 public get raridade():string{
    return this._raridade;
}

 public set raridade(raridade : string){
  this._raridade = raridade;
 
}


 public get especie() : number{
  return this._especie;
 }

 public set especie(especie: number){
  this._especie = especie;
 }


public get genero(): number {
  return this._genero;
}
public set genero(value: number) {
  this._genero = value;
}



}
