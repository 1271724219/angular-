## Angular中的dom操作(原生js)

```js
// 试图加载完成以后触发的方法 dom加载完成 （建议把dom操作放在这个里面）
ngAfterViewInit(){
    var boxDom:any = document.getElementById('box')
    boxDom.style.color = 'red'
}
```

## Angular中的dom操作(ViewChild)  可以理解为vue中的ref

> import {Component, ViewChild, ElementRef} from '@angular/core'

> @ViewChild('myattr')myattr:ElementRef

><div #myattr>

```js
/* 
使用方法总结

ViewChild获取dom节点

1. 模板中给dom起一个名字
    <div #myBox>
        我是一个dom节点
    </div>

2. 在业务逻辑里面引入ViewChild

import {Component, Oninit, viewChild} from '@angular/core'

3. 写在类里面 @ViewChild('myBox) myBox:any

4. ngAfterViewInit生命周期函数里面获取dom

this.myBox.nativeElement
 */
```

## 父子组件中通过ViewChild调用子组件的方法

1. 调用子组件给子组件定义一个名称
   
> <app-footer #footerChild></app-footer>