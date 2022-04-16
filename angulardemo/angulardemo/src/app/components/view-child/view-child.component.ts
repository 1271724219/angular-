import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit {
  @ViewChild('mybox') mybox: any;
  @ViewChild('drawer') drawer: any;
  constructor() { }
  ngAfterViewInit(): void {
    this.mybox.nativeElement.style.background = 'red'
    console.log(this.mybox.nativeElement.style.background);
  }

  ngOnInit(): void {
  }
  handleClick() {
    this.drawer.mydrawer.nativeElement.style.transform = 'translate(0,0)'
    console.log(this.drawer.mydrawer.nativeElement.transform);
  }
}
