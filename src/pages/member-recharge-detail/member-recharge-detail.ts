import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, ModalController, ActionSheetController, AlertController } from 'ionic-angular';
import { AppBase } from "../../app/app.base";
import { AppMember } from "../../app/app.member";
import { MemberrechargeApi} from "../../providers/memberrecharge.api";

/**
 * Generated class for the MemberRechargeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-member-recharge-detail',
  templateUrl: 'member-recharge-detail.html',
  providers:[MemberrechargeApi]
})
export class MemberRechargeDetailPage extends AppBase {
  id=0;
  info={};
  constructor(public navCtrl: NavController, public navParams: NavParams,
      public viewCtrl: ViewController, public modalCtrl: ModalController, public toastCtrl: ToastController, public alertCtrl: AlertController,
      public memberrechargeApi:MemberrechargeApi) {
      super();
      this.id=navParams.get("id");
  }
  dismiss() {
      this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    this.memberrechargeApi.detail({id:this.id}).then(data=>{

    this.info=data;

  });
    console.log('ionViewDidLoad MemberRechargeDetailPage');
  }

}
