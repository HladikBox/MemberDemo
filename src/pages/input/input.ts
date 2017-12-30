import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, ModalController, AlertController } from 'ionic-angular';
import { AppBase } from "../../app/app.base";

/**
 * Generated class for the InputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-input',
  templateUrl: 'input.html',
})
export class InputPage extends AppBase{
    title: string = "";
    type: string = "text";
    placeholder: string = "";
    val = "";
    maxlength = "";
    cannotnulltips = "";
    constructor(public navCtrl: NavController, public navParams: NavParams,
        public viewCtrl: ViewController, public alertCtrl: AlertController) {
        super();
        this.title = navParams.get("title");
        this.type = navParams.get("type");
        this.val = navParams.get("value");
        this.placeholder = navParams.get("placeholder");
        if (this.type == "text") {
            this.maxlength = "20";
        } else if (this.type == "textarea") {
            this.maxlength = "140";
        }
        if (navParams.get("maxlength") != undefined) {
            this.maxlength = navParams.get("maxlength");
        }
        if (navParams.get("cannotnulltips") != undefined) {
            this.cannotnulltips = navParams.get("cannotnulltips");
        }
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }

    ok() {
        if (this.cannotnulltips != "" && this.val.trim() == "") {
            this.warningAlert(this.alertCtrl, this.cannotnulltips);
            return;
        }
        this.viewCtrl.dismiss({ value: this.val });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputPage');
  }

}
