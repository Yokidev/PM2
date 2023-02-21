import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeroService {
constructor(){}
 aviso(mensaje:string) {
  alert('Aviso: '+mensaje);
 }
}
