export class Alumno{
    //declaraciones de atributos
    nombre:string="";
    apellidos:string="";
    fn:Date;
    curso:string="";
    notaMedia:number=0;
    
    
    //constructor....................................
    constructor(nombre:string,apellidos:string,fn:Date,curso:string,notaMedia:number){
    this.nombre=nombre;
    this.apellidos=apellidos;
    this.fn=fn;
    this.curso=curso;
    this.notaMedia=notaMedia;
    
}
}//fin de la clase Alumno