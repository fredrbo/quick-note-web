import { Component, OnInit } from '@angular/core';
import { Card, ICardItem } from './model/card.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  cards: Card[] = [ 
    {id: 1, title: "TO DO", items: [
      { title: "123", description: "Na tela home incluir tudo isso" },
      { title: "456", description: "Definir estrutura do banco" },
      { title: "789", description: "Definir estruasdastura do banco" },
    ]},
    {id: 2, title: "Doing", items: [
      { title: "abc", description: "Na tela home incluir tudo isso" },
      { title: "def", description: "Definir estrutura do banco" },
      { title: "ghi", description: "Definir estruasdastura do banco" },
    ]},
    {id: 3, title: "DO", items: [
      { title: "!@#", description: "Na tela home incluir tudo isso" },
      { title: "d$#@!", description: "Definir estrutura do banco" },
    ]},
  ]

  drop(event:any) {
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
  


}
