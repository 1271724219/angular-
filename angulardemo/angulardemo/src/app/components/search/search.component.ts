import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(storage: StorageService) {
    this.storage = storage
  }
  public storage:any = null
  public name: string = ''
  public dataList: any = []
  ngOnInit(): void {
    if (this.storage.get('serach')) {
      this.dataList =  this.storage.get('serach')
    }
  }
  handleAdd() {
    this.dataList.push(this.name)
    this.storage.set('serach',this.dataList)
  }
  handleDel(i: number) {
    this.dataList.splice(i, 1)
    this.storage.set('serach',this.dataList)
  }

}
