import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, ModalController,ActionSheetController } from 'ionic-angular';
import { AppBase } from "../../app/app.base";
import { AppMember } from "../../app/app.member";
import { MemberApi } from "../../providers/member.api";
import { MemberphotostoreApi } from "../../providers/memberphotostore.api";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

/**A
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
        this.Member.updateInfo();
        console.log('ionViewDidLoad MemberInfoPage');
    }
    gotoLogout() {
        this.Member.logout();
        this.viewCtrl.dismiss({ logout: true });
    }
    birthChange(e) {
        console.log(this.Member.info.birth);
        this.memberApi.infoupdate({ birth: this.Member.info.birth },false);
    }
    sexualChange(e) {
        console.log(this.Member.info.sexual);
        this.memberApi.infoupdate({ sexual: this.Member.info.sexual }, false);
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
        this.memberApi.infoupdate({ name: val }, false).then(data => {
            if (data.code == 0) {
                this.Member.name = val;
                this.Member.store();
            }
        });
    }
    signatureInput() {
        var that = this;
        var modal = this.textareaInput(this.modalCtrl, this.Lang["signature"], this.Lang["pleasetype"] + this.Lang["signature"], this.Member.info.signature);

        modal.onDidDismiss(data => {
            if (data != undefined) {
                this.signatureChange(data.value);
            }
        });
    }
    signatureChange(val) {
        console.log(this.Member.info.signature);
        this.Member.info.signature = val;
        this.memberApi.infoupdate({ signature: val }, false);
    }

    selectPhoto() {
        let actionSheet = this.actionSheetCtrl.create({
            title: this.Lang["photoselect"],
            buttons: [
                {
                    text: this.Lang["takephoto"],
                    handler: () => {
                        let options: CameraOptions = {
                            quality: 75,
                            targetWidth: 200,
                            targetHeight: 200,
                            allowEdit: true,
                            destinationType: this.camera.DestinationType.FILE_URI,
                            sourceType: this.camera.PictureSourceType.CAMERA,
                            encodingType: this.camera.EncodingType.JPEG
                        };
                        this.camera.getPicture(options).then((imagepath) => {
                            this.uploadFile(this.transfer, imagepath, "member").then(photo => {
                                this.memberApi.infoupdate({ photo: photo }, false).then(data => {
                                    if (data.code == "0") {
                                        this.Member.photo = String(photo);
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
                        let options: CameraOptions = {
                            quality: 75,
                            targetWidth: 200,
                            targetHeight: 200,
                            allowEdit: true,
                            destinationType: this.camera.DestinationType.FILE_URI,
                            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        
                        this.camera.getPicture(options).then((imagepath) => {
                            this.uploadFile(this.transfer, imagepath, "member").then(photo => {
                                this.memberApi.infoupdate({ photo: photo }, false).then(data => {
                                    if (data.code == "0") {
                                        this.Member.photo = String(photo);
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
