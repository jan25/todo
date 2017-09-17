import { Component } from '@angular/core';
import {Todo} from '../models/todo';
import {LocalDB} from '../services/local-db';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LocalDB]
})
export class AppComponent {

  todos: Todo[];

  constructor(private db: LocalDB) { }

  ngOnInit() {
    this.todos = this.db.getAll();
  }

}
