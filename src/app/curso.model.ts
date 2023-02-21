export class Curso{
    //declaraciones de atributos
    fini:Date;
    ffin:Date;
    curso:string="";
    horas:number=0;
    horario:string='';
    
    
    //constructor....................................
    constructor(fi:Date,ff:Date,curso:string,horas:number,horario:string,){
    
    this.fini=fi;
    this.ffin=ff;
    this.curso=curso;
    this.horas=horas;
    this.horario=horario
}//fin del constructor


}//fin de la clase Curso