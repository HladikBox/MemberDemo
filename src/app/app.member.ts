import { Component } from '@angular/core';
import {AppUtil} from './app.util';
import { ApiConfig } from './api.config';
import { AppLang } from './app.lang';

export class AppMember {
    private constructor() {

    }

    private static instance: AppMember;
    public id:string = "";
    public name: string = "";
    public photo: string = "";
    public token: string = "";
    public oauthtype: string = "";
    public oauthunionid: string = "";
    public info = { sexual: "", birth: null, signature: "",
        account: 0, super_expired_days: 0, rank: { name: "" }};

    public static GetInstance() {
        if (AppMember.instance == null) {
            AppMember.instance = new AppMember();
        }
        return AppMember.instance;
    }

    public getPhoto() {
        if (this.photo == null || this.photo.trim() == "") {
            return "assets/imgs/bg-member-default.jpg";;
        }
        return this.photo.indexOf("http") == 0 ? this.photo : ApiConfig.getUploadPath() + "member/" + this.photo;
    }
    public getName()
    {
        if (this.name == null || this.name.trim() == "")
        {
            return AppLang.Lang["membernoname"];
        }
        return this.name;
    }

    public setLogin(id, name, photo,  token) {
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.token = token;
        ApiConfig.SetToken(token, id);

        this.store();
    }


    public store() {
        var json = {
            id: this.id,
            name: this.name,
            photo: this.photo,
            token: this.token
        };
        var jsonstr = JSON.stringify(json);
        AppUtil.Storage.set("memberlogin", jsonstr);
    }

    public restore() {
        AppUtil.Storage.get("memberlogin").then(jsonstr =>
        {
            if (jsonstr==null||jsonstr == "") {
                return;
            }
            var jsonstr = JSON.parse(jsonstr);
            this.id = jsonstr.id;
            this.name = jsonstr.name;
            this.photo = jsonstr.photo;
            this.token = jsonstr.token;

            ApiConfig.SetToken(this.token, this.id);
        });
    }

    public logout() {

        AppUtil.Storage.remove("memberlogin");
        this.id = "";
        this.name = "";
        this.photo = "";
        this.token = "";

    }

    public isLogined() {
        return this.id.trim() != "";
    }

    public static SetLatestLoginMobile(mobile)
    {
        AppUtil.Storage.set("latestloginmobile", mobile);
    }
    public static GetLatestLoginMobile()
    {
        return AppUtil.Storage.get("latestloginmobile");
    }
}