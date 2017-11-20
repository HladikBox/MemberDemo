
export class AppLang {
    
    public static Lang: Object = {};

    public static init() {
        //home page start
        AppLang.Lang["HomeTitle"] = "主页";
        AppLang.Lang["Home"] = "首页";
        AppLang.Lang["About"] = "关于AppLink";
        AppLang.Lang["Me"] = "我的";
        AppLang.Lang["clicktologin"] = "点击登录";
        AppLang.Lang["clicktologin_tips"] = "获取你的专属定制";
        AppLang.Lang["login"] = "登录"; 
        AppLang.Lang["passwordlogin"] = "密码登录";
        AppLang.Lang["smslogin"] = "短信登录"; 
        AppLang.Lang["password"] = "密码";
        AppLang.Lang["mobile"] = "手机号码";
        AppLang.Lang["verifycode"] = "验证码"; 
        AppLang.Lang["getverifycode"] = "获取验证码"; 
        AppLang.Lang["reminder"] = "重新发送";
        AppLang.Lang["mobilenotregister"] = "手机号码尚未注册"; 
        AppLang.Lang["retryafterminute"] = "获取太快，请在一分钟后重试"; 
        AppLang.Lang["loginfail"] = "登录失败，请检查登录信息后重试"; 
        AppLang.Lang["verifycodeinvalid"] = "验证码不正确"; 
        AppLang.Lang["membernoname"] = "匿名用户"; 
        AppLang.Lang["account"] = "账户"; 
        AppLang.Lang["superexpiredreminderdays"] = "特权剩余天数"; 
        AppLang.Lang["supermember"] = "特权会员";
        AppLang.Lang["registernow"] = "立即注册"; 
        AppLang.Lang["loginissue"] = "登录遇到问题"; 
        AppLang.Lang["loginforagree"] = "登录即表示你同意"; 
        AppLang.Lang["useragreement"] = "《用户使用协议》";
        AppLang.Lang["registeraccount"] = "注册账户";
        AppLang.Lang["confirmmobile"] = "请确保你使用常用的手机号码进行注册";
    }
    
}