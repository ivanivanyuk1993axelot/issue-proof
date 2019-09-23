import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import {MatButtonModule, MatDialogModule} from '@angular/material';



@NgModule({
  declarations: [ModalComponent],
  exports: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class ModalModule { }
