import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farther-com',
  templateUrl: './farther-com.component.html',
  styleUrls: ['./farther-com.component.scss']
})
export class FartherComComponent implements OnInit {

  constructor() { }
  
  public msg: string = '父组件的msg'
  run() {
    console.log('父组件的run');

  }
  ngOnInit(): void {
  }
  handleClick(e:any) {
    console.log(e);
  }
}
