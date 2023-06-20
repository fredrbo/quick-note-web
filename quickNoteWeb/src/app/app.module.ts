import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { MatInputModule } from '@angular/material/input';
import { MainComponent } from './pages/main/main.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalCardComponent } from './shared-components/modal-card/modal-card.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    ModalCardComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDialogModule,
    FormsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
