import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Curso } from '../curso.model';

@Component({
  selector: 'app-datocursos',
  templateUrl: './datocursos.component.html',
  styleUrls: ['./datocursos.component.css']
})
export class DatocursosComponent {
  indice:number=0;

  @Input('arrayCursos')cursos:Curso[];
  @Output() id_curso=new EventEmitter<number>();
  
  constructor(){}
   
  VerCurso(i:number){
  this.id_curso.emit(i);
  }
   
  horasColor(n:number):string{
    let color='';
    if(n<=100){
      color='red';}
    else if(n>= 300){
      color='#0000FF';
    }else{
      color='black';
    }
  
  return color;
  }
}
