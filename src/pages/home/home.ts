import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Service} from '../../providers/service/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  language:String;
  constructor(
    public navCtrl: NavController,
    public ServiceProvider:Service
    ) { }

  findData(key:any){
    const data = {
      keyword:key.target.value,
      lang:this.language 
    };
    
this.ServiceProvider.searchRepo(data).subscribe(res=>{
console.log(res);
})
  }}