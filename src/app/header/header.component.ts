import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  nom: string | undefined;

  ngOnInit() {
    this.nom = 'Digisem Travel';
  }
}
