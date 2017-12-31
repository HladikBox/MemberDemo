import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, ModalController, ActionSheetController, AlertController } from 'ionic-angular';
import { AppBase } from "../../app/app.base";
import { AppMember } from "../../app/app.member";
import { MemberApi } from "../../providers/member.api";

/**
 * Generated class for the MemberRebindMobilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-member-rebind-mobile',
    templateUrl: 'member-rebind-mobile.html',
    providers: [MemberApi]
})
export class MemberRebindMobilePage extends AppBase {
    oldmobile = "";
    oldverifycode = "";
    oldverifycodeReminder = 0;

    newmobile = "";
    newverifycode = "";
    newverifycodeReminder = 0;
    constructor(public navCtrl: NavController, public navParams: NavParams,
        public viewCtrl: ViewController, public modalCtrl: ModalController, public toastCtrl: ToastController, public alertCtrl: AlertController,
        public memberApi: MemberApi) {
        super();
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    ionViewDidLoad() {
        this.memberApi.getmobile({}).then((data => {
            this.oldmobile = data.mobile;
        }));
        console.log('ionViewDidLoad ZCopyPage');
    }
    oldsendSmsBind() {
        this.memberApi.sendbindverifycode({}).then(data => {

            if (data.code == 0 || data.result == "SUCCESS") {
                this.oldverifycodeReminder = 60;
                var obj = this;
                var oldtimeobj = setInterval(function() {
                    obj.oldverifycodeReminder--;
                    if (obj.oldverifycodeReminder <= 0)
                        clearInterval(oldtimeobj);
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
    newsendSmsBind() {
        this.memberApi.sendbindverifycode({ mobile: this.newmobile }).then(data => {

            if (data.code == 0 || data.result == "SUCCESS") {
                this.newverifycodeReminder = 60;
                var obj = this;
                var newtimeobj = setInterval(function() {
                    obj.newverifycodeReminder--;
                    if (obj.newverifycodeReminder <= 0)
                        clearInterval(newtimeobj);
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
    tryRebind() {
        this.memberApi.changemobile(
            {
                oldverifycode: this.oldverifycode,
                newmobile: this.newmobile,
                newverifycode: this.newverifycode
            }).then((data => {
                if (data.code == 0) {
                    this.toast(this.toastCtrl, this.Lang["operationsuccessful"]);
                    this.dismiss();
                }
                else if (data.code == -201) {
                    this.toast(this.toastCtrl, this.Lang["oldverifyincorrect"]);
                } 
                else if (data.code == -202) {
                    this.toast(this.toastCtrl, this.Lang["newverifyincorrect"]);
                }
                else if (data.code == -203) {
                    this.toast(this.toastCtrl, this.Lang["mobileisthesame"]);
                }
                else {
                    this.toast(this.toastCtrl, this.Lang["othererror"]);
                }
            }));
    }
}