import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form: any = {
    name: '',
    sex: '1',
    city: '上海',
    hobby: [
      {
        name: '吃饭',
        bool: false,
      },
      {
        name: '睡觉',
        bool: false,
      },
      {
        name: '看电视',
        bool: true,
      }
    ],
    lack: "",
    mark: ''
  }

  public cityList = ['上海', '北京', '11']

  constructor() { }

  ngOnInit(): void {
  }
  handleClick(){
    console.log(this.form);
    
  }
}
