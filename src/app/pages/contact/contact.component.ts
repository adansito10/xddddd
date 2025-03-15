import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  nombre: string = '';
  email: string = '';
  telefono: string = '';
  empresa: string = '';
  asunto: string = '';
  interes: string = 'capacitacion'; // Valor predeterminado
  mensaje: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Suscribirse al fragmento de la URL
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }

}