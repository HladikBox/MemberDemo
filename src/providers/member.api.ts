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
export class MemberApi {

    constructor(public http: Http) {

    }

    

//获取我的粉丝，如果传入member_id则获取别人的粉丝
public fans(data, showLoadingModal:boolean=true) {
        var url = ApiConfig.getApiUrl()+'member/fans';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });

        let body=ApiConfig.ParamUrlencoded(data);

        let loading: Loading=null;
        if(showLoadingModal){
          loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
              if(ApiConfig.DataLoadedHandle('member/fans',data,res)){
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
                return ApiConfig.ErrorHandle('member/fans',data,err);
            });

        
    }


//关注某个会员
public follow(data, showLoadingModal:boolean=true) {
        var url = ApiConfig.getApiUrl()+'member/follow';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });

        let body=ApiConfig.ParamUrlencoded(data);

        let loading: Loading=null;
        if(showLoadingModal){
          loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
              if(ApiConfig.DataLoadedHandle('member/follow',data,res)){
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
                return ApiConfig.ErrorHandle('member/follow',data,err);
            });

        
    }


//获取我关注的人，如果传入member_id则获取别人的关注的人
public followers(data, showLoadingModal:boolean=true) {
        var url = ApiConfig.getApiUrl()+'member/followers';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });

        let body=ApiConfig.ParamUrlencoded(data);

        let loading: Loading=null;
        if(showLoadingModal){
          loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
              if(ApiConfig.DataLoadedHandle('member/followers',data,res)){
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
                return ApiConfig.ErrorHandle('member/followers',data,err);
            });

        
    }


//获取用户的账户资料
public info(data, showLoadingModal:boolean=true) {
        var url = ApiConfig.getApiUrl()+'member/info';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });

        let body=ApiConfig.ParamUrlencoded(data);

        let loading: Loading=null;
        if(showLoadingModal){
          loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
              if(ApiConfig.DataLoadedHandle('member/info',data,res)){
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
                return ApiConfig.ErrorHandle('member/info',data,err);
            });

        
    }


//更新用户账号资料，基本资料为主
public infoupdate(data, showLoadingModal:boolean=true) {
        var url = ApiConfig.getApiUrl()+'member/infoupdate';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });

        let body=ApiConfig.ParamUrlencoded(data);

        let loading: Loading=null;
        if(showLoadingModal){
          loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
              if(ApiConfig.DataLoadedHandle('member/infoupdate',data,res)){
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
                return ApiConfig.ErrorHandle('member/infoupdate',data,err);
            });

        
    }


//用户登录
public login(data, showLoadingModal:boolean=true) {
        var url = ApiConfig.getApiUrl()+'member/login';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });

        let body=ApiConfig.ParamUrlencoded(data);

        let loading: Loading=null;
        if(showLoadingModal){
          loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
              if(ApiConfig.DataLoadedHandle('member/login',data,res)){
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
                return ApiConfig.ErrorHandle('member/login',data,err);
            });

        
    }


//member login接口的拓展，如果手机号码不存在自动创建用户
public logini(data, showLoadingModal:boolean=true) {
        var url = ApiConfig.getApiUrl()+'member/logini';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });

        let body=ApiConfig.ParamUrlencoded(data);

        let loading: Loading=null;
        if(showLoadingModal){
          loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
              if(ApiConfig.DataLoadedHandle('member/logini',data,res)){
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
                return ApiConfig.ErrorHandle('member/logini',data,err);
            });

        
    }


//检查手机号码是否已经被注册
public mobileisuse(data, showLoadingModal:boolean=true) {
        var url = ApiConfig.getApiUrl()+'member/mobileisuse';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });

        let body=ApiConfig.ParamUrlencoded(data);

        let loading: Loading=null;
        if(showLoadingModal){
          loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
              if(ApiConfig.DataLoadedHandle('member/mobileisuse',data,res)){
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
                return ApiConfig.ErrorHandle('member/mobileisuse',data,err);
            });

        
    }


//授权登录绑定会员手机
public oauthbindmobile(data, showLoadingModal:boolean=true) {
        var url = ApiConfig.getApiUrl()+'member/oauthbindmobile';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });

        let body=ApiConfig.ParamUrlencoded(data);

        let loading: Loading=null;
        if(showLoadingModal){
          loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
              if(ApiConfig.DataLoadedHandle('member/oauthbindmobile',data,res)){
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
                return ApiConfig.ErrorHandle('member/oauthbindmobile',data,err);
            });

        
    }


