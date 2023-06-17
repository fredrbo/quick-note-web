import { Component, OnInit } from '@angular/core';
import { Card } from './model/card.model';

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
    {
      title: "To Do", items: [
        { title: "Tela home", description: "Na tela home incluir tudo isso" },
        { title: "Criar banco", description: "Definir estrutura do banco" },
      ]
    },
    {
      title: "Doing", items: [
        { title: "Tela Login", description: "Na tela login tem que ter 2 inputs" },
      ]
    },
  ]

  createCard(){
    this.cards.push({title: "Nome do card"})
  }
}
