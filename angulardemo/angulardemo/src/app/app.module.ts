// 这个文件是Angular根模块,告诉Angular如何组装应用

// BrowserModule 浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';
// Angular 核心模块
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// 跟组件
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms'
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { FormComponent } from './components/form/form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { SearchComponent } from './components/search/search.component';


import {StorageService} from './services/storage.service';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { FartherComComponent } from './components/farther-com/farther-com.component';
import { ChildComComponent } from './components/child-com/child-com.component'
// NgModule装饰器,NgModule接受一个元数据对象,告诉angular 如何编译和启动应用
@NgModule({
  declarations: [//配置当前项目运行的组件
    AppComponent, HeaderComponent, HomeComponent, NewsComponent, FormComponent, TodoListComponent, SearchComponent, ViewChildComponent, DrawerComponent, FartherComComponent, ChildComComponent
  ],
  imports: [//配置当前模块运行依赖的其他模块
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StorageService],//配置项目所需要的服务
  bootstrap: [AppComponent]//指定应用的主视图(称为跟组件) 通过引导根AppModule来启动应用,这里一般写的是跟组件
})
// 根模块不需要导出任何东西,因为其它组件不需要导入根模块
export class AppModule { }
