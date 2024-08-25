import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { AprobadasComponent } from './aprobadas/aprobadas.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { HistoriaComponent } from './historia/historia.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'seguimiento', component: SeguimientoComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'aprobadas', component: AprobadasComponent },
  { path: 'ayuda', component: AyudaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
