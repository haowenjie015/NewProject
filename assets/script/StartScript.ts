
import axios from '../../node_modules/axios/dist/axios.min.js';
import { _decorator, Component, Node, CCObject, EditBox, Button, Label, color, Color } from 'cc';

const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = StartScript
 * DateTime = Thu Sep 23 2021 23:16:02 GMT+0800 (GMT+08:00)
 * Author = haowenjie
 * FileBasename = StartScript.ts
 * FileBasenameNoExtension = StartScript
 * URL = db://assets/script/StartScript.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('StartScript')
export class StartScript extends Component {
    // [1]
    // dummy = '';

    // [2]
    @property(EditBox)
    editbox:EditBox = null;
    @property(Button)
    startbtn:Button = null;
    @property(Label)
    label:Label = null;

    onLoad () {
      //判断是否第一次进入
     // var cookies = document.cookie; //获取cookie值
      var newVisitor = isNewVisitor();
   

     if(newVisitor === true){
     // 动画弹出消息框
         alert('您是新用户！');
  
         // 标记：已经向该访客弹出过消息。30天之内不要再弹
        setCookie("gznotes-visited","true", 5);
        }else{
          alert('您已登录！');
        }
      

     function isNewVisitor() {
           // 从cookie读取“已经向访客提示过消息”的标志位
            var flg = getCookie("gznotes-visited");
              if (flg === "") {
              return true;
           } else {
               return false;
            }
          }
// 写字段到cookie
     function setCookie(cname, cvalue, exdays) {
         var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
       var expires = "expires="+d.toUTCString();
          document.cookie = cname + "=" + cvalue + "; " + expires +";path=/";
        } 
          // 读cookie
          function getCookie(cname) {
                   var name = cname + "=";
                    var ca = document.cookie.split(';');
                    for(var i=0; i<ca.length; i++) {
                       var c = ca[i];
                       while (c.charAt(0)==' ') c = c.substring(1);
                       if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
                     }
                     return "";
                  }
    }

    start () {
        // [3]
        this.startbtn.node.on('click',this.onStart,this);
    

    }

    async onStart(){
        var name=this.editbox.string
       
        console.log(name);
        axios.post('https://qcgovq.fn.thelarkcloud.com/insertUser',{name:name})
        .then((res)=>{
          console.log(res.data)
          if(res.data.result!=null){
           //alert('用户名已存在')
           
    
          this.label.string="用户名已存在，请重新输入"
          this.label.color=new Color(255,0,0,255)
          this.editbox.string=''
          }else{
              //注册成功，跳转页面
          }
        }).catch((err)=>{
          console.error(err)
        })
        
        
      }
        // try {
          // 发出一个 POST 请求，并设置请求体
          // 请注意将示例中的 URL 地址和参数更换为你的真实请求地址和参数
          //const result = await axios.post('https://qcgovq.fn.thelarkcloud.com/insertUser', {
          //  params: name,
           
          //});
          // return result.data;
        // } catch (error) {
        //  return {error: error.message,};
        // }
       
    

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
