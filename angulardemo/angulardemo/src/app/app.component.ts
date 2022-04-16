// 引入核心模块里面的Component
import { Component } from '@angular/core';

// 装饰器
@Component({
  selector: 'app-root',//使用这个组件的名称
  templateUrl: './app.component.html',//html
  styleUrls: ['./app.component.scss']//scss
})
export class AppComponent {
  title = 'angulardemo';//定义属性

  constructor(){//构造函数

  }
}
