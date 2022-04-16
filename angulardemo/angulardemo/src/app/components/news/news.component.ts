import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-mynew',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }
  public msg = '新闻组件'

  username: string = '张三'
  public dataList: string[] = ['111', '222', '333', '444', '555', '666']
  public items: Array<any> = [1, 'xiaoMing', 11]
  public student: any = '我是一个学生的属性'

  public num: number = 0
  public userList: any[] = [
    {
      name: 'xiaoMing',
      age: 18
    },
    {
      name: 'xiaoMing1',
      age: 19
    },
    {
      name: 'xiaoMing2',
      age: 20
    }
  ]

  public carList: any[] = [
    {
      name: '奥迪',
      list: [
        {
          name: '奥迪1',
          price: 10,
        },
        {
          name: '奥迪2',
          price: 23,
        },
        {
          name: '奥迪3',
          price: 33,
        }
      ]
    },
    {
      name: '宝马',
      list: [
        {
          name: '宝马1',
          price: 10,
        },
        {
          name: '宝马2',
          price: 23,
        },
        {
          name: '宝马3',
          price: 33,
        }
      ]
    }
  ]
  public radioType: string = '1'
  public color: string = 'red'
  ngOnInit(): void {
  }
  handleClick(key: any) {
    console.log(key);
    if (this.num == key) {
      return
    }
    this.num = key
    this.color = this.randomColor()
  }

  randomColor() {
    let str: string = '#'
    for (let i = 0; i < 6; i++) {
      str += Math.floor(Math.random() * 16).toString(16)
    }
    // console.log(str);
    return str
  }
  radioClick(){
    console.log(this.radioType);
    
  }
}
