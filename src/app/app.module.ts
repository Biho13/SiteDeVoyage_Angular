import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainSectionComponent } from './main-section/main-section.component';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { StepSectionComponent } from './step-section/step-section.component';
import { PossibilitiesSectionComponent } from './possibilities-section/possibilities-section.component';
import { ContactsSectionComponent } from './contacts-section/contacts-section.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [AppComponent, MainSectionComponent, HeaderComponent, StepSectionComponent, PossibilitiesSectionComponent, ContactsSectionComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
