import { ModalService } from './../../_services/modal.service';
import { Component, OnInit } from '@angular/core';
import { Card, ICardItem } from './model/card.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }


  cards: Card[] = [
    {
      title: "TO DO", items: [
        { title: "123", description: "Na tela home incluir tudo isso ASDJKPAOSDK ASKD POAKSD OPKSA" },
        { title: "456", description: "Definir estrutura do banco" },
        { title: "789", description: "Definir estruasdastura do banco" },
      ]
    },
    {
      title: "Doing", items: [
        { title: "abc", description: "Na tela home incluir tudo isso" },
        { title: "def", description: "Definir estrutura do banco" },
        { title: "ghi", description: "Definir estruasdastura do banco" },
      ]
    },
    {
      title: "DO", items: [
        { title: "!@#", description: "Na tela home incluir tudo isso" },
        { title: "d$#@!", description: "Definir estrutura do banco" },
      ]
    },
  ]

  createCard() {
    this.cards.push({
      title: "Novo card"
    })
  }

  createItem(card: Card) {
    card.items?.push({
      title: "Novo card"
    })
  }

  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  openModalItem(item: ICardItem) {
    const dialogRef = this.modalService.openDialogConfirm(item)
  }

}
