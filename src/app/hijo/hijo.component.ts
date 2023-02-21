import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Alumno } from '../alumn.model';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

indice:number=0;

@Input('arrayAlum')alumnos:Alumno[];
@Output() id_estudiante=new EventEmitter<number>();

constructor(){}
 
VerDat(i:number){
this.id_estudiante.emit(i);
}
 
notaColor(n:number):string{
  let color='';
  if(n<=4.5){
    color='red';}
  else if(n>= 8.5){
    color='#0000FF';
  }else{
    color='black';
  }

return color;
}

}
