import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-section',
  templateUrl: './step-section.component.html',
  styleUrl: './step-section.component.scss',
})
export class StepSectionComponent implements OnInit {
  texte1: string | undefined;
  texte2: string | undefined;
  texte3: string | undefined;

  ngOnInit() {
    this.texte1 =
      'Confiez-nous vos rêves d’évasion : en famille ou entre amis, nous trouverons la formule qui comblera vos attentes.';
    this.texte2 =
      'Bénéficiez de l’expertise de nos spécialistes de chaque destination,ils vous accompagnent dans la réalisation de votre voyage.';
    this.texte3 =
      'Nous nous chargeons d’assurer votre sécurité et de veiller à votrepleine sérénité tout au long de votre voyage.';
  }
}
