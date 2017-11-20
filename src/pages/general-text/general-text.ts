import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { GeneraltextApi } from "../../providers/generaltext.api";
import { AppBase } from "../../app/app.base";

/**
 * Generated class for the GeneralTextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-general-text',
    templateUrl: 'general-text.html',
    providers: [GeneraltextApi]
})
export class GeneralTextPage extends AppBase {

    keycode = "";
    title = "";
    content = "";
    constructor(public navCtrl: NavController, public navParams: NavParams, public generaltextApi: GeneraltextApi,
        public viewCtrl: ViewController) {
        super();
        this.keycode = navParams.get("keycode");
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad GeneralTextPage');

        this.generaltextApi.view({ keycode: this.keycode }).then(data => {
            this.title = data.name;
            this.content =this.htmlDecode(data.content);
        });
    }

}
