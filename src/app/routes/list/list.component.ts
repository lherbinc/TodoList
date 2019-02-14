import { Component, OnInit } from '@angular/core';
import { StaticInjector } from '@angular/core/src/di/injector';

interface TodoRecord {
  tache: string;
  isUrgent: boolean;
  acteur: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todolist = [];

  constructor() { }

  ngOnInit() {
    this.todolist = [
      { tache: 'Faire la vaisselle', isUrgent: false, acteur: 'Parent' },
      { tache: 'Changer la couette', isUrgent: false, acteur: 'Parent' },
      { tache: 'Mettre le couvert', isUrgent: false, acteur: 'Enfant' }
    ];
  }

}
