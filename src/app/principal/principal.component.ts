import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MateriasService } from '../services/materias.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  mostrarBotonInicio = false;

  constructor(
    private materiasService: MateriasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const materias = this.materiasService.checkMateriasInLocalStorage();

    if (materias) {
      this.mostrarBotonInicio = false;
    } else {
      this.mostrarBotonInicio = true;
    }
  }

  iniciar() {
    this.materiasService.loadDefaultMateriasData();
    this.router.navigate(['/materias']);
  }
}
