import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { AppBase } from "../../app/app.base";
import { AppMember } from "../../app/app.member";
import { MemberApi } from "../../providers/member.api";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    providers: [MemberApi]
})
export class LoginPage extends AppBase
{
    logintype = "password";
    mobile = "";
    password = "";
    verifycode = "";
    verifycodeReminder = 0;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public memberApi: MemberApi, public toastCtrl: ToastController)
    {
        super();
    }

    ionViewDidLoad()
    {
        console.log('ionViewDidLoad LoginPage');
        AppMember.GetLatestLoginMobile().then(data =>
        {
            if (data != null)
            {
                this.mobile = data;
            }
        });
        this.logintype = "password";
    }
    dismiss()
    {
        this.viewCtrl.dismiss();
    }
    sendSmsLogin()
    {
        this.memberApi.sendloginverifycode({ "mobile": this.mobile }).then(data =>
        {

            if (data.code == -3){
                this.toast(this.toastCtrl, this.Lang["mobilenotregister"]);
            }
            else if (data.code == 0 || data.result == "SUCCESS"){
                this.verifycodeReminder = 60;
                var obj = this;
                var timeobj = setInterval(function ()
                {
                    obj.verifycodeReminder--;
                    if (obj.verifycodeReminder <= 0)
                        clearInterval(timeobj);
                }, 1000);
            }
            else if (data.result == "SENT_IN_MINUTE"){
                this.toast(this.toastCtrl, this.Lang["retryafterminute"]);
            }
            else{
                this.toast(this.toastCtrl, this.Lang["smssentfail"]);
            }
        });
    }
    tryLogin()
    {
        AppMember.SetLatestLoginMobile(this.mobile);
        this.memberApi.login({ mobile: this.mobile, password: this.password, verifycode: this.verifycode })
            .then((data) =>
            {
                if (data.code == 0){
                    this.Member.setLogin(data.return.id, data.return.name, data.return.photo, data.return.token);
                }
                else if (data.code == -401){
                    this.toast(this.toastCtrl, this.Lang["loginfail"]);
                }
                else if (data.code == -501)
                {
                    this.toast(this.toastCtrl, this.Lang["verifycodeinvalid"]);
                }
            });
    }
}
