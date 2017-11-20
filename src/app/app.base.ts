import { ApiConfig } from "./api.config";
import { AppLang } from "./app.lang";
import { ToastController, ModalController } from 'ionic-angular';
import { AppMember } from './app.member';
import { AppUtil } from "./app.util";

export class AppBase {
    public uploadpath: string = ApiConfig.getUploadPath();
    public Lang = AppLang.Lang;
    public Member: AppMember = AppMember.GetInstance();

    public constructor() {
    }

    toast(toastCtrl: ToastController,msg:string) {
        let toast = toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    }
    showGeneralText(modalCtrl: ModalController, keycode: string) {
        var modal = modalCtrl.create("GeneralTextPage", { keycode: keycode });
        modal.present();
    }
    htmlDecode(content) {
        return AppUtil.HtmlDecode(content);
    }

}