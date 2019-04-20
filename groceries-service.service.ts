import { Injectable } from '@angular/core';
import { StorageService, Item } from './storage.service';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {

  items: Item[] = [];

  constructor(public storageService: StorageService, public plt: Platform) {
    this.plt.ready().then(()=>{
      this.loadItems();
    });
  }

  getItems(){
    return this.items;
  }

  addItem(item){
    this.storageService.addItem(item).then(()=>{
      this.loadItems();
    });
  }

  loadItems() {
    this.storageService.getItems().then(items=>{
      this.items = items;
    });
  }

  editItem(index, item){
    this.storageService.updateItem(item, index).then(()=>{
      this.loadItems();
    });
  }

  removeItem(index){
    this.storageService.deleteItem(index).then(()=>{
      this.loadItems();
    });
  }
}
