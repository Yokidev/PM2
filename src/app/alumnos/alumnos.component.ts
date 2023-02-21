import { Component } from '@angular/core';
import { Alumno } from '../alumn.model';
import { MensajeroService } from '../mensajero.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {

  titulo = 'Gestión de Alumnos';
  id:number=-1;
  nombre:string='';
  apellidos:string='';
  fn:Date;
  curso:string='';
  notaMedia:number=0;
  
  alumnos:Alumno[]=[
    new Alumno("Juan","Día Carrefour",new Date("1990-02-19") ,"Angular para todos", 8),
    new Alumno("Ana","De Armas Tomar",new Date("2005-01-20") ,"Desarrollo de aplicaciones en Java", 9),
    new Alumno("Lily","Manily",new Date("1995-12-19") ,"HTML, Javascript & CSS", 4),
    new Alumno("Johana","The Crazy Queen of Castle",new Date("2005-12-12"),"Angular para todos",  5),
]  ;


constructor(private Seur:MensajeroService){}

GuardarAlumno(){
 
if(this.id===null ||this.id==null || this.id==undefined){
  this.id=-1;
}else if(this.id >=0 && this.id < this.alumnos.length){
  this.modAlumno();
}else{
  this.addAlumno();
}

}

  addAlumno(){
   
    let estudiante=new Alumno(this.nombre,this.apellidos,this.fn,this.curso,this.notaMedia);
    this.alumnos.push(estudiante);
    this.id=this.alumnos.length-1;
    this.Seur.aviso('Se ha añadido un nuevo alumno');
  }

editAlumno(id:number){
  this.nombre=this.alumnos[id].nombre;
  this.apellidos=this.alumnos[id].apellidos;
  let d=this.alumnos[id].fn.toISOString().substring(0,10);
  this.fn=<Date><unknown>d;
  this.curso=this.alumnos[id].curso;
  this.notaMedia=this.alumnos[id].notaMedia;
  this.id=id;
}
modAlumno(){
  this.alumnos[this.id].nombre=this.nombre;
  this.alumnos[this.id].apellidos=this.apellidos;
  this.alumnos[this.id].fn=this.fn;
  this.alumnos[this.id].curso=this.curso;
  this.alumnos[this.id].notaMedia=this.notaMedia;
}


}
