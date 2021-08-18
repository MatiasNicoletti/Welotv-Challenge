import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './people/gallery/gallery.component';
import { TableComponent } from './people/table/table.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from './people/modal/modal.component';
import { AppRoutingModule } from '../app-routing.module';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    GalleryComponent,
    TableComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatTableModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class PresentationModule { }
