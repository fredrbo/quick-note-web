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

  toDoItems: ICardItem[] = [
    { title: "123", description: "Na tela home incluir tudo isso" },
    { title: "456", description: "Definir estrutura do banco" },
    { title: "789", description: "Definir estruasdastura do banco" },
  ];
  
  doingItems: ICardItem[] = [
    { title: "abc", description: "Na tela login tem que ter 2 inputs" },
    { title: "def", description: "Na tela login tem que ter 2 inputs" },
  ];
  doItems: ICardItem[] = [
    { title: "feito", description: "Na tela login tem que ter 2 inputs" },

  ];




  drop(event: CdkDragDrop<ICardItem[]>) {
    if (event.previousContainer === event.container) {
      // Movendo o item dentro da mesma coluna
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Transferindo o item de uma coluna para outra
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  


}
