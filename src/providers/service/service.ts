import { HttpClient,header } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }
searchRepo(data:any){
this.http.get("https://api.github.com/search/repositories?q="+data.keyword+"+language:"+data.lang)

}
}
