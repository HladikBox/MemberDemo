import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, ModalController, ActionSheetController, AlertController } from 'ionic-angular';
import { AppBase } from "../../app/app.base";
import { AppMember } from "../../app/app.member";
import { GeneraltextApi } from "../../providers/generaltext.api";

/**
 * Generated class for the MemberSuperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-member-super',
  templateUrl: 'member-super.html',
  providers:[GeneraltextApi]
})
export class MemberSuperPage extends AppBase {
  superdetail="";
  constructor(public navCtrl: NavController, public navParams: NavParams,
      public viewCtrl: ViewController, public modalCtrl: ModalController, public toastCtrl: ToastController, public alertCtrl: AlertController
    ,public generaltextApi:GeneraltextApi) {
      super();
  }
  dismiss() {
      this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberSuperPage');
    this.generaltextApi.view({ keycode: "superdetail" }).then(data => {
      this.superdetail =this.htmlDecode(data.content);
    });
  }
  gotoMemberRenew(){
    if (this.checkLogin(this.modalCtrl) == false) {
      return;
    }
    var modal = this.modalCtrl.create("MemberSuperRenewPage");
    modal.present();
  }
}
