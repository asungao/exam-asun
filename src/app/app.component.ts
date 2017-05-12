import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Add comments
  todo: string="";
  todos:any [] =[];
  inputHints = 'Please help to input something!'
  filterType:string;

  addTodo()
  {
    this.todos.push(
     {
      text: this.todo,
      done: false
     }
    );
    this.todo ="";
  }

 deleteOption() {
    console.log('delete it');
    this.todos =  this.todos.filter(item=>{return !item.done}
    )
 }

 changeFilter(filterType:string){
    this.filterType = filterType;
 }
}
