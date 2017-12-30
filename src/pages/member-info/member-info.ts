import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, ModalController,ActionSheetController } from 'ionic-angular';
import { AppBase } from "../../app/app.base";
import { AppMember } from "../../app/app.member";
import { MemberApi } from "../../providers/member.api";
import { MemberphotostoreApi } from "../../providers/memberphotostore.api";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

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
    providers: [MemberApi, MemberphotostoreApi, Camera, FileTransfer]
})
export class MemberInfoPage extends AppBase
{
    memberinfo = { name: "", photo: "", sexual: "", birth: null ,signature:""};
    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController , public viewCtrl: ViewController, public actionSheetCtrl: ActionSheetController,
        public memberApi: MemberApi, public memberphotostoreApi:MemberphotostoreApi,
        private camera: Camera, private transfer: FileTransfer,)
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
            if (data.sexual == null) {
                data.sexual = "";
            }
            this.memberinfo = data;
            
        });
        console.log('ionViewDidLoad MemberInfoPage');
    }
    getPhoto() {
        return AppMember.getPhotoByPath(this.memberinfo.photo);
    }
    gotoLogout() {
        this.Member.logout();
        this.dismiss();
    }
    birthChange(e) {
        console.log(this.memberinfo.birth);
        this.memberApi.infoupdate({ birth: this.memberinfo.birth },false);
    }
    sexualChange(e) {
        console.log(this.memberinfo.sexual);
        this.memberApi.infoupdate({ sexual: this.memberinfo.sexual }, false);
    }
    nameInput() {
        var that = this;
        var modal = this.textInput(this.modalCtrl, this.Lang["nickname"], this.Lang["pleasetype"] + this.Lang["nickname"], this.Member.name
            , this.Lang["nickname"] + this.Lang["cannotnull"]);

        modal.onDidDismiss(data => {
            if (data != undefined) {
                this.nameChange(data.value);
            }
        });
    }
    nameChange(val) {
        console.log(this.memberinfo.name);
        this.memberinfo.name = val;
        this.memberApi.infoupdate({ name: val }, false).then(data => {
            if (data.code == 0) {
                this.Member.name = val;
                this.Member.store();
            }
        });
    }
    signatureInput() {
        var that = this;
        var modal = this.textareaInput(this.modalCtrl, this.Lang["signature"], this.Lang["pleasetype"] + this.Lang["signature"], this.memberinfo.signature);

        modal.onDidDismiss(data => {
            if (data != undefined) {
                this.signatureChange(data.value);
            }
        });
    }
    signatureChange(val) {
        console.log(this.memberinfo.signature);
        this.memberinfo.signature = val;
        this.memberApi.infoupdate({ signature: val }, false);
    }

    selectPhoto() {
        let actionSheet = this.actionSheetCtrl.create({
            title: this.Lang["photoselect"],
            buttons: [
                {
                    text: this.Lang["takephoto"],
                    handler: () => {
                        this.camera.getPicture({
                            sourceType: 0,
                            allowEdit:true
                        }).then((imagepath) => {
                            this.uploadFile(this.transfer, imagepath, "member").then(photo => {
                                this.memberApi.infoupdate({ photo: photo }, false).then(data => {
                                    if (data.code == "0") {
                                        this.memberinfo.photo = photo;
                                        this.Member.photo = photo;
                                        this.Member.store();
                                    }
                                });
                            });
                        }, (err) => {
                            // Handle error
                        });
                    }
                }, {
                    text: this.Lang["takefromalbum"],
                    handler: () => {
                        this.camera.getPicture({
                            sourceType: 1,
                            allowEdit: true
                        }).then((imagepath) => {
                            this.uploadFile(this.transfer, imagepath, "member").then(photo => {
                                this.memberApi.infoupdate({ photo: photo }, false).then(data => {
                                    if (data.code == "0") {
                                        this.memberinfo.photo = photo;
                                        this.Member.photo = photo;
                                        this.Member.store();
                                    }
                                });
                            });
                        }, (err) => {
                            // Handle error
                        });
                    }
                }, {
                    text: this.Lang["takerandom"],
                    handler: () => {
                        this.memberphotostoreApi.random({}).then(data => {
                            var photo = data.photo;
                            this.memberinfo.photo = photo;
                            this.Member.photo = photo;
                            this.Member.store();

                        });
                    }
                }, {
                    text: this.Lang["cancel"],
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }
}
