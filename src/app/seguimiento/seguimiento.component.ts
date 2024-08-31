import { Component, OnInit } from '@angular/core';
import { MateriasService } from '../services/materias.service';
import { Materia } from '../interfaces/materia';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {
  materias: Materia[] = [];
  groupedMaterias: { [key: string]: { open: boolean, materias: Materia[] } } = {};
  isModalActive: boolean = false;
  materiaSeleccionada: any;
  notaFinal: number | null = null;

  constructor(private materiasService: MateriasService) { }

  ngOnInit(): void {
    const data = this.materiasService.getMateriasData();
    if (data.length > 0) {
      this.materias = data;
      this.groupMaterias();
      this.checkCorrelativas();
    }
  }

  groupMaterias() {
    this.groupedMaterias = this.materias.reduce((groups, materia) => {
      const groupKey = `Año ${materia.anio} - Modulo ${materia.modulo}`;
      if (!groups[groupKey]) {
        groups[groupKey] = { open: true, materias: [] };
      }
      groups[groupKey].materias.push(materia);
      return groups;
    }, {} as { [key: string]: { open: boolean, materias: Materia[] }});
  }

  toggleGroup(key: string) {
    this.groupedMaterias[key].open = !this.groupedMaterias[key].open;
  }

  changeState(materia: Materia, estado: string) {
    materia.estado = estado;
    this.updateMateriasInLocalStorage();
    this.checkCorrelativas();
  }

  updateMateriasInLocalStorage() {
    localStorage.setItem('materias', JSON.stringify(this.materias));
  }

  getCardHeaderClass(estado: string): string {
    switch (estado) {
      case 'aprobada':
        return 'has-background-success has-text-white';
      case 'en curso':
        return 'has-background-warning has-text-dark';
      case 'regular':
        return 'has-background-link has-text-white';
      case 'reprobada':
        return 'has-background-danger has-text-white';
      case 'habilitada':
        return 'has-background-info has-text-white';
      default:
        return 'has-background-dark has-text-white';
    }
  }

  checkCorrelativas() {
    this.materias.forEach(materia => {
      if (materia.estado === 'no cursada' || materia.estado === 'deshabilitada') {
        const correlativasRegularizadas = materia.correlativasRegular.every((id: number) =>
          this.isRegularizada(id) || this.isAprobada(id)
        );

        const correlativasAprobadas = materia.correlativasAprobada.every((id: number) =>
          this.isAprobada(id)
        );

        if (correlativasRegularizadas && correlativasAprobadas) {
          materia.estado = 'habilitada';
        } else if (correlativasRegularizadas) {
          materia.estado = 'habilitada';
        } else {
          materia.estado = 'deshabilitada';
        }
      }
    });

    this.updateMateriasInLocalStorage();
  }

  isRegularizada(id: number): boolean {
    const materia = this.materias.find(m => m.id === id);
    return !!(materia && materia.estado === 'regular');
  }

  isAprobada(id: number): boolean {
    const materia = this.materias.find(m => m.id === id);
    return !!(materia && materia.estado === 'aprobada');
  }

  getCardFooterClass(estado: string): string {
    switch (estado) {
      case 'aprobada':
        return 'is-hidden';
      case 'en curso':
        return '';
      case 'regular':
        return '';
      case 'reprobada':
        return '';
      case 'habilitada':
        return '';
      case 'deshabilitada':
        return 'is-hidden';
      default:
        return '';
    }
  }

  openModal(materia: Materia) {
    this.materiaSeleccionada = materia;
    this.notaFinal = null;
    this.isModalActive = true;
  }

  closeModal() {
    this.isModalActive = false;
  }

  saveNotaFinal() {
    if (this.materiaSeleccionada && this.notaFinal !== null) {
      this.materiaSeleccionada.notaFinal = this.notaFinal;
      this.materiaSeleccionada.estado = this.notaFinal >= 4 ? 'aprobada' : 'reprobada';
      this.updateLocalStorage();
    }
    this.isModalActive = false;
    this.checkCorrelativas();
  }

  updateLocalStorage() {
    const data = this.materiasService.getMateriasData();
    if (data.length > 0) {
      const index = data.findIndex((m: any) => m.id === this.materiaSeleccionada.id);
      if (index !== -1) {
        data[index] = this.materiaSeleccionada;
        localStorage.setItem('materias', JSON.stringify(data));
      }
    }
  }

  getCorrelativasNombres(ids: number[]): { nombre: string, estado: string }[] {
    return this.materias.filter(materia => ids.includes(materia.id))
                        .map(materia => ({ nombre: materia.nombre, estado: materia.estado }));
  }

  getEstadoClass(estado: string): string {
    switch (estado) {
      case 'aprobada':
        return 'has-text-success';
      case 'en curso':
        return 'has-text-warning';
      case 'regular':
        return 'has-text-link';
      case 'reprobada':
        return 'has-text-danger';
      case 'habilitada':
        return 'has-text-info';
      default:
        return 'has-text-grey';
    }
  }
}
