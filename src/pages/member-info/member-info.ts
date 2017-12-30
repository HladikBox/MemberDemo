import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, ModalController } from 'ionic-angular';
import { AppBase } from "../../app/app.base";
import { AppMember } from "../../app/app.member";
import { MemberApi } from "../../providers/member.api";

/**
 * Generated class for the MemberInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-member-info',
    templateUrl: 'member-info.html',
    providers: [MemberApi]
})
export class MemberInfoPage extends AppBase
{
    memberinfo = {};
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public memberApi: MemberApi)
    {
        super();
    }

    dismiss()
    {
        this.viewCtrl.dismiss();
    }
    ionViewDidLoad()
    {
        this.memberApi.info({}).then(data =>
        {
            console.log(data);

            this.memberinfo = data;
            this.memberinfo.photo = AppMember.getPhotoByPath(this.memberinfo.photo);
        });
        console.log('ionViewDidLoad MemberInfoPage');
    }

}
