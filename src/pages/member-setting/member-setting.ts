import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, ModalController, ActionSheetController } from 'ionic-angular';
import { AppBase } from "../../app/app.base";
import { AppMember } from "../../app/app.member";

/**
 * Generated class for the MemberSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-member-setting',
    templateUrl: 'member-setting.html',
})
export class MemberSettingPage extends AppBase {

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
        super();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MemberSettingPage');
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
    gotoMemberInfo() {
        var modal = this.modalCtrl.create("MemberInfoPage");
        modal.onDidDismiss((data) => {
            if (data != undefined) {
                if (data.logout) {
                    this.dismiss();
                }
            }
        });
        modal.present();
    }
    gotoLogout() {
        this.Member.logout();
        this.dismiss();
    }
    gotoMemberRebindMobile() {
        var modal = this.modalCtrl.create("MemberRebindMobilePage");
        modal.present();
    } 
    gotoMemberResetPassword() {
        var modal = this.modalCtrl.create("MemberResetPasswordPage");
        modal.present();
    }
}
