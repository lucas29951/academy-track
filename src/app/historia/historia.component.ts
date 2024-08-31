import { Component, OnInit } from '@angular/core';
import { MateriasService } from '../services/materias.service';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {
  materias: any[] = [];
  materiasAprobadas: any[] = [];
  materiasReprobadas: any[] = [];
  materiasEnCurso: any[] = [];
  materiasRegulares: any[] = [];
  totalMaterias: number = 0;
  porcentajeAvance: number = 0;
  promedioGeneral: number = 0;
  promedioConAplazos: number = 0;
  aniosCursados: any[] = [];

  constructor(private materiasService: MateriasService) { }

  ngOnInit(): void {
    this.cargarMaterias();
    this.calcularProgresoYPromedio();
    this.organizarMateriasPorAnio();
  }

  cargarMaterias() {
    const data = this.materiasService.getMateriasData();
    if (data.length > 0) {
      this.materias = data;
      this.totalMaterias = data.length;
    }
  }

  calcularProgresoYPromedio() {
    this.materiasAprobadas = this.materias.filter(m => m.estado === 'aprobada');
    this.materiasReprobadas = this.materias.filter(m => m.estado === 'reprobada');
    this.materiasEnCurso = this.materias.filter(m => m.estado === 'en curso');
    this.materiasRegulares = this.materias.filter(m => m.estado === 'regular');
    const totalNotas = this.materiasAprobadas.reduce((sum, m) => sum + (m.notaFinal || 0), 0);
    this.promedioGeneral = this.materiasAprobadas.length ? parseFloat((totalNotas / this.materiasAprobadas.length).toFixed(1)) : 0;
    const materiasConNota = this.materias.filter(m => m.notaFinal > 0);
    const totalNotasAplazos = materiasConNota.reduce((sum, m) => sum + m.notaFinal, 0);
    this.promedioConAplazos = materiasConNota.length ? parseFloat((totalNotasAplazos / materiasConNota.length).toFixed(1)) : 0;
    this.porcentajeAvance = Math.round((this.materiasAprobadas.length / this.totalMaterias) * 100);
  }

  organizarMateriasPorAnio() {
    const grouped = this.materias.reduce((acc, materia) => {
      const anio = materia.anio || 'Sin Año';
      if (!acc[anio]) acc[anio] = { anio, materias: [], open: false };
      acc[anio].materias.push(materia);
      return acc;
    }, {});
    this.aniosCursados = Object.values(grouped);
  }

  toggleYear(anio: any) {
    anio.open = !anio.open;
  }

  getClassForEstado(estado: string) {
    switch (estado) {
      case 'aprobada': return 'has-text-success';
      case 'en curso': return 'has-text-warning';
      case 'regular': return 'has-text-link';
      case 'reprobada': return 'has-text-danger';
      case 'habilitada': return 'has-text-info';
      default: return '';
    }
  }
}
