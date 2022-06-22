import { NgClass } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartask';
  newToDo:string 
  deleted:boolean = false;
  items:any; 
  constructor(){
    this.newToDo=""
    this.items = []
  }
  public addToList(){
    this.items.push({key: this.newToDo, checked: false})
    window.localStorage.setItem('task', JSON.stringify(this.newToDo))
    this.newToDo = ""
    // alert("Task Add to the list")
  }
  public deleteTask(index:any) {
   this.items.splice(index, 1);
   // alert("Task is deleted")
  }
  changeStatus(index: any) {
    (this.items[index].checked = !this.items[index].checked)
  }
}

