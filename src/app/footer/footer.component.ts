import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input()
  counter

  @Output()
  delete = new EventEmitter<any>();
  @Output()
  changefilter = new EventEmitter<any>();

  //Set the Class type
  filterType ="All";

  constructor() { }

  ngOnInit() {
  }

  //Delete the article.
  deleteOption(){
    this.delete.emit();
  }

 changeFilterType(filterType:string){
    this.filterType = filterType;
    this.changefilter.emit(filterType);

 }


}
