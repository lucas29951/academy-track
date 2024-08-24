import { Component } from '@angular/core';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent {
  sections = [
    {
      title: 'Cómo utilizar la aplicación',
      points: [
        'En la vista principal, haz clic en "Iniciar" para cargar las materias por defecto.',
        'Utiliza la vista de materias para ver el estado de tus materias y modificarlas.',
        'Las materias se agrupan por año y módulo para facilitar la navegación.'
      ],
      open: false
    },
    {
      title: 'Cómo funcionan las correlativas',
      points: [
        'Las materias tienen correlativas que deben regularizarse o aprobarse para habilitar otras materias.',
        'Una materia se habilita si tiene las correlativas regularizadas y/o aprobadas.',
        'Consulta las tarjetas de materias para ver las correlativas requeridas.'
      ],
      open: false
    },
    {
      title: 'Estados de las materias',
      points: [
        'No cursada: Materia aún no cursada.',
        'Habilitada: Materia que puedes cursar, cumple las correlativas.',
        'En curso: Materia que estás cursando actualmente.',
        'Regular: Materia que regularizaste pero aún no aprobaste.',
        'Aprobada: Materia que ya has aprobado.',
        'Reprobada: Materia que no aprobaste y debes recursar.'
      ],
      open: false
    },
    {
      title: 'Preguntas frecuentes',
      points: [
        '¿Cómo cambio el estado de una materia? - Selecciona el estado desde la tarjeta de la materia.',
        '¿Cómo sé si una materia está habilitada? - Revisa la etiqueta de estado en la tarjeta de la materia.',
        '¿Cómo accedo a mi progreso? - Dirígete a la vista de materias aprobadas para ver tu progreso.'
      ],
      open: false
    }
  ];

  constructor() { }

  toggleSection(section: any): void {
    section.open = !section.open;
  }
}
