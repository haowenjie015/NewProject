
import { _decorator, Component, VideoPlayer } from 'cc';
import Cookies from "js-cookie"
const { ccclass, property } = _decorator;

@ccclass('Playerscript')
export class Playerscript extends Component {

    @property(VideoPlayer)
    videoplayer:VideoPlayer = null;

    VideoID:number = 0;

    parseURL(url:string) { 
            var a = document.createElement('a'); 
            a.href = url; 
            return { 
                source: url, 
                protocol: a.protocol.replace(':',''), 
                host: a.hostname, 
                port: a.port, 
                query: a.search, 
                params: (function(){ 
                    var ret = {}, 
                    seg = a.search.replace(/^\?/,'').split('&'), 
                    len = seg.length, i = 0, s; 
                    for (;i<len;i++) { 
                        if (!seg[i]) { continue; } 
                        s = seg[i].split('='); 
                        ret[s[0]] = s[1]; 
                    } 
                    return ret; 
                })(), 
                file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1], 
                hash: a.hash.replace('#',''), 
                path: a.pathname.replace(/^([^\/])/,'/$1'), 
                relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1], 
                segments: a.pathname.replace(/^\//,'').split('/') 
            }; 
       } 
    onLoad(){
        // 首先判断cookie中是否存了用户名
        let ifvisited = Cookies.get("userNameofNewPro");
        if(ifvisited){
            // 存了用户名
            // 首先获取当前播放的视频id编号
            var myURL = this.parseURL(window.location.href);
            this.VideoID = myURL.params.VideoID;
            // alert(this.VideoID);
        }else{
            // 未存用户名
            window.location.href = "http://www.huanggaole.com/NewProject/";
        }
    }

    start () {
        if(this.VideoID == 1||0){
            this.videoplayer.remoteURL = "https://bucketofhuanggaole.oss-cn-beijing.aliyuncs.com/01%E4%B8%80%E5%8F%AA%E8%BF%81%E5%BE%99%E7%9A%84%E5%AE%B6%E7%8C%AB.mp4";
        }
        if(this.VideoID == 2){
            this.videoplayer.remoteURL = "https://bucketofhuanggaole.oss-cn-beijing.aliyuncs.com/02%E6%88%91%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E6%83%B3%E4%BD%8F%E5%9C%A8%E5%90%8E%E5%8E%82%E6%9D%91.mp4";
        }
        if(this.VideoID == 3){
            this.videoplayer.remoteURL = "https://bucketofhuanggaole.oss-cn-beijing.aliyuncs.com/03%E5%9F%8E%E5%B8%82%E8%BE%B9%E7%BC%98%E4%B8%8E%E9%83%BD%E5%B8%82%E9%A3%9E%E5%9C%B0.mp4";
        }
        if(this.VideoID == 4){
            this.videoplayer.remoteURL = "https://bucketofhuanggaole.oss-cn-beijing.aliyuncs.com/04%E6%88%91%E5%B0%B1%E8%BF%99%E6%A0%B7%E5%8F%98%E6%88%90%E4%BA%86%E2%80%9C%E6%B3%A1%E6%B3%A1%E4%BA%BA%E2%80%9D.mp4";
        }
        if(this.VideoID == 5){
            this.videoplayer.remoteURL = "https://bucketofhuanggaole.oss-cn-beijing.aliyuncs.com/05%E7%A6%BB%E4%B8%8D%E5%BC%80%EF%BC%8C%E9%80%83%E4%B8%8D%E6%8E%89.mp4";
        }
        if(this.VideoID == 6){
            this.videoplayer.remoteURL = "https://bucketofhuanggaole.oss-cn-beijing.aliyuncs.com/06%E7%8E%8B%E5%9B%BD%EF%BC%8C%E4%B9%9F%E6%98%AF%E6%9E%B7%E9%94%81.mp4";
        }
        if(this.VideoID == 7){
            this.videoplayer.remoteURL = "https://bucketofhuanggaole.oss-cn-beijing.aliyuncs.com/07%E5%8A%A8%E7%94%BB%E5%AF%93%E8%A8%80.mp4";
        }
        this.videoplayer.node.on("ready-to-play", this.videoplayer.play, this);
    }

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
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
