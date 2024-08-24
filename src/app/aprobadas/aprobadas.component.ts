import { Component, OnInit } from '@angular/core';
import { MateriasService } from '../services/materias.service';

@Component({
  selector: 'app-aprobadas',
  templateUrl: './aprobadas.component.html',
  styleUrls: ['./aprobadas.component.css']
})
export class AprobadasComponent implements OnInit {
  materias: any[] = [];
  materiasAprobadas: any[] = [];
  progreso: number = 0;
  aprobadas: number = 0;
  totalMaterias: number = 0;

  constructor(private materiasService: MateriasService) { }

  ngOnInit(): void {
    this.cargarMaterias();
    this.filtrarAprobadas();
    this.calcularProgreso();
  }

  cargarMaterias() {
    const data = this.materiasService.getMateriasData();
    if (data.length > 0) {
      this.materias = data;
    }
  }

  filtrarAprobadas() {
    this.materiasAprobadas = this.materias.filter(materia => materia.estado === 'aprobada');
  }

  calcularProgreso() {
    this.totalMaterias = this.materias.length;
    this.aprobadas = this.materiasAprobadas.length;
    this.progreso = Math.round((this.aprobadas / this.totalMaterias) * 100);
  }
}