//授权登录
public oauthlogin(data, showLoadingModal:boolean=true) {
        var url = ApiConfig.getApiUrl()+'member/oauthlogin';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });

        let body=ApiConfig.ParamUrlencoded(data);

        let loading: Loading=null;
        if(showLoadingModal){
          loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
              if(ApiConfig.DataLoadedHandle('member/oauthlogin',data,res)){
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
                return ApiConfig.ErrorHandle('member/oauthlogin',data,err);
            });

        
    }


//授权注册
public oauthregister(data, showLoadingModal:boolean=true) {
        var url = ApiConfig.getApiUrl()+'member/oauthregister';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });

        let body=ApiConfig.ParamUrlencoded(data);

        let loading: Loading=null;
        if(showLoadingModal){
          loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
              if(ApiConfig.DataLoadedHandle('member/oauthregister',data,res)){
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
                return ApiConfig.ErrorHandle('member/oauthregister',data,err);
            });

        
    }


//充值申请，获取订单编号，金额及标题，用以申请支付请求
public rechargerequest(data, showLoadingModal:boolean=true) {
        var url = ApiConfig.getApiUrl()+'member/rechargerequest';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });

        let body=ApiConfig.ParamUrlencoded(data);

        let loading: Loading=null;
        if(showLoadingModal){
          loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
              if(ApiConfig.DataLoadedHandle('member/rechargerequest',data,res)){
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
                return ApiConfig.ErrorHandle('member/rechargerequest',data,err);
            });

        
    }


//用户提交注册，返回登录状态的token，并记录session。支持两种登录方式。
public register(data, showLoadingModal:boolean=true) {
        var url = ApiConfig.getApiUrl()+'member/register';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });

        let body=ApiConfig.ParamUrlencoded(data);

        let loading: Loading=null;
        if(showLoadingModal){
          loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
              if(ApiConfig.DataLoadedHandle('member/register',data,res)){
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
                return ApiConfig.ErrorHandle('member/register',data,err);
            });

        
    }


//利用短信验证码重置密码，无需旧密码
public resetpassword(data, showLoadingModal:boolean=true) {
        var url = ApiConfig.getApiUrl()+'member/resetpassword';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });

        let body=ApiConfig.ParamUrlencoded(data);

        let loading: Loading=null;
        if(showLoadingModal){
          loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
              if(ApiConfig.DataLoadedHandle('member/resetpassword',data,res)){
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
                return ApiConfig.ErrorHandle('member/resetpassword',data,err);
            });

        
    }


//发送授权登录绑定手机号码的验证码
public sendbindverifycode(data, showLoadingModal:boolean=true) {
        var url = ApiConfig.getApiUrl()+'member/sendbindverifycode';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });

        let body=ApiConfig.ParamUrlencoded(data);

        let loading: Loading=null;
        if(showLoadingModal){
          loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
              if(ApiConfig.DataLoadedHandle('member/sendbindverifycode',data,res)){
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
                return ApiConfig.ErrorHandle('member/sendbindverifycode',data,err);
            });

        
    }


//发送快捷登陆短信验证码
public sendloginverifycode(data, showLoadingModal:boolean=true) {
        var url = ApiConfig.getApiUrl()+'member/sendloginverifycode';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });

        let body=ApiConfig.ParamUrlencoded(data);

        let loading: Loading=null;
        if(showLoadingModal){
          loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
              if(ApiConfig.DataLoadedHandle('member/sendloginverifycode',data,res)){
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
                return ApiConfig.ErrorHandle('member/sendloginverifycode',data,err);
            });

        
    }


//发送密码重置的短信验证码
public sendpwdresetverifycode(data, showLoadingModal:boolean=true) {
        var url = ApiConfig.getApiUrl()+'member/sendpwdresetverifycode';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });

        let body=ApiConfig.ParamUrlencoded(data);

        let loading: Loading=null;
        if(showLoadingModal){
          loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
              if(ApiConfig.DataLoadedHandle('member/sendpwdresetverifycode',data,res)){
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
                return ApiConfig.ErrorHandle('member/sendpwdresetverifycode',data,err);
            });

        
    }


//发送注册短信验证码
public sendregisterverifycode(data, showLoadingModal:boolean=true) {
        var url = ApiConfig.getApiUrl()+'member/sendregisterverifycode';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });

        let body=ApiConfig.ParamUrlencoded(data);

        let loading: Loading=null;
        if(showLoadingModal){
          loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
              if(ApiConfig.DataLoadedHandle('member/sendregisterverifycode',data,res)){
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
                return ApiConfig.ErrorHandle('member/sendregisterverifycode',data,err);
            });

        
    }


