import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  constructor() { }

  checkMateriasInLocalStorage(): boolean {
    return !!localStorage.getItem('materias');
  }

  loadDefaultMateriasData() {
    const defaultData = [
      {
        "id": 1,
        "nombre": "Elementos de Álgebra (anual)",
        "modulo": 1,
        "anio": 1,
        "horasSemanales": 4,
        "horasTotales": 60,
        "correlativasRegular": [],
        "correlativasAprobada": [],
        "estado": "no cursada",
        "notaFinal": 0
      },
      {
        "id": 2,
        "nombre": "Fundamentos de la Programación",
        "modulo": 1,
        "anio": 1,
        "horasSemanales": 5,
        "horasTotales": 75,
        "correlativasRegular": [],
        "correlativasAprobada": [],
        "estado": "no cursada",
        "notaFinal": 0
      },
      {
        "id": 3,
        "nombre": "Inglés I",
        "modulo": 1,
        "anio": 1,
        "horasSemanales": 5,
        "horasTotales": 75,
        "correlativasRegular": [],
        "correlativasAprobada": [],
        "estado": "no cursada",
        "notaFinal": 0
      },
      {
        "id": 4,
        "nombre": "Laboratorio I",
        "modulo": 1,
        "anio": 1,
        "horasSemanales": 4,
        "horasTotales": 60,
        "correlativasRegular": [],
        "correlativasAprobada": [],
        "estado": "no cursada",
        "notaFinal": 0
      },
      {
        "id": 5,
        "nombre": "Lógica",
        "modulo": 1,
        "anio": 1,
        "horasSemanales": 4,
        "horasTotales": 60,
        "correlativasRegular": [],
        "correlativasAprobada": [],
        "estado": "no cursada",
        "notaFinal": 0
      },
      {
        "id": 6,
        "nombre": "Inglés II",
        "modulo": 2,
        "anio": 1,
        "horasSemanales": 5,
        "horasTotales": 75,
        "correlativasRegular": [3],
        "correlativasAprobada": [],
        "estado": "no cursada",
        "notaFinal": 0
      },
      {
        "id": 7,
        "nombre": "Laboratorio II",
        "modulo": 2,
        "anio": 1,
        "horasSemanales": 4,
        "horasTotales": 60,
        "correlativasRegular": [2, 3, 4],
        "correlativasAprobada": [],
        "estado": "no cursada",
        "notaFinal": 0
      },
      {
        "id": 8,
        "nombre": "Programación I",
        "modulo": 2,
        "anio": 1,
        "horasSemanales": 5,
        "horasTotales": 75,
        "correlativasRegular": [2, 5],
        "correlativasAprobada": [],
        "estado": "no cursada",
        "notaFinal": 0
      },
      {
        "id": 9,
        "nombre": "Base de Datos",
        "modulo": 3,
        "anio": 2,
        "horasSemanales": 5,
        "horasTotales": 75,
        "correlativasRegular": [8],
        "correlativasAprobada": [2],
        "estado": "no cursada",
        "notaFinal": 0
      },
      {
        "id": 10,
        "nombre": "Laboratorio III",
        "modulo": 3,
        "anio": 2,
        "horasSemanales": 4,
        "horasTotales": 60,
        "correlativasRegular": [6, 7, 8],
        "correlativasAprobada": [3, 4],
        "estado": "no cursada",
        "notaFinal": 0
      },
      {
        "id": 11,
        "nombre": "Organización del Computador",
        "modulo": 3,
        "anio": 2,
        "horasSemanales": 5,
        "horasTotales": 75,
        "correlativasRegular": [1, 8],
        "correlativasAprobada": [5],
        "estado": "no cursada",
        "notaFinal": 0
      },
      {
        "id": 12,
        "nombre": "Programación II",
        "modulo": 3,
        "anio": 2,
        "horasSemanales": 5,
        "horasTotales": 75,
        "correlativasRegular": [1, 8],
        "correlativasAprobada": [2],
        "estado": "no cursada",
        "notaFinal": 0
      },
      {
        "id": 13,
        "nombre": "Arquitectura del Computador",
        "modulo": 4,
        "anio": 2,
        "horasSemanales": 5,
        "horasTotales": 75,
        "correlativasRegular": [11],
        "correlativasAprobada": [8],
        "estado": "no cursada",
        "notaFinal": 0
      },
      {
        "id": 14,
        "nombre": "Introducción a los Sistemas de Información",
        "modulo": 4,
        "anio": 2,
        "horasSemanales": 4,
        "horasTotales": 60,
        "correlativasRegular": [9],
        "correlativasAprobada": [8],
        "estado": "no cursada",
        "notaFinal": 0
      },
      {
        "id": 15,
        "nombre": "Laboratorio IV",
        "modulo": 4,
        "anio": 2,
        "horasSemanales": 4,
        "horasTotales": 60,
        "correlativasRegular": [9],
        "correlativasAprobada": [6],
        "estado": "no cursada",
        "notaFinal": 0
      },
      {
        "id": 16,
        "nombre": "Programación III",
        "modulo": 4,
        "anio": 2,
        "horasSemanales": 5,
        "horasTotales": 75,
        "correlativasRegular": [10, 12],
        "correlativasAprobada": [7, 8],
        "estado": "no cursada",
        "notaFinal": 0
      },
      {
        "id": 17,
        "nombre": "Laboratorio V",
        "modulo": 5,
        "anio": 3,
        "horasSemanales": 4,
        "horasTotales": 60,
        "correlativasRegular": [15],
        "correlativasAprobada": [10],
        "estado": "no cursada",
        "notaFinal": 0
      },
      {
        "id": 18,
        "nombre": "Redes",
        "modulo": 5,
        "anio": 3,
        "horasSemanales": 5,
        "horasTotales": 75,
        "correlativasRegular": [13],
        "correlativasAprobada": [10, 11],
        "estado": "no cursada",
        "notaFinal": 0
      },
      {
        "id": 19,
        "nombre": "Seminario de Etica y Deontologia",
        "modulo": 5,
        "anio": 3,
        "horasSemanales": 3,
        "horasTotales": 45,
        "correlativasRegular": [14, 16],
        "correlativasAprobada": [12],
        "estado": "no cursada",
        "notaFinal": 0
      },
      {
        "id": 20,
        "nombre": "Sistemas Operativos",
        "modulo": 5,
        "anio": 3,
        "horasSemanales": 5,
        "horasTotales": 75,
        "correlativasRegular": [12, 13],
        "correlativasAprobada": [11],
        "estado": "no cursada",
        "notaFinal": 0
      },
      {
        "id": 21,
        "nombre": "Configuracion y Uso de Software",
        "modulo": 6,
        "anio": 3,
        "horasSemanales": 4,
        "horasTotales": 60,
        "correlativasRegular": [16, 17],
        "correlativasAprobada": [12],
        "estado": "no cursada",
        "notaFinal": 0
      },
      {
        "id": 22,
        "nombre": "Laboratorio VI",
        "modulo": 6,
        "anio": 3,
        "horasSemanales": 4,
        "horasTotales": 60,
        "correlativasRegular": [17, 20],
        "correlativasAprobada": [16],
        "estado": "no cursada",
        "notaFinal": 0
      },
      {
        "id": 23,
        "nombre": "Practica Profesional",
        "modulo": 6,
        "anio": 3,
        "horasSemanales": 5,
        "horasTotales": 75,
        "correlativasRegular": [17, 18, 19, 20],
        "correlativasAprobada": [14, 16],
        "estado": "no cursada",
        "notaFinal": 0
      },
      {
        "id": 24,
        "nombre": "Programacion IV",
        "modulo": 6,
        "anio": 3,
        "horasSemanales": 5,
        "horasTotales": 75,
        "correlativasRegular": [17, 20],
        "correlativasAprobada": [10, 16],
        "estado": "no cursada",
        "notaFinal": 0
      },     
    ];
    localStorage.setItem('materias', JSON.stringify(defaultData));
  }

  getMateriasData() {
    const data = localStorage.getItem('materias');
    return data ? JSON.parse(data) : null;
  }
}
