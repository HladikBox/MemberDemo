import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, ModalController, ActionSheetController, AlertController } from 'ionic-angular';
import { AppBase } from "../../app/app.base";
import { AppMember } from "../../app/app.member";
import {MembersuperpriceApi} from "../../providers/membersuperprice.api";
import {MemberApi} from "../../providers/member.api";

/**
 * Generated class for the MemberSuperRenewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-member-super-renew',
  templateUrl: 'member-super-renew.html',
  providers:[MembersuperpriceApi,MemberApi]
})
export class MemberSuperRenewPage extends AppBase {
  pricelist=[];
  price={id:0};
  constructor(public navCtrl: NavController, public navParams: NavParams,
      public viewCtrl: ViewController, public modalCtrl: ModalController, 
      public toastCtrl: ToastController, public alertCtrl: AlertController,
    public membersuperpriceApi:MembersuperpriceApi,public memberApi:MemberApi) {
      super();
  }
  dismiss() {
      this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    this.membersuperpriceApi.list({}).then(data=>{
      this.price=data[0];
      this.pricelist=data;
    });
    console.log('ionViewDidLoad MemberSuperRenewPage');
  }
  changePrice(rs){
    this.price=rs;
  }
  payment(){
    this.memberApi.superrenew({super_price_id:this.price.id}).then(data=>{
        if(data.code==0){
          this.Member.updateInfo();
          this.dismiss();
        }else if(data.code==1){
          var that=this;
          this.showRequirePayment(this.alertCtrl,this.modalCtrl,Number(data.return).toFixed(2),
          function(){
            that.payment();
          });
        }
    });
  }
}
