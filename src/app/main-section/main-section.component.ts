import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss',
})
export class MainSectionComponent implements OnInit {
  urlMainImage: string | undefined;
  titreInitial: string | undefined;
  titreFinal: string | undefined;

  ngOnInit() {
    this.urlMainImage = 'src/assets/images/main.jpg';
    this.titreInitial = 'Organisez votre';
    this.titreFinal = 'Voyage sur mesure';
  }
}
