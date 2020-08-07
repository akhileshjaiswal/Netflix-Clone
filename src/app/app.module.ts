import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainGalleryComponent } from './main-gallery/main-gallery.component';
import { DescriptionSectionComponent } from './description-section/description-section.component';
import { CardsComponent } from './main_gallery/cards/cards.component';

import {MatToolbarModule} from '@angular/material/toolbar'
import {MatCardModule} from '@angular/material/card'
import { CardService } from './card.service';

const router:Routes=[
  {path:'',component:MainGalleryComponent,pathMatch:'full'},
  {path:'desc',component:DescriptionSectionComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    MainGalleryComponent,
    DescriptionSectionComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forRoot(router)
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
