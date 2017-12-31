import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, ModalController, ActionSheetController, AlertController } from 'ionic-angular';
import { AppBase } from "../../app/app.base";
import { AppMember } from "../../app/app.member";

/**
 * Generated class for the ZCopyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-z-copy',
    templateUrl: 'z-copy.html',
})
export class ZCopyPage extends AppBase {

    constructor(public navCtrl: NavController, public navParams: NavParams,
        public viewCtrl: ViewController, public modalCtrl: ModalController, public toastCtrl: ToastController, public alertCtrl: AlertController) {
        super();
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ZCopyPage');
    }

}
