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
  selectedCarrera: string = '';
  carreras: string[] = ['Programador Universitario en Informtica'];

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
    if (this.selectedCarrera) {
      localStorage.setItem('carreraSeleccionada', this.selectedCarrera);
      this.mostrarBotonInicio = false;
      this.materiasService.loadDefaultMateriasData();
      this.router.navigate(['/seguimiento']);
    }
  }
}
