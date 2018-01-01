import { Injectable } from '@angular/core';
import { SQLite } from '@ionic-native/sqlite';
import { AbstractDao } from "./dao.abstract";
import { Http } from '@angular/http';
import { MemberrechargeApi } from "./memberrecharge.api";

@Injectable()
export class MemberrechargeDao extends AbstractDao {

    constructor(public http: Http, public sqlite: SQLite) {
        super(sqlite, http);
    }

	
				
		public tableName() {
			return "memberrecharge";
		}

		public tableColumns(): Array<string> {
        var columns = new Array();
			columns["subject"] = "varchar";//标题
			columns["member_id"] = "int";//会员
			columns["member_id_name"] = "varchar";//会员
			columns["pay_channel"] = "varchar";//支付渠道
			columns["pay_type"] = "varchar";//支付方式
			columns["amount"] = "int";//充值金额
			columns["rechargetime"] = "varchar";//充值时间
			columns["orderno"] = "varchar";//支付订单
			columns["trade_no"] = "varchar";//交易订单编码
			columns["transaction_id"] = "varchar";//交易id
			columns["requesttime"] = "varchar";//申请时间
			columns["status"] = "varchar";//状态
			columns["status_name"] = "varchar";//状态
			columns["info"] = "varchar";//内容记录
			return columns;
		}
				
			   
	//
	public list(search_condition, showLoadingModel: boolean = true) {
        let api: MemberrechargeApi = new MemberrechargeApi(this.http);
        return api.list(search_condition, showLoadingModel).then(data => {
            this.batchUpdate(data);
            return data;
        }).catch(e => {
            return this.simpleQuery(search_condition);
        });
    }
	
	
	//
    public sync(search_condition = null, showLoadingModel: boolean = true) {
        let api: MemberrechargeApi = new MemberrechargeApi(this.http);
        return this.getLastestUpdatedTime().then((updatedate) => {
            if (updatedate == undefined) {
                return this.list(search_condition, showLoadingModel);
            }
            return api.list({ "lastupdatecalltime": updatedate }, showLoadingModel).then(data => {
                alert(JSON.stringify(data));
                return this.batchUpdate(data).then(() => {
                    this.updateLatestUpdatedTime();
                    if (search_condition == null) {
                        return null;
                    }
                    return this.simpleQuery(search_condition);
                });
            }).catch(() => {
                if (search_condition == null) {
                    return null;
                }
                this.simpleQuery(search_condition);
            });
        }).catch(e => {
            if (search_condition == null) {
                return null;
            }
            return this.simpleQuery(search_condition);
        });
    }



}