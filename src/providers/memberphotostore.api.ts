import { Injectable } from '@angular/core';
import { Loading} from 'ionic-angular';
import { Http } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { ApiConfig } from '../app/api.config'

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

/*
  Generated class for the Test provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MemberphotostoreApi {

    constructor(public http: Http) {

    }

    
//获取会员推荐头像库列表，传入对应的搜索条件
public list(search_condition_json, showLoadingModal:boolean=true) {
        var url = ApiConfig.getApiUrl()+"memberphotostore/list";
        var headers = ApiConfig.GetHeader(url, search_condition_json);
        let options = new RequestOptions({ headers: headers });
        let body=ApiConfig.ParamUrlencoded(search_condition_json);


        let loading: Loading=null;
        if(showLoadingModal){
          loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if(ApiConfig.DataLoadedHandle("memberphotostore/list",search_condition_json,res)){
                  if(showLoadingModal){
                     ApiConfig.DimissLoadingModal();
                  }
              
                 return res.json();
              }else{
                return Promise.reject(res);
              }
            })
            .catch(err => {
                if(showLoadingModal){
					           ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle("memberphotostore/list",search_condition_json,err);
            });

        
    }



//随机获取一个头像
public random(data, showLoadingModal:boolean=true) {
        var url = ApiConfig.getApiUrl()+'memberphotostore/random';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });

        let body=ApiConfig.ParamUrlencoded(data);

        let loading: Loading=null;
        if(showLoadingModal){
          loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
              if(ApiConfig.DataLoadedHandle('memberphotostore/random',data,res)){
                  if(showLoadingModal){
      					     ApiConfig.DimissLoadingModal();
                  }
      				
      					 return res.json();
      				}else{
                return Promise.reject(res);
              }
            })
            .catch(err => {
                
                if(showLoadingModal){
					         ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('memberphotostore/random',data,err);
            });

        
    }


    

}
