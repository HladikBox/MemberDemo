import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ToastController } from 'ionic-angular';
import { AppBase } from "../../app/app.base";
import { ApiConfig } from "../../app/api.config";
import { MemberApi } from "../../providers/member.api";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
    providers: [MemberApi]
})
export class RegisterPage extends AppBase {
    info = [];
    step = 1;

    mobile = "";
    verifycode = "";
    verifycodeReminder = 0;
    name = "";
    password = "";


    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
        public modalCtrl: ModalController, public toastCtrl: ToastController,
        public memberApi: MemberApi) {
        super();
        this.info[1] = {
            title: this.Lang["registeraccount"], description: this.Lang["confirmmobile"]
        };
        this.info[2] = {
            title: this.Lang["verifymobile"], description: this.Lang["registerverifycodesent"]
        };
    }

    dismiss() {
        this.step--;
        if (this.step <= 0) {
            this.viewCtrl.dismiss();
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterPage');
    }
    getVerifyCode()
    {
        this.memberApi.mobileisuse({ mobile: this.mobile }).then(mobilecheck =>
        {
            if (mobilecheck.return == false){

                this.memberApi.sendregisterverifycode({ "mobile": this.mobile }).then(data =>
                {
                    if (data.code == 0 || data.result == "SUCCESS")
                    {
                        this.step = 2;
                        this.verifycodeReminder = 60;
                        var obj = this;
                        var timeobj = setInterval(function ()
                        {
                            obj.verifycodeReminder--;
                            if (obj.verifycodeReminder <= 0)
                                clearInterval(timeobj);
                        }, 1000);
                    }
                    else if (data.result == "SENT_IN_MINUTE")
                    {
                        this.toast(this.toastCtrl, this.Lang["retryafterminute"]);
                    }
                    else
                    {
                        this.toast(this.toastCtrl, this.Lang["smssentfail"]);
                    }
                });

            } else{

                this.toast(this.toastCtrl, this.Lang["mobileisused"])

            }
        });
    }
    tryRegister()
    {
        this.memberApi.register({ mobile: this.mobile, verifycode: this.verifycode, name: this.name, password: ApiConfig.MD5(this.password) }).then(
            data =>
            {
                if (data.code == -401)
                {
                    this.toast(this.toastCtrl, this.Lang["mobileisused"]);
                } else if (data.code == -501)
                {
                    this.toast(this.toastCtrl, this.Lang["verifycodeinvalid"]);
                } else if (data.code == 0)
                {
                    this.Member.setLogin(data.return.id, data.return.name, data.return.photo, data.return.token);
                    this.viewCtrl.dismiss({ logined: true });
                }
            });
    }
}
