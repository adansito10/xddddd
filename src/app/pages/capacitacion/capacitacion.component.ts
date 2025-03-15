import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-capacitacion',
  standalone: false,
  templateUrl: './capacitacion.component.html',
  styleUrl: './capacitacion.component.scss'

})
export class CapacitacionComponent {
 constructor(private router: Router) {}
 
   goToCapacitacion(event: Event): void {
     event.preventDefault(); // Evita el comportamiento nativo del navegador
     this.router.navigate(['/tecnologia'], { fragment: 'programas' })
       .then(() => console.log('Navegación a /capacitacion#demo-interactiva exitosa'))
       .catch(err => console.error('Error en navegación:', err));
   }
   programs = [
    {
      title: 'Colaboración Humano-Cobot',
      level: 'Intermedio-Avanzado',
      icon: 'group',
      description: 'Aprende a trabajar en sincronía con robots colaborativos para maximizar la eficiencia.',
      features: ['Duración: 30 horas', 'Certificación incluida', 'Escenarios VR colaborativos']
    },
    {
      title: 'Producción Sostenible',
      level: 'Todos los niveles',
      icon: 'eco',
      description: 'Capacitación en prácticas sostenibles y economía circular para reducir el impacto ambiental.',
      features: ['Duración: 25 horas', 'Certificación incluida', 'Simulaciones de economía circular']
    },
    {
      title: 'Bienestar Industrial Avanzado',
      level: 'Intermedio',
      icon: 'favorite',
      description: 'Técnicas de ergonomía y bienestar para entornos industriales.',
      features: ['Duración: 20 horas', 'Certificación incluida', 'Evaluación ergonómica personalizada']
    },
    {
      title: 'Resiliencia Industrial',
      level: 'Avanzado',
      icon: 'recycling',
      description: 'Diseña sistemas resilientes para adaptarse a disrupciones.',
      features: ['Duración: 35 horas', 'Certificación incluida', 'Simulaciones de crisis']
    },
    {
      title: 'Personalización Masiva',
      level: 'Intermedio-Avanzado',
      icon: 'psychology',
      description: 'Implementa sistemas flexibles para personalización masiva.',
      features: ['Duración: 30 horas', 'Certificación incluida', 'Proyectos de personalización VR']
    },
    {
      title: 'Gemelos Digitales Avanzados',
      level: 'Avanzado',
      icon: 'laptop',
      description: 'Crea gemelos digitales para optimizar procesos y predecir fallos.',
      features: ['Duración: 40 horas', 'Certificación incluida', 'Proyectos de gemelos digitales']
    }
  ];


}