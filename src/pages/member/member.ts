import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { AppBase } from "../../app/app.base";
import { MemberApi } from "../../providers/member.api";

@Component({
    selector: 'page-member',
    templateUrl: 'member.html',
    providers: [MemberApi]
})
export class MemberPage extends AppBase
{
    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public memberApi: MemberApi)
    {
        super();
    }

    gotoLogin()
    {
        var modal = this.modalCtrl.create("LoginPage");
        modal.present();
        //this.Member.logout();
    }
    ionViewDidEnter()
    {
        if (this.Member.isLogined())
        {
            this.Member.updateInfo();
        }
    }
    gotoMemberInfo() {
        if (this.checkLogin(this.modalCtrl) == false) {
            return;
        }
        //this.Member.logout();
        var modal = this.modalCtrl.create("MemberInfoPage");
        modal.present();
    }
    gotoMemberSetting() {
        if (this.checkLogin(this.modalCtrl) == false) {
            return;
        }
        var modal = this.modalCtrl.create("MemberSettingPage");
        modal.present();
    }
    gotoWallet() {
        if (this.checkLogin(this.modalCtrl) == false) {
            return;
        }
        var modal = this.modalCtrl.create("MemberWalletPage");
        modal.present();
    } 
    gotoMemberSuper() {
        if (this.checkLogin(this.modalCtrl) == false) {
            return;
        }
        var modal = this.modalCtrl.create("MemberSuperPage");
        modal.present();
    } 
}
