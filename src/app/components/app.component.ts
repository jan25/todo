import { Component } from '@angular/core';
import {Todo} from '../models/todo.model';
import {LocalDB} from '../services/local-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LocalDB]
})
export class AppComponent {

  todos: Todo[];

  todo: Todo;

  title: string;


  constructor(private db: LocalDB) { }

  ngOnInit() {
    this.todos = this.db.getAll();
  }

  addTodo() {

  }

}
