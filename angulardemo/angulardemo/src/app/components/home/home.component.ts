import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = '我是首页组件'
  public src = 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1345876676,54119291&fm=15&gp=0.jpg'

  public list: any = [
    {
      name: '新闻'
    },
    {
      name: '新闻'
    },
    {
      name: '新闻'
    }
  ]

  public bool: boolean = true

  public color: string = 'blue'

  public today = new Date()
  public num: number = 1//1是 2否
  public myinput: string = '我是默认值'

  constructor() {
    console.log(this.today);
  }

  ngOnInit(): void {
  }
  run() {
    console.log('点击');
  }
  inputClick() {
    this.myinput = '我改变了'
  }
  inputClick1() {
    console.log(this.myinput);

  }
  handleClick() {
    alert(this.title)
  }
  handleClick1() {
    this.title = '1111111111111'
  }


  keyDown(e: any) {
    console.log(e);
  }
  keyUp(e: any) {
    console.log(e);
    if (e.keyCode == 13) {
      console.log('点击了回车');
      console.log(e.target.value);

    }
  }

  handleClick2(e: any) {
    console.log(e.target);
    let dom: any = e.target
    dom.style.color = 'red'
  }
}
