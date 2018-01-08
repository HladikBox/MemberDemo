import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, ModalController, ActionSheetController, AlertController } from 'ionic-angular';
import { AppBase } from "../../app/app.base";
import { AppMember } from "../../app/app.member";
import { MemberrechargeApi } from "../../providers/memberrecharge.api";
import { MemberconsumeApi } from "../../providers/memberconsume.api";

/**
 * Generated class for the MemberTransationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-member-transation',
    templateUrl: 'member-transation.html',
    providers: [MemberrechargeApi,MemberconsumeApi]
})
export class MemberTransationPage extends AppBase {
    displaytype = "consumerecord";
    rechargelist = [];
    consumelist = [];
    constructor(public navCtrl: NavController, public navParams: NavParams,
        public viewCtrl: ViewController, public modalCtrl: ModalController, public toastCtrl: ToastController, public alertCtrl: AlertController,
        public memberrechargeApi: MemberrechargeApi,public memberconsumeApi: MemberconsumeApi) {
        super();
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }

    ionViewDidLoad() {

        this.memberrechargeApi.list({}).then(data => {
            console.log(data);
            this.rechargelist = data;
            //for (let item of data) {
            //    if (this.rechargelist[item.rechargetime_month] == undefined) {
            //        this.rechargelist[item.rechargetime_month] = { month_str: item.rechargetime_month, records: [] };
            //    }
            //    this.rechargelist[item.rechargetime_month].records.push(item);
            //}
        });
        this.memberconsumeApi.list({}).then(data => {
            console.log(data);
            this.consumelist = data;
        });
        console.log('ionViewDidLoad MemberTransationPage');
    }

    gotoConsumeDetail(rec){
        var modal = this.modalCtrl.create("MemberConsumeDetailPage",{id:rec.id});
        modal.present();
    }
    gotoRechargeDetail(rec){
        var modal = this.modalCtrl.create("MemberRechargeDetailPage",{id:rec.id});
        modal.present();
        
    }

}
