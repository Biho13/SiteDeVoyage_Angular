import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-section',
  templateUrl: './contacts-section.component.html',
  styleUrl: './contacts-section.component.scss',
})
export class ContactsSectionComponent implements OnInit {
  titre!: string;
  texte!: string;

  ngOnInit() {
    this.titre = 'Contactez-nous';
    this.texte =
      " Chez Digisem Travel nous savons que voyager est une aventure humaine mais également un engagement financier important pour vous. C'est pourquoi nous mettons un point d'honneur à prendre en compte chacune de vos attentes pour vous aider dans la préparation de votre séjour, circuit ou voyage sur mesure.";
  }
}
