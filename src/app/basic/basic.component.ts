import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  color='red';
  counter=0;
  incr():number{
    return this.counter++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
