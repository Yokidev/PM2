import { Component } from '@angular/core';
import { Curso } from '../curso.model';
import { MensajeroService } from '../mensajero.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  titulo = 'Gestión de Cursos';
  id:number=-1;
  
  horario:string='';
  fi:Date;
  ff:Date;
  nameCurso:string='';
  horas:number=0;
  
  cursos:Curso[]=[
    new Curso(new Date("2023-01-19"),new Date("2023-03-19") ,"Angular para todos", 100,"08:30-12:30"),
    new Curso(new Date("2023-01-19"),new Date("2023-03-19") ,"Desarrollo de aplicaciones en Java",380,"08:30-12:30"),
    new Curso(new Date("2023-01-19"),new Date("2023-03-19") ,"HTML, Javascript & CSS", 150,"15:30-21:30"),
    
]  ;


constructor(private Seur:MensajeroService){}

GuardarCurso(){
 
if(this.id===null ||this.id==null || this.id==undefined){
  this.id=-1;
}else if(this.id >=0 && this.id < this.cursos.length){
  this.modCurso();
}else{
  this.addCurso();
}

}

  addCurso(){
   //constructor(fi:Date,ff:Date,curso:string,horas:number,horario:string,){
    let cursoIT=new Curso(this.fi,this.ff,this.nameCurso,this.horas,this.horario);
    this.cursos.push(cursoIT);
    this.id=this.cursos.length-1;
    this.Seur.aviso('Se ha añadido un nuevo Curso');
  }

editCurso(id:number){
  let f=this.cursos[id].fini.toISOString().substring(0,10);
  this.fi=<Date><unknown>f;
  f=this.cursos[id].ffin.toISOString().substring(0,10);
  this.ff=<Date><unknown>f;
  this.nameCurso=this.cursos[id].curso;
  this.horario=this.cursos[id].horario;
  this.horas=this.cursos[id].horas;
  this.id=id;
}
modCurso(){
  this.cursos[this.id].fini=this.fi;
  this.cursos[this.id].ffin=this.ff;
  this.cursos[this.id].curso=this.nameCurso;
  this.cursos[this.id].horas=this.horas;
  this.cursos[this.id].horario=this.horario;
}




}
