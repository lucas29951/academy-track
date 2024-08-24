import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { AprobadasComponent } from './aprobadas/aprobadas.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'seguimiento', component: SeguimientoComponent },
  { path: 'aprobadas', component: AprobadasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
