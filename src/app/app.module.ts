import   "@angular/common/locales/global/es";
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


import { HeaderComponent } from './header/header.component';
import { HijoComponent } from './hijo/hijo.component';
import { MensajeroService } from './mensajero.service';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { HomeComponent } from "./home/home.component";
import { CursosComponent } from './cursos/cursos.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from "@angular/router";
import { DatocursosComponent } from "./datocursos/datocursos.component";



const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'alumnos',component:AlumnosComponent},
  {path:'cursos',component:CursosComponent},
  {path:'quienes',component:QuienesComponent},
  {path:'contacto',component:ContactoComponent},
  //{path:'**',component:ErrorPersonalizadoComponent}
  ];




@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HijoComponent,
        HomeComponent,
        AlumnosComponent,
        HomeComponent,
        DatocursosComponent,
        CursosComponent,
        QuienesComponent,
        ContactoComponent
        
    ],
    providers: [{ provide: LOCALE_ID, useValue: "es-ES" }, MensajeroService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        
    ]
})
export class AppModule { }
