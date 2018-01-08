import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, ModalController, ActionSheetController, AlertController } from 'ionic-angular';
import { AppBase } from "../../app/app.base";
import { AppMember } from "../../app/app.member";
import { MemberconsumeApi } from "../../providers/memberconsume.api";


/**
 * Generated class for the MemberSuperRenewRecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-member-super-renew-record',
    templateUrl: 'member-super-renew-record.html',
    providers: [MemberconsumeApi]
})
export class MemberSuperRenewRecordPage extends AppBase
{
    list = [];
    constructor(public navCtrl: NavController, public navParams: NavParams,
        public viewCtrl: ViewController, public modalCtrl: ModalController,
        public toastCtrl: ToastController, public alertCtrl: AlertController,
        public memberconsumeApi: MemberconsumeApi)
    {
        super();
    }

    dismiss()
    {
        this.viewCtrl.dismiss();
    }

    ionViewDidLoad()
    {
        this.memberconsumeApi.list({ "type": "SUPERMEMBER" }).then(data =>
        {
            this.list = data;
        });
        console.log('ionViewDidLoad MemberSuperRenewRecordPage');
    }
    gotoConsumeDetail(rec)
    {
        var modal = this.modalCtrl.create("MemberConsumeDetailPage", { id: rec.id });
        modal.present();
    }
}
