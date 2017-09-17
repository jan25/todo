

import {Injectable} from '@angular/core';
import {AsyncLocalStorage, AsyncLocalStorageModule} from 'angular-async-local-storage';
import {Todo} from '../models/todo';

@Injectable()
export class LocalDB {

  constructor(private storage: AsyncLocalStorage) { }

  getAll() {
    let todos: Todo[] = [];

    // this.storage.getItem('todos').subscribe((data) => {
    //   todos = data.json();
    // }, () => console.log('ERROR in get all todos'));

    todos = [
      {
        title: 'task 1',
        description: 'desc 1',
        isDone: true,
        deadline: new Date()
      },
      {
        title: 'task 2',
        description: 'desc 2',
        isDone: false,
        deadline: new Date()
      },
      {
        title: 'task 3',
        description: 'desc 3',
        isDone: false,
        deadline: new Date()
      },
      {
        title: 'task 4',
        description: 'desc 4',
        isDone: false,
        deadline: new Date()
      },
      {
        title: 'task 5',
        description: 'desc 5',
        isDone: true,
        deadline: new Date()
      }
    ];

    return todos;
  }

}
