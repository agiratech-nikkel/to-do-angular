import { NgClass } from '@angular/common';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void{
    this.items = window.localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')!):[]
  }
  title = 'angulartask';
  newToDo:string 
  deleted:boolean = false;
  items:any;
  constructor(private router:Router,){
    this.newToDo=""
  }
  public addToList(){
    if(!this.newToDo){
      alert('please enter the task')
    }
    else{
    this.items.push({key: this.newToDo, checked: false})
    window.localStorage.setItem('task', JSON.stringify(this.items))
    this.newToDo = ""
  }
}
  public deleteTask(index:any) {
    if(confirm("Are you sure to delete "+this.items[index].key +"  task")){
   this.items.splice(index, 1);
   window.localStorage.setItem('task', JSON.stringify(this.items))
  }
}
  changetab(){
  this.router.navigateByUrl('com')
  }
  changeStatus(index: any) {
    (this.items[index].checked = !this.items[index].checked)
    window.localStorage.setItem('task', JSON.stringify(this.items))
  }
}


