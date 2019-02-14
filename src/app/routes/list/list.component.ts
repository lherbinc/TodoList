import { Component, OnInit } from '@angular/core';
import { StaticInjector } from '@angular/core/src/di/injector';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReturnStatement } from '@angular/compiler';

interface TodoRecord {
  tache: string;
  isUrgent: boolean;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todolist: TodoRecord[];

  selectedRecords: Set<TodoRecord> = new Set<TodoRecord>();

  f = new FormGroup({
    tache: new FormControl('', [Validators.required]),
    isUrgent: new FormControl(false)
  });

  constructor() { }

  ngOnInit() {
    this.todolist = [
      { tache: 'Faire la vaisselle', isUrgent: false },
      { tache: 'Changer la couette', isUrgent: false },
      { tache: 'Mettre le couvert', isUrgent: false }
    ];
  }

  onSubmit() {
    this.todolist.push(this.f.value);
    this.reinitialiser();
  }

  reinitialiser() {
    this.f.reset({ tache: 'Définir votre tâche', isUrgent: false });
  }

  isSelected(r: TodoRecord) {
    return this.selectedRecords.has(r);
  }

  toggleSelection(r: TodoRecord) {
    if (this.isSelected(r)) {
      this.selectedRecords.delete(r);
      return;
    }
    this.selectedRecords.add(r);
  }

  hasSelectedRecords(r: TodoRecord) {
    return this.selectedRecords.size > 0;
  }

  supprimeSelection() {
    console.log('Supprime');
    this.selectedRecords.forEach(r => {
      const index = this.todolist.findIndex(x => x === r);
      this.todolist.splice(index, 1);
    });
    this.selectedRecords.clear();
  }

}