//超级会员日期更新
public superrenew(data, showLoadingModal:boolean=true) {
        var url = ApiConfig.getApiUrl()+'member/superrenew';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });

        let body=ApiConfig.ParamUrlencoded(data);

        let loading: Loading=null;
        if(showLoadingModal){
          loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
              if(ApiConfig.DataLoadedHandle('member/superrenew',data,res)){
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
                return ApiConfig.ErrorHandle('member/superrenew',data,err);
            });

        
    }


//取消关注
public unfollow(data, showLoadingModal:boolean=true) {
        var url = ApiConfig.getApiUrl()+'member/unfollow';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });

        let body=ApiConfig.ParamUrlencoded(data);

        let loading: Loading=null;
        if(showLoadingModal){
          loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
              if(ApiConfig.DataLoadedHandle('member/unfollow',data,res)){
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
                return ApiConfig.ErrorHandle('member/unfollow',data,err);
            });

        
    }


//获取未读的通知
public unreadnotice(data, showLoadingModal:boolean=true) {
        var url = ApiConfig.getApiUrl()+'member/unreadnotice';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });

        let body=ApiConfig.ParamUrlencoded(data);

        let loading: Loading=null;
        if(showLoadingModal){
          loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
              if(ApiConfig.DataLoadedHandle('member/unreadnotice',data,res)){
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
                return ApiConfig.ErrorHandle('member/unreadnotice',data,err);
            });

        
    }


//虚拟货币充值，仅微信支付接口回调才有效充值
public weixinrecharge(data, showLoadingModal:boolean=true) {
        var url = ApiConfig.getApiUrl()+'member/weixinrecharge';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });

        let body=ApiConfig.ParamUrlencoded(data);

        let loading: Loading=null;
        if(showLoadingModal){
          loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
              if(ApiConfig.DataLoadedHandle('member/weixinrecharge',data,res)){
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
                return ApiConfig.ErrorHandle('member/weixinrecharge',data,err);
            });

        
}
//虚拟货币充值，仅测试支付接口回调才有效充值
    public testpayrecharge(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'member/testpayrecharge';
    var headers = ApiConfig.GetHeader(url, data);
    let options = new RequestOptions({ headers: headers });

    let body = ApiConfig.ParamUrlencoded(data);

    let loading: Loading = null;
    if (showLoadingModal) {
        loading = ApiConfig.GetLoadingModal();
    }

    return this.http.post(url, body, options).toPromise()
        .then((res) => {
            if (ApiConfig.DataLoadedHandle('member/weixinrecharge', data, res)) {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }

                return res.json();
            } else {
                return Promise.reject(res);
            }
        })
        .catch(err => {

            if (showLoadingModal) {
                ApiConfig.DimissLoadingModal();
            }
            return ApiConfig.ErrorHandle('member/weixinrecharge', data, err);
        });


}

//获取手机号码
public getmobile(data, showLoadingModal: boolean = true) {
    var url = ApiConfig.getApiUrl() + 'member/getmobile';
    var headers = ApiConfig.GetHeader(url, data);
    let options = new RequestOptions({ headers: headers });

    let body = ApiConfig.ParamUrlencoded(data);

    let loading: Loading = null;
    if (showLoadingModal) {
        loading = ApiConfig.GetLoadingModal();
    }

    return this.http.post(url, body, options).toPromise()
        .then((res) => {
            if (ApiConfig.DataLoadedHandle('member/getmobile', data, res)) {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }

                return res.json();
            } else {
                return Promise.reject(res);
            }
        })
        .catch(err => {

            if (showLoadingModal) {
                ApiConfig.DimissLoadingModal();
            }
            return ApiConfig.ErrorHandle('member/getmobile', data, err);
        });


}

public changemobile(data, showLoadingModal: boolean = true) {
    var url = ApiConfig.getApiUrl() + 'member/changemobile';
    var headers = ApiConfig.GetHeader(url, data);
    let options = new RequestOptions({ headers: headers });

    let body = ApiConfig.ParamUrlencoded(data);

    let loading: Loading = null;
    if (showLoadingModal) {
        loading = ApiConfig.GetLoadingModal();
    }

    return this.http.post(url, body, options).toPromise()
        .then((res) => {
            if (ApiConfig.DataLoadedHandle('member/changemobile', data, res)) {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }

                return res.json();
            } else {
                return Promise.reject(res);
            }
        })
        .catch(err => {

            if (showLoadingModal) {
                ApiConfig.DimissLoadingModal();
            }
            return ApiConfig.ErrorHandle('member/changemobile', data, err);
        });
}
    

}
