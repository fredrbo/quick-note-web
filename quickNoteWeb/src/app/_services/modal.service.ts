import { Injectable } from '@angular/core';
import { ModalCardComponent } from '../shared-components/modal-card/modal-card.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ICardItem } from '../pages/main/model/card.model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }

  openDialogConfirm(card: ICardItem): MatDialogRef<ModalCardComponent> {
    return this.dialog.open(ModalCardComponent, {
      // width: '450px',
      // height: '70vh',
      data: card
    });
  }

}
