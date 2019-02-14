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
    console.log('on submit');
    this.todolist.push(this.f.value);
    this.f.reset();
    }

  isSelected(r: TodoRecord){
    return this.selectedRecords.has(r);
  }

toggleSelection(r: TodoRecord){
  if (this.isSelected(r)){
    this.selectedRecords.delete(r);
    return; 
  }
  this.selectedRecords.add(r);

}

}
