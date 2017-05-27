import {OnInit, Component} from '@angular/core';
import { DataService } from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //Add comments
  todo: string="";
  todos:any [] =[];
  inputHints = 'Please help to input something!'
  filterType:string;
  toggleAll = false;



  constructor (private datasvc:DataService){
   // console.log("Asun Hellow11111");
  }

  ngOnInit(){
       console.log("Asun Hellow");
       this.datasvc.getTodos().subscribe(data =>{
       this.todos = data;
    });
  }

  addTodo()
  {
   // let newtodos =[...this.todos];

    this.todos.push(
     {
      text: this.todo,
      done: false
     }
    );

    this.datasvc.saveTodos(this.todos).subscribe(data =>{
       this.todos = data;
    })
   this.todo ="";
  }

 deleteOption() {
    console.log('delete it');
    let newtodos = this.todos.filter(item=>{return !item.done});

    this.datasvc.saveTodos(newtodos).subscribe(data =>{
      this.todos = data;
    });

 }

 changeFilter(filterType:string){
    this.filterType = filterType;
 }

 toggleAllChange(value:boolean){

    let newtodos =[...this.todos];

    newtodos.forEach(item =>{
      item.done = value;
    })

 }

 updateToggleAllstate()
 {
   this.toggleAll = this.todos.filter(item => {return !item.done}).length ==0
 }

onRemove(todo ){
  let newtodos =[...this.todos];
  newtodos.splice(this.todos.indexOf(todo),1);
  this.datasvc.saveTodos(newtodos).subscribe(data =>{
    this.todos = data;
  });
}

}
