import { SecondComponent } from './../second/second.component';
import { Component, OnInit, EventEmitter, Input, Output, OnChanges, ContentChild, AfterContentInit } from '@angular/core';
import { InvokeFunctionExpr } from '@angular/compiler';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit, OnChanges, AfterContentInit {

  @Output() foo = new EventEmitter();
  counter=0;
  color: any;

  @ContentChild(SecondComponent, {static: false}) SecondContentChild: SecondComponent;

  ngAfterContentInit() {
    console.log(this.SecondContentChild);
  }
  useFoo(){
    this.counter = this.counter + 1;
    this.foo.emit(this.counter);
  }

  ngOnChanges(){
    if (this.counter > 5){
      this.color = 'red';
    } else{
      this.color = 'green';
    }
  }

  @Input() helloMessage: string;
  constructor() { }

  ngOnInit() {
  }

}
