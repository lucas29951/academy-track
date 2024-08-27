import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  constructor() { }

  checkMateriasInLocalStorage(): boolean {
    return !!localStorage.getItem('materias');
  }

  loadCarrerasData() {
    const data = [{
      "carreras": [
        {
          "nombre": "Programador Universitario en Informatica",
          "codigo": "IS01",
          "duracion": "3 años",
          "materias": [
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
          ]
        },
        {
          "nombre": "Profesorado de Fisica",
          "codigo": "LCC01",
          "duracion": "4 años",
          "materias": [
            {
              "id": 1,
              "nombre": "Álgebra y Geometría Analítica",
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
              "id": 2,
              "nombre": "Análisis Matemático I",
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
              "nombre": "Informática",
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
              "id": 4,
              "nombre": "Pedagogía",
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
              "nombre": "Taller de Informática",
              "modulo": 1,
              "anio": 1,
              "horasSemanales": 3.3,
              "horasTotales": 50,
              "correlativasRegular": [],
              "correlativasAprobada": [],
              "estado": "no cursada",
              "notaFinal": 0
            },
            {
              "id": 6,
              "nombre": "Álgebra Lineal",
              "modulo": 2,
              "anio": 1,
              "horasSemanales": 6,
              "horasTotales": 90,
              "correlativasRegular": [],
              "correlativasAprobada": [],
              "estado": "no cursada",
              "notaFinal": 0
            },
            {
              "id": 7,
              "nombre": "Análisis Matemático II",
              "modulo": 2,
              "anio": 1,
              "horasSemanales": 6,
              "horasTotales": 90,
              "correlativasRegular": [2],
              "correlativasAprobada": [],
              "estado": "no cursada",
              "notaFinal": 0
            },
            {
              "id": 8,
              "nombre": "Mecánica, Ondas y Calor",
              "modulo": 2,
              "anio": 1,
              "horasSemanales": 10,
              "horasTotales": 150,
              "correlativasRegular": [1, 2],
              "correlativasAprobada": [],
              "estado": "no cursada",
              "notaFinal": 0
            },
            {
              "id": 9,
              "nombre": "Química General",
              "modulo": 2,
              "anio": 1,
              "horasSemanales": 6,
              "horasTotales": 90,
              "correlativasRegular": [],
              "correlativasAprobada": [],
              "estado": "no cursada",
              "notaFinal": 0
            },
            {
              "id": 10,
              "nombre": "Sujeto I",
              "modulo": 2,
              "anio": 1,
              "horasSemanales": 3,
              "horasTotales": 45,
              "correlativasRegular": [],
              "correlativasAprobada": [],
              "estado": "no cursada",
              "notaFinal": 0
            },
            {
              "id": 11,
              "nombre": "Práctica Profesional Docente I (PPD I)",
              "modulo": 2,
              "anio": 1,
              "horasSemanales": 30,
              "horasTotales": 30,
              "correlativasRegular": [],
              "correlativasAprobada": [],
              "estado": "no cursada",
              "notaFinal": 0
            },
            {
              "id": 12,
              "nombre": "Análisis Matemático III",
              "modulo": 3,
              "anio": 2,
              "horasSemanales": 7,
              "horasTotales": 105,
              "correlativasRegular": [6, 7],
              "correlativasAprobada": [],
              "estado": "no cursada",
              "notaFinal": 0
            },
            {
              "id": 13,
              "nombre": "Electricidad y Magnetismo",
              "modulo": 3,
              "anio": 2,
              "horasSemanales": 9,
              "horasTotales": 135,
              "correlativasRegular": [8],
              "correlativasAprobada": [],
              "estado": "no cursada",
              "notaFinal": 0
            },
            {
              "id": 14,
              "nombre": "Laboratorio I",
              "modulo": 3,
              "anio": 2,
              "horasSemanales": 5,
              "horasTotales": 75,
              "correlativasRegular": [8],
              "correlativasAprobada": [],
              "estado": "no cursada",
              "notaFinal": 0
            },
            {
              "id": 15,
              "nombre": "Psicología Educacional",
              "modulo": 3,
              "anio": 2,
              "horasSemanales": 4,
              "horasTotales": 60,
              "correlativasRegular": [],
              "correlativasAprobada": [],
              "estado": "no cursada",
              "notaFinal": 0
            },
            {
              "id": 16,
              "nombre": "Sujeto II",
              "modulo": 3,
              "anio": 2,
              "horasSemanales": 3,
              "horasTotales": 45,
              "correlativasRegular": [10],
              "correlativasAprobada": [],
              "estado": "no cursada",
              "notaFinal": 0
            },
            {
              "id": 17,
              "nombre": "Didáctica General",
              "modulo": 4,
              "anio": 2,
              "horasSemanales": 4,
              "horasTotales": 60,
              "correlativasRegular": [8, 15, 16],
              "correlativasAprobada": [],
              "estado": "no cursada",
              "notaFinal": 0
            },
            {
              "id": 18,
              "nombre": "Examen de Suficiencia de Inglés Técnico",
              "modulo": 4,
              "anio": 2,
              "horasSemanales": 3,
              "horasTotales": 45,
              "correlativasRegular": [8, 9],
              "correlativasAprobada": [],
              "estado": "no cursada",
              "notaFinal": 0
            },
            {
              "id": 19,
              "nombre": "Introducción a la Biología",
              "modulo": 4,
              "anio": 2,
              "horasSemanales": 3,
              "horasTotales": 45,
              "correlativasRegular": [8, 9],
              "correlativasAprobada": [],
              "estado": "no cursada",
              "notaFinal": 0
            },
            {
              "id": 20,
              "nombre": "Laboratorio II",
              "modulo": 4,
              "anio": 2,
              "horasSemanales": 5,
              "horasTotales": 75,
              "correlativasRegular": [13, 14],
              "correlativasAprobada": [],
              "estado": "no cursada",
              "notaFinal": 0
            },
            {
              "id": 21,
              "nombre": "Taller de Matemática Avanzada",
              "modulo": 4,
              "anio": 2,
              "horasSemanales": 1,
              "horasTotales": 15,
              "correlativasRegular": [13, 14],
              "correlativasAprobada": [],
              "estado": "no cursada",
              "notaFinal": 0
            },
            {
              "id": 22,
              "nombre": "Termodinámica y Óptica",
              "modulo": 4,
              "anio": 2,
              "horasSemanales": 6,
              "horasTotales": 90,
              "correlativasRegular": [13, 14],
              "correlativasAprobada": [],
              "estado": "no cursada",
              "notaFinal": 0
            },
            {
              "id": 23,
              "nombre": "Práctica Profesional Docente II (PPD II)",
              "modulo": 4,
              "anio": 2,
              "horasSemanales": 50,
              "horasTotales": 50,
              "correlativasRegular": [4, 11],
              "correlativasAprobada": [],
              "estado": "no cursada",
              "notaFinal": 0
            },
            {
              "id": 24,
              "nombre": "Análisis Matemático IV", 
              "modulo": 5, 
              "anio": 3, 
              "horasSemanales": 6, 
              "horasTotales": 90, 
              "correlativasRegular": [12], 
              "correlativasAprobada": [],
              "estado": "no cursada", 
              "notaFinal": 0
            }, 
            { 
              "id": 25, 
              "nombre": "Didáctica de la Matemática I", 
              "modulo": 5, 
              "anio": 3, 
              "horasSemanales": 4, 
              "horasTotales": 60, 
              "correlativasRegular": [17], 
              "correlativasAprobada": [],
              "estado": "no cursada", 
              "notaFinal": 0 
            }, 
            { 
              "id": 26, 
              "nombre": "Electromagnetismo", 
              "modulo": 5, 
              "anio": 3, 
              "horasSemanales": 7, 
              "horasTotales": 105, 
              "correlativasRegular": [22], 
              "correlativasAprobada": [],
              "estado": "no cursada", 
              "notaFinal": 0 
            }, 
            { 
              "id": 27, 
              "nombre": "Estadística y Probabilidades", 
              "modulo": 5, 
              "anio": 3, 
              "horasSemanales": 5, 
              "horasTotales": 75, 
              "correlativasRegular": [13, 14], 
              "correlativasAprobada": [],
              "estado": "no cursada", 
              "notaFinal": 0 
            }, 
            { 
              "id": 28, 
              "nombre": "Historia de la Ciencia", 
              "modulo": 5, 
              "anio": 3, 
              "horasSemanales": 3, 
              "horasTotales": 45, 
              "correlativasRegular": [17], 
              "correlativasAprobada": [],
              "estado": "no cursada", 
              "notaFinal": 0 
            }, 
            { 
              "id": 29, 
              "nombre": "Práctica Profesional Docente III (PPD III)", 
              "modulo": 5, 
              "anio": 3, 
              "horasSemanales": 50, 
              "horasTotales": 50, 
              "correlativasRegular": [23], 
              "correlativasAprobada": [],
              "estado": "no cursada", 
              "notaFinal": 0 
            }, 
            { 
              "id": 30, 
              "nombre": "Alfabetización Académica", 
              "modulo": 6, 
              "anio": 3, 
              "horasSemanales": 3, 
              "horasTotales": 45, 
              "correlativasRegular": [17], 
              "correlativasAprobada": [],
              "estado": "no cursada", 
              "notaFinal": 0 
            }, 
            { 
              "id": 31, 
              "nombre": "Didáctica de la Matemática II", 
              "modulo": 6, 
              "anio": 3, 
              "horasSemanales": 5, 
              "horasTotales": 75, 
              "correlativasRegular": [25],
              "correlativasAprobada": [], 
              "estado": "no cursada", 
              "notaFinal": 0 
            }, 
            { 
              "id": 32, 
              "nombre": "Física Moderna", 
              "modulo": 6, 
              "anio": 3, 
              "horasSemanales": 7, 
              "horasTotales": 105, 
              "correlativasRegular": [22, 26], 
              "correlativasAprobada": [],
              "estado": "no cursada", 
              "notaFinal": 0 
            }, 
            { 
              "id": 33, 
              "nombre": "Matemática Discreta", 
              "modulo": 6, 
              "anio": 3, 
              "horasSemanales": 6, 
              "horasTotales": 90, 
              "correlativasRegular": [27], 
              "correlativasAprobada": [],
              "estado": "no cursada", 
              "notaFinal": 0 
            }, 
            { 
              "id": 34, 
              "nombre": "Optativa I", 
              "modulo": 6, 
              "anio": 3, 
              "horasSemanales": 4, 
              "horasTotales": 60, 
              "correlativasRegular": [], 
              "correlativasAprobada": [],
              "estado": "no cursada", 
              "notaFinal": 0 
            }, 
            { 
              "id": 35, 
              "nombre": "Didáctica de la Matemática III", 
              "modulo": 7, 
              "anio": 4, 
              "horasSemanales": 5, 
              "horasTotales": 75, 
              "correlativasRegular": [31], 
              "correlativasAprobada": [],
              "estado": "no cursada", 
              "notaFinal": 0 
            }, 
            { 
              "id": 36, 
              "nombre": "Energías Renovables", 
              "modulo": 7, 
              "anio": 4, 
              "horasSemanales": 6, 
              "horasTotales": 90, 
              "correlativasRegular": [31], 
              "correlativasAprobada": [],
              "estado": "no cursada", 
              "notaFinal": 0 
            }, 
            { 
              "id": 37, 
              "nombre": "Optativa II", 
              "modulo": 7, 
              "anio": 4, 
              "horasSemanales": 4, 
              "horasTotales": 60, 
              "correlativasRegular": [], 
              "correlativasAprobada": [],
              "estado": "no cursada", 
              "notaFinal": 0 
            }, 
            { 
              "id": 38, 
              "nombre": "Práctica Profesional Docente IV (PPD IV)", 
              "modulo": 7, 
              "anio": 4, 
              "horasSemanales": 50, 
              "horasTotales": 50, 
              "correlativasRegular": [29], 
              "correlativasAprobada": [],
              "estado": "no cursada", 
              "notaFinal": 0 
            }, 
            { 
              "id": 39, 
              "nombre": "Seminario de Integración y Práctica Profesional", 
              "modulo": 7, 
              "anio": 4, 
              "horasSemanales": 4, 
              "horasTotales": 60, 
              "correlativasRegular": [29], 
              "correlativasAprobada": [],
              "estado": "no cursada", 
              "notaFinal": 0 
            }, 
            { 
              "id": 40, 
              "nombre": "Taller de Didáctica de la Matemática", 
              "modulo": 7, 
              "anio": 4, 
              "horasSemanales": 4, 
              "horasTotales": 60, 
              "correlativasRegular": [29], 
              "correlativasAprobada": [],
              "estado": "no cursada", 
              "notaFinal": 0 
            }
          ]
        }
      ]
    }];
    localStorage.setItem('carreras', JSON.stringify(data));
  }

  loadMateriasData(carrera: string) {
    const data = this.getCarrerasData();
    let materias;
    for (let i = 0; i < data[0].carreras.length; i++) {
      if (carrera === data[0].carreras[i].nombre) {
        materias = data[0].carreras[i].materias;
      }
    }
    localStorage.setItem('materias', JSON.stringify(materias));
  }

  getCarrerasData() {
    const data = localStorage.getItem('carreras');
    return data ? JSON.parse(data) : null;
  }

  getMateriasData() {
    const data = localStorage.getItem('materias');
    return data ? JSON.parse(data) : null;
  }
}
