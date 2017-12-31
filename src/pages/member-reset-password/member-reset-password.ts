import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, ModalController, ActionSheetController, AlertController } from 'ionic-angular';
import { AppBase } from "../../app/app.base";
import { AppMember } from "../../app/app.member";
import { MemberApi } from "../../providers/member.api";

/**
 * Generated class for the MemberResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-member-reset-password',
    templateUrl: 'member-reset-password.html',
    providers: [MemberApi]
})
export class MemberResetPasswordPage extends AppBase {

    mobile = "";
    verifycode = "";
    verifycodeReminder = 0;
    password ="";
    constructor(public navCtrl: NavController, public navParams: NavParams,
        public viewCtrl: ViewController, public modalCtrl: ModalController, public toastCtrl: ToastController, public alertCtrl: AlertController,
        public memberApi: MemberApi) {
        super();
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }

    sendSmsResetPassword() {
        this.memberApi.sendpwdresetverifycode({}).then(data => {

            if (data.code == 0 || data.result == "SUCCESS") {
                this.verifycodeReminder = 60;
                var obj = this;
                var timeobj = setInterval(function() {
                    obj.verifycodeReminder--;
                    if (obj.verifycodeReminder <= 0)
                        clearInterval(timeobj);
                }, 1000);
            }
            else if (data.result == "SENT_IN_MINUTE") {
                this.toast(this.toastCtrl, this.Lang["retryafterminute"]);
            }
            else {
                this.toast(this.toastCtrl, this.Lang["smssentfail"]);
            }
        });
    }
    ionViewDidLoad() {
        this.memberApi.getmobile({}).then((data => {
            this.mobile = data.mobile;
        }));
        console.log('ionViewDidLoad MemberResetPasswordPage');
    }
    submit() {
        this.memberApi.resetpassword(
            {
                password: this.password,
                verifycode: this.verifycode
            }).then((data => {
                if (data.code == 0) {
                    this.toast(this.toastCtrl, this.Lang["operationsuccessful"]);
                    this.dismiss();
                }
                else if (data.code == -401) {
                    this.toast(this.toastCtrl, this.Lang["passwordcannotnull"]);
                }
                else if (data.code == -1) {
                    this.toast(this.toastCtrl, this.Lang["verifycodeinvalid"]);
                }
                else {
                    this.toast(this.toastCtrl, this.Lang["othererror"]);
                }
            }));
    }

}
