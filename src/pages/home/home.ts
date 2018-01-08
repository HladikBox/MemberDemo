import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, ModalController, ActionSheetController, AlertController } from 'ionic-angular';
import { AppBase } from "../../app/app.base";
import { AppMember } from "../../app/app.member";
import { MemberApi } from "../../providers/member.api";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MemberApi]
})
export class HomePage extends AppBase
{

    constructor(public navCtrl: NavController, public navParams: NavParams,
        public viewCtrl: ViewController, public modalCtrl: ModalController,
        public toastCtrl: ToastController, public alertCtrl: AlertController,
        public memberApi: MemberApi)
    {
        super();
    }
    dismiss()
    {
        this.viewCtrl.dismiss();
    }
    ionViewDidLoad()
    {
        console.log('ionViewDidLoad ZCopyPage');
    }
    getTime()
    {
        if (this.checkLogin(this.modalCtrl) == false)
        {
            return;
        }
        this.memberApi.payfortime({}).then(data =>
        {
            if (data.code == 1)
            {
                var that = this;
                this.showRequirePayment(this.alertCtrl, this.modalCtrl, Number(data.return), function ()
                {
                    that.getTime();
                });
            } else
            {
                this.toast(this.toastCtrl, data.return);
            }
        });
    }
}
