import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './model/todo';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todos$: Observable<Todo[]> = this.todoService.getAll();

  selectedTodo: Todo = new Todo();

  phrase: string='';

  sorting: string='';

  constructor(
    private todoService: TodoService,
  ) {}

  onDelete(todo: Todo) : void {
    alert('A kiválasztott listaelem törlődni fog! Biztosan ezt akarja?')
    this.todoService.delete(todo).subscribe(
      ()=>{
        this.todos$=this.todoService.getAll();
      }
    )
  }

  onChangePhrase(event:Event): void {
    this.phrase=(event.target as HTMLInputElement).value;
  }

  onColumnSelect(key: string): void {
    this.sorting = key;
  }

  onUpdate(todo: Todo): void {
    todo.active= !todo.active;
    this.todoService.update(todo).subscribe()
  }

  onCreate(todo: Todo): void {
    this.todoService.create(todo).subscribe()
  }
}
