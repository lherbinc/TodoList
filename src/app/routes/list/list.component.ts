import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoRecord } from 'src/app/todorecord.interface';
import { TodoListService } from 'src/app/todo-list.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  

  selectedRecords: Set<TodoRecord> = new Set<TodoRecord>();

  f = new FormGroup({
    tache: new FormControl('', [Validators.required]),
    isUrgent: new FormControl(false)
  });

  constructor(public todolist: TodoListService) { }

  ngOnInit() {
    this.todolist.set ([
      { tache: 'Faire la vaisselle', isUrgent: false },
      { tache: 'Changer la couette', isUrgent: false },
      { tache: 'Mettre le couvert', isUrgent: false }
    ]);
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

  hasSelectedRecords() {
    return this.selectedRecords.size > 0;
  }

  supprimeSelection() {
    console.log('Supprime');
    this.selectedRecords.forEach(r => {
      this.todolist.remove(r);
    });
    this.selectedRecords.clear();
  }

}
