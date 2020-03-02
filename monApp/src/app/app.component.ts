import { FirstComponent } from './first/first.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  save(){
    console.log("template form");
  }

  execute: boolean = false;

  parentMessage = 'I am a message in parent component';
  childMessage = 'I will be passed from parent component to child component';

  ngAfterViewInit() {
    console.log(this.firstViewChild);
  }

  @ViewChild(FirstComponent, {static: false}) firstViewChild: FirstComponent;

  count: any;
  displayFoo(count){
    console.log(count);
  }

  title = 'Hello World';
  height: number = 40;
  nameValue: '';
  num1: number = 10;
  num2: number = 30;
  result: number;
  sub: number;
  add(){
    this.result = this.num1 + this.num2;
  }

  substract(){
    this.sub = this.num1 - this.num2;
  }

  data: any;

  ngOnInit(): void {
    this.data = this.getData();
  }

  getData(){
    this.execute = true;
    return [

        {
        userId: 1,
        id: 1,
        title: 'ecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae '
        },
        {
        userId: 1,
        id: 2,
        title: 'ecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae '
        },
        {
        userId: 1,
        id: 3,
        title: 'ecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae '
        }
      ];
    }
  }
