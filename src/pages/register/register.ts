import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AppBase } from "../../app/app.base";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage extends AppBase {
    info = [];
    step = 1;
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
        super();
        this.info[1] = { title: this.Lang["registeraccount"], description: this.Lang["confirmmobile"] };
    }

    dismiss() {
        this.step--;
        if (this.step <= 0) {
            this.viewCtrl.dismiss();
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterPage');
    }

}
