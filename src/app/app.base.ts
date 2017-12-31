import { ApiConfig } from "./api.config";
import { AppLang } from "./app.lang";
import { ToastController, ModalController, AlertController } from 'ionic-angular';
import { AppMember } from './app.member';
import { AppUtil } from "./app.util";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

export class AppBase {
    public uploadpath: string = ApiConfig.getUploadPath();
    public Lang = AppLang.Lang;
    public Member: AppMember = AppMember.GetInstance();

    public constructor() {
    }
    textInput(modalCtrl: ModalController, title: string, placeholder: string,value:string,  cannotnulltips: string = "", maxlength = "20") {
        var modal = modalCtrl.create("InputPage",
            {
                "type": "text",
                title: title,
                placeholder: placeholder,
                value: value,
                cannotnulltips: cannotnulltips,
                maxlength: maxlength
            });
        modal.present();
        return modal;
    }
    textareaInput(modalCtrl: ModalController, title: string, placeholder: string, value: string, cannotnulltips: string = "", maxlength = "140") {
        var modal = modalCtrl.create("InputPage",
            {
                "type": "textarea",
                title: title,
                placeholder: placeholder,
                value: value,
                cannotnulltips: cannotnulltips,
                maxlength: maxlength
            });
        modal.present();
        return modal;
    }
    toast(toastCtrl: ToastController, msg: string) {
        var second = 3000 * (msg.length / 4);
        if (second <3000) {
            second = 3000;
        }
        let toast = toastCtrl.create({
            message: msg,
            duration: second 
        });
        toast.present();
    }
    infoAlert(alertCtrl: AlertController, msg: string) {
        let alert = alertCtrl.create({
            title: this.Lang["info"],
            message: msg,
        });
        alert.present();
    }
    warningAlert(alertCtrl: AlertController, msg: string) {
        let alert = alertCtrl.create({
            title: this.Lang["warning"],
            message: msg,
        });
        alert.present();
    }
    dangerAlert(alertCtrl: AlertController, msg: string) {
        let alert = alertCtrl.create({
            title: this.Lang["danger"],
            message: msg,
        });
        alert.present();
    }
    showGeneralText(modalCtrl: ModalController, keycode: string) {
        var modal = modalCtrl.create("GeneralTextPage", { keycode: keycode });
        modal.present();
    }
    htmlDecode(content) {
        return AppUtil.HtmlDecode(content);
    }
    uploadFile(transfer: FileTransfer, filepath: string, module: string) {
        let options: FileUploadOptions = {
            fileKey: 'img'
        }


        var fileTransfer: FileTransferObject = transfer.create();
        return fileTransfer.upload(filepath, ApiConfig.getFileUploadAPI() + "?field=img&module=" + module, options)
            .then((data) => {
                // success
                return data.toString().split("|~~|")[1];
            }, (err) => {
                // error
            })
    }

}