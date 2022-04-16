import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(storage: StorageService) {
    this.storage = storage
  }
  public storage: any = null
  public keyName: string = ''
  public dataList: Array<any> = []
  ngOnInit(): void {
    
    if (this.storage.get('list').length) {
      this.dataList = this.storage.get('list')
    }
  }
  handleKeyDown(e: any) {
    console.log(e);
    if (!this.mySet(this.dataList, this.keyName)) return
    if (e.keyCode == 13) {
      this.dataList.push({
        bool: 0,
        title: this.keyName
      })
    }
    this.storage.set('list', this.dataList)
  }
  handleClick(index: number) {
    this.dataList.splice(index, 1)
    this.storage.set('list', this.dataList)
  }
  mySet(list: Array<any>, val: string) {
    for (const item of list) {
      if (item.title == val) {
        return false
      }
    }
    return true
  }

  handleChange(){
    console.log('123123');
    
    this.storage.set('list',this.dataList)
  }
}
