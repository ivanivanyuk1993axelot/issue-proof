import {Component, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent {
  @ViewChild('templateRef', {static: true}) templateRef: TemplateRef<any>;

  constructor(
    private _matDialog: MatDialog,
  ) {}

  openModal() {
    this._matDialog.open(this.templateRef);
  }
}
