import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'seguimiento', component: SeguimientoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
