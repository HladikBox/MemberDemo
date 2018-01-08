import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, ModalController, ActionSheetController, AlertController } from 'ionic-angular';
import { AppBase } from "../../app/app.base";
import { AppMember } from "../../app/app.member";
import { MemberApi } from "../../providers/member.api";
import { WeixinappApi } from "../../providers/weixinapp.api";

/**
 * Generated class for the MemberRechargePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-member-recharge',
    templateUrl: 'member-recharge.html',
    providers: [MemberApi,WeixinappApi]
})
export class MemberRechargePage extends AppBase {
    amount = 0.00;
    rechargetypelist = [
        { logo:"assets/imgs/wechat.png",name:"微信","type":"wechatapp"},
        { logo: "assets/imgs/alipay.svg", name: "支付宝", "type": "alipayapp" },
        { logo: "assets/imgs/testpay.svg", name: "支付测试", "type": "testpay" }
    ];
    rechargetype = "testpay";
    constructor(public navCtrl: NavController, public navParams: NavParams,
        public viewCtrl: ViewController, public modalCtrl: ModalController, public toastCtrl: ToastController, public alertCtrl: AlertController,
        public memberApi: MemberApi, public weixinappApi: WeixinappApi) {
        super();
        if (navParams.get("dollar") != undefined) {
            this.countAmount(Number(navParams.get("dollar")));
        }
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    dismissSuccess(){
        this.viewCtrl.dismiss({paied:true});
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad MemberRechargePage');
    }
    showCustomAmount() {
        let prompt = this.alertCtrl.create({
            message: this.Lang["customtips"],
            inputs: [
                {
                    name: "dollar",
                    placeholder: this.Lang["pleasetypedollaramount"],
                    type:"number"
                },
            ],
            buttons: [
                {
                    text: this.Lang["cancel"],
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: this.Lang["ok"],
                    handler: data => {
                        console.log(data.dollar);
                        this.countAmount(parseInt( data.dollar));
                    }
                }
            ]
        });
        prompt.present();
    }
    countAmount(vrDollar = 0) {
        if (vrDollar < 0) {
            vrDollar = 0;
        }
        this.amount = vrDollar;
    }
    payment() {
        if (this.amount == 0) {
            this.warningAlert(this.alertCtrl, this.Lang["selectbuyamount"]);
            return;
        }
        this.memberApi.rechargerequest({ amount: this.amount }).then((data) => {
            var orderinfo = data.return;
            switch (this.rechargetype) {
                case "wechatpay":
                    this.weixinappApi.payment({
                        subject: orderinfo.subject,
                        amount: orderinfo.amount,
                        orderno: orderinfo.orderno,
                        notifyapi: "api/member/weixinrecharge",
                    }).then(paymentparams => {

                    });
                    break;
                case "alipayapp":
                    this.toast(this.toastCtrl, "coming soon!");
                    break;
                case "testpay":
                    this.memberApi.testpayrecharge({
                        orderno: orderinfo.orderno
                    }).then((data) => {
                        if (data.code == 0) {
                            this.toast(this.toastCtrl, this.Lang["paymenysuccesstips"]);
                            this.Member.updateInfo();
                            this.dismissSuccess();
                        } else {
                            this.toast(this.toastCtrl, "it cannot use in release version");
                        }
                    });
                    break;
            }
        });
    }

}
