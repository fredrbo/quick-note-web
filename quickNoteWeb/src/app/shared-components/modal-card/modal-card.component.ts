import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICardItem } from 'src/app/pages/main/model/card.model';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.scss']
})
export class ModalCardComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ModalCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICardItem
  ) { }

  ngOnInit(): void {
  }

  close(event?: boolean) {
    this.dialogRef.close(event)
  }

}
