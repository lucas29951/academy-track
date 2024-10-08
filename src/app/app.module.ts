import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MateriasService } from './services/materias.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { AprobadasComponent } from './aprobadas/aprobadas.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { HistoriaComponent } from './historia/historia.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CabeceraComponent,
    SeguimientoComponent,
    AprobadasComponent,
    AyudaComponent,
    HistoriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [MateriasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
