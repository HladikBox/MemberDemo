import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, ModalController, ActionSheetController, AlertController } from 'ionic-angular';
import { AppBase } from "../../app/app.base";
import { AppMember } from "../../app/app.member";
import { MemberconsumeApi} from "../../providers/memberconsume.api";

/**
 * Generated class for the MemberConsumeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-member-consume-detail',
  templateUrl: 'member-consume-detail.html',
  providers:[MemberconsumeApi]
})
export class MemberConsumeDetailPage  extends AppBase {
  id=0;
  info={};
  constructor(public navCtrl: NavController, public navParams: NavParams,
      public viewCtrl: ViewController, public modalCtrl: ModalController, public toastCtrl: ToastController, public alertCtrl: AlertController,
    public memberconsumeApi:MemberconsumeApi) {
      super();
      this.id=navParams.data.id;
  }
  dismiss() {
      this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    this.memberconsumeApi.detail({id:this.id}).then(data=>{

      this.info=data;

    });
    console.log('ionViewDidLoad MemberConsumeDetailPage');
  }

}
