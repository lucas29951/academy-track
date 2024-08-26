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
  carreras: any[] = [];

  constructor(
    private materiasService: MateriasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.materiasService.loadCarrerasData();
    const data = this.materiasService.getCarrerasData();
    this.carreras = data[0].carreras;

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
      this.materiasService.loadMateriasData(this.selectedCarrera);
      this.router.navigate(['/seguimiento']);
    }
  }
}
