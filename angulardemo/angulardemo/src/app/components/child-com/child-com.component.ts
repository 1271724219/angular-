import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-com',
  templateUrl: './child-com.component.html',
  styleUrls: ['./child-com.component.scss']
})
export class ChildComComponent implements OnInit {
  @Input() msg: any
  @Input() run: any


  @Output() private outer = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
  handleClick() {
    this.run()
  }
  handleClick1() {
    this.outer.emit('123')
  }
}
