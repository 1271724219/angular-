import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  @ViewChild('mydrawer') mydrawer:any

  constructor() { }

  ngOnInit(): void {
  }

}
