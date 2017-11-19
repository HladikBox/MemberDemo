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
    info = { account: 0, super_expired_days: 0, rank: {name:""}};
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
            this.memberApi.info({}, false).then(
                (data) =>
                {
                    this.Member.name = data.name;
                    this.Member.photo = data.photo;
                    this.Member.store();
                    this.info = data;

                });
        }
    }
}
