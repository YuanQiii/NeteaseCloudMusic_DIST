(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-174c36a1"],{"0819":function(t,i,e){"use strict";var s=e("087a"),a=e.n(s);a.a},"087a":function(t,i,e){},1135:function(t,i,e){"use strict";var s=e("e493"),a=e.n(s);a.a},1774:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD+klEQVRYR81XTYgcRRT+Xk3vuAgmigYVNFEPwWhAFEMioigGZD1sV422imDYi/gD0YuGgGI2qARMLioYPIV4kMR2p3omEEECikGMGHZP0SiixuQSjcgoRly6+8kbq0PvTvd0724MFgwMXV+999WrV+99Rag5xsfHL/E8b2Oapo8AWE1EVwC43C3/lZnPAPhWKbU/juND3W73jzqmqQpkjFlDRJvTNH2UiC6rwss8M/+mlNrHzG9Za78etmYoAWPMqwA2A1g2z8gsgNPMfFq+E9GVAOTXnIf7HYCQeKmMRCkBY8ynAO7KLZxm5gPM/GGn0/miyKDv++uJaIyINIBbcpjD1tq7i9YUEjDG/AJAzljGKQBveJ73ZhiGsvPKMTY2tmx0dPR1AE/mwGestSvmLx4gYIz5AcB1Dng4SZInut3uN5VeCwC+79+vlNoD4Go3/aO19vo8dA4BY8z7AAKXSNujKJoc5tj3/ZuazeZsGIbfDcNprbcRUWYrtNY+nOHPEXAJ96KbOG6tXVPlXCl1TDBpmt7c6XS+GoY3xuwFsMlhXssSs09ArhqAI1m2K6XWTk1N9Y2XDa31PUT0sYvWvVEUfTIMHwTByjiOPwNwDQC5HRvkivYJtFqtt5n5aflPRC+32+1Xqs58oQTcRp8HsNP52d1ut5+hIAiWx3F8AsByZp4ZGRm5MwzDv/4LAkEQNOM4/hzAbQB6nuetolar9Tgzv+sc7rTWbqlyLvOLiYCLglzPF1wUNgmBD5j5wbpnmZFbLIH8OiKaIq31NBHdCmDWWntRnd0vJQIuCn9L2ZYjJ2PMTwCuBXDSWrvyAhE451MI/AngYmY+GkXRugtBQGv9JRHdDuDseSFQRpqZC6up1voIEa3PCCz5CIZE7Zi1du38eWOM9JbVcuyLTkJXwN5hZjFUOJh5RxRFHxUQ+BnAin4Saq33EZHILKnpG8p6fd3cqMIFQXBVHMcnAXjMvF/qgGHmtqsDk1EUba8yspR5Y8xWADtcIWqRiE2l1Amn96Y9z7ujrvBYKJGJiYnRXq83A+BG0Y1pmq4aaEZSJq21uxZqvA7eGPMUgN1u9/82I1eZ8u34VJIkGxergsqIiHhRSkk7vnSgHTsSooAzQVIqIuvstAiTK/kyPVeQZAvySpiZz1tCaq0niWib8zNnc0WiNK+IjyulHqpSR2VRcSpIxE0mxQaUcZkszyvjvkpqNBq76ggVIeOEx7MAnnMSTD4PKOJ+MpaxzytkVyNmiOgQMx8s03+u1z8A4D6nejLzc5Rw3uf/92mWS8z+45SZHxPdWPMW9IjovSU/TvPORLwmSTIOwE/T9Iai57lS6nsAnUaj0Q3DsFeH7D+YrBIOAsXPCQAAAABJRU5ErkJggg=="},"1aaa":function(t,i,e){"use strict";e.d(i,"a",(function(){return s}));e("99af");function s(t){var i=parseInt(t/1e3),e=parseInt(i/60),s=parseInt(i-60*e);return s>9&&e>9?"".concat(e,":").concat(s):s>9&&e<10?"0".concat(e,":").concat(s):s<10&&e<10?"0".concat(e,":0").concat(s):s<10&&e>9?"".concat(e,":0").concat(s):void 0}},"1bb5":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"all"},[s("div",{staticClass:"allitem"},[s("div",{staticClass:"toplistcat"},[s("div",{staticClass:"top1"},[t._v("云音乐特色榜")]),t._l(t.toplistCat.list.slice(0,4),(function(i,e){return s("div",{key:e,class:t.currentIndex==e?"active catitem":"catitem",on:{click:function(s){return t.changeList(e,i.id)}}},[s("div",{staticClass:"img"},[s("img",{attrs:{src:i.coverImgUrl,alt:""}})]),s("div",{staticClass:"title"},[s("div",[t._v(t._s(i.name))]),s("div",[t._v(t._s(i.updateFrequency))])])])})),s("div",{staticClass:"top1"},[t._v("全球媒体榜")]),t._l(t.toplistCat.list.slice(4),(function(i,e){return s("div",{key:e+4,class:t.currentIndex==e+4?"active catitem":"catitem",on:{click:function(s){return t.changeList(e+4,i.id)}}},[s("div",{staticClass:"img"},[s("img",{attrs:{src:i.coverImgUrl}})]),s("div",{staticClass:"title"},[s("div",[t._v(t._s(i.name))]),s("div",[t._v(t._s(i.updateFrequency))])])])}))],2),t.musicIsCompleteUpdate?s("div",{staticClass:"toplistDetail"},[s("div",{staticClass:"head"},[s("div",{staticClass:"left"},[s("img",{attrs:{src:t.toplistDetail.playlist.coverImgUrl,alt:""}})]),s("div",{staticClass:"info"},[s("div",{staticClass:"name"},[t._v(t._s(t.toplistDetail.playlist.name))]),s("div",{staticClass:"updateTime"},[s("img",{attrs:{src:e("1774")}}),s("span",[t._v("最近更新："+t._s(t.updateTimeFormat(t.toplistDetail.playlist.updateTime)))]),s("span",{staticClass:"uf"},[t._v("("+t._s(t.uf[t.currentIndex])+")")])]),s("music-list-operate",{attrs:{musicListInfo:t.toplistDetail.playlist}})],1)]),s("music-head",{staticClass:"musicheadtop",attrs:{headwidth:670,headPlayCount:!0}},[s("span",{attrs:{slot:"head"},slot:"head"},[t._v("歌曲列表")]),s("span",{attrs:{slot:"songsNumber"},slot:"songsNumber"},[t._v(t._s(t.toplistDetail.playlist.trackCount)+"首歌")]),s("span",{attrs:{slot:"playCount"},slot:"playCount"},[t._v(t._s(t.toplistDetail.playlist.playCount))])]),s("music-operate",{staticClass:"musicoperatetop",staticStyle:{width:"663px"}},[s("div",{staticStyle:{width:"58px"}}),s("div",{staticStyle:{width:"306px"}},[t._v("标题")]),s("div",{staticStyle:{width:"70px"}},[t._v("时长")]),s("div",{staticStyle:{width:"132px"}},[t._v("歌手")])]),s("top-list-songs",{attrs:{topListSongs:t.toplistDetail.playlist.tracks}}),s("div",{staticClass:"comment"},[s("comment",{attrs:{commentTotal:t.toplistComment.total,comments:t.toplistComment}}),s("offset-change",{attrs:{musicTotal:t.toplistComment.total,musicOffset:20}})],1)],1):t._e()])])},a=[],n=(e("99af"),e("d81d"),e("1bab")),c=e("fb92"),u=e("1aaa"),o=e("20cc"),r=e("612c"),l=e("d101"),d=e("96d2"),m=e("57ec"),A=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",t._l(t.topListSongs,(function(i,a){return s("div",{key:a,staticClass:"d2"},[s("span",{staticClass:"tablecount",style:a<3?"lineHeight: 70px":""},[t._v(t._s(a+1))]),a<3?s("img",{attrs:{src:i.al.picUrl},on:{click:function(e){return t.jumpPage("digitalsingle",i.id)}}}):t._e(),s("div",{style:a<3?"paddingTop: 15px":""},[i.id===t.musicAudioId?s("img",{staticStyle:{opacity:"1"},attrs:{src:e("1c14")},on:{click:function(e){return t.addMusic(i.id,a,!0)}}}):s("img",{attrs:{src:e("b056")},on:{click:function(e){return t.addMusic(i.id,a,!0)}}})]),s("div",{style:a<3?{width:"200px",paddingTop:"15px",marginRight:"30px"}:""},[s("span",{on:{mouseenter:function(i){return t.playtimeActive(a)},mouseleave:function(i){return t.playtimeNotActive(a)},click:function(e){return t.jumpPage("digitalsingle",i.id)}}},[t._v(" "+t._s(i.name)+" "),s("span",{staticStyle:{color:"#AEAEAE"},attrs:{hidden:!t.topListSongs[a].alia[0]}},[t._v("-("+t._s(t.topListSongs[a].alia[0])+")")])]),s("span",{staticClass:"dmv",attrs:{title:"播放mv",hidden:!t.topListSongs[a].mv},on:{click:function(i){return t.jumpPage("videodetail",t.topListSongs[a].mv)}}},[s("img",{staticClass:"mv",attrs:{src:e("5465")}})])]),s("div",{style:a<3?"paddingTop: 20px":"",on:{mouseenter:function(i){return t.playtimeActive(a)},mouseleave:function(i){return t.playtimeNotActive(a)}}},[s("span",{attrs:{hidden:t.currentIndex==a}},[t._v(t._s(t.playFormat(i.dt)))]),s("div",{style:t.currentIndex==a?"opacity:0.6":"opacity:0",attrs:{id:"playtime",hidden:t.currentIndex==a}},[s("operate",{staticClass:"operate",attrs:{sendShow:t.sendShow,operateMusicInfo:[i.id,a,!1]}})],1)]),s("div",{style:a<3?"paddingTop: 20px":""},[s("span",{attrs:{title:i.ar[0].name},on:{click:function(e){return t.jumpPage("singerdetail",i.ar[0].id)}}},[t._v(t._s(i.ar[0].name))])])])})),0)},p=[],g=(e("45fc"),e("d3b7"),e("3ca3"),e("ddb0"),e("901c")),f={name:"TopListSongs",components:{Operate:g["a"]},props:{topListSongs:{type:Array,default:function(){return[]}}},computed:{musicAudioId:function(){return this.$store.state.musicAudioId},musicAudioIdList:function(){return this.$store.state.musicAudioIdList},musicAudioList:function(){return this.$store.state.musicAudioList},musicAudioAddAllFlag:function(){return this.$store.state.musicAudioAddAllFlag},musicAudioPlayStatus:function(){return this.$store.state.musicAudioPlayStatus}},data:function(){return{checkResult:null,currentIndex:null,value:0,sendShow:[!0,!0,!0,!0,!1]}},watch:{musicAudioAddAllFlag:function(t,i){var e=this;!0===t&&(this.playListInfo.map((function(t,i){e.addMusic(t.id,0,!1)})),this.musicAudioPlayStatus&&setTimeout((function(){e.addMusic(e.playListInfo[0].id,0,!0)}),500),this.$store.commit("changeValue",{type:"musicAudioAddAllFlag",value:!1}))}},created:function(){},methods:{checkMusic:function(t){var i=this;return Object(n["a"])({url:"/check/music?id="+t}).then((function(t){i.checkResult=t}))},addMusic:function(t,i,e){var s=this;this.currentIndex=i;var a=this.musicAudioList.some((function(i){if(i.songs[0].id===t)return t=i.songs[0].id,!0})),c=Object(n["a"])({url:"/song/url?id=".concat(t)}).then((function(t){(0===s.musicAudioIdList.length||e)&&s.$store.commit("changeValue",{type:"musicAudioUrl",value:t.data[0].url}),s.$store.commit("addValue",{type:"musicAudioUrlList",value:t.data[0].url})})),u=Object(n["a"])({url:"/song/detail?ids=".concat(t)}).then((function(t){(0===s.musicAudioIdList.length||e)&&s.$store.commit("changeValue",{type:"musicAudioDetail",value:t}),a||s.$store.commit("addValue",[{type:"musicAudioList",value:t},{type:"musicAudioDetailList",value:t}])})),o=Object(n["a"])({url:"/lyric?id=".concat(t)}).then((function(t){(0===s.musicAudioIdList.length||e)&&s.$store.commit("changeValue",{type:"musicAudioLyric",value:t}),a||s.$store.commit("addValue",{type:"musicAudioLyricList",value:t})}));Promise.all([c,u,o]).then((function(i){(0===s.musicAudioIdList.length||e)&&s.$store.commit("changeValue",[{type:"musicAudioId",value:t}]),s.$store.commit("addValue",{type:"musicAudioIdList",value:t})}))},jumpPage:function(t,i){this.$router.push({name:t,params:{id:i}})},createTime:function(t){return Object(c["a"])(t)},countFormat:function(t){return Object(o["a"])(t)},playFormat:function(t){return Object(u["a"])(t)},playtimeActive:function(t){this.currentIndex=t},playtimeNotActive:function(t){this.currentIndex=null}}},h=f,v=(e("b455"),e("2877")),I=Object(v["a"])(h,A,p,!1,null,"e0931176",null),y=I.exports,C=e("6fd5"),R={name:"TopList",components:{Comment:r["a"],MusicHead:l["a"],MusicOperate:d["a"],MusicListOperate:m["a"],TopListSongs:y,OffsetChange:C["a"]},data:function(){return{toplistCat:{},currentIndex:0,toplistDetail:{},uf:[],cIndex:null,topId:0,toplistComment:{},idList:[]}},computed:{musicIsCompleteUpdate:function(){return this.$store.state.musicIsCompleteUpdate},musicTopListCatName:function(){return this.$store.state.musicTopListCatName},offsetNum:function(){return this.$store.state.offsetNum}},watch:{offsetNum:function(t){this.getToplistComment(this.idList[this.currentIndex],t)}},created:function(){this.getToplistCat(),this.topListId(),this.changeList(this.musicTopListCatName,this.topId)},methods:{getToplistCat:function(){var t=this;return Object(n["a"])({url:"/toplist"}).then((function(i){t.toplistCat=i,i.list.map((function(i,e){t.idList.push(i.id),t.uf.push(i.updateFrequency)}))}))},changeList:function(t,i){var e=this;this.currentIndex=t,this.$store.commit("changeValue",{type:"musicIsCompleteUpdate",value:!1}),Object(n["a"])({url:"/playlist/detail?id=".concat(i)}).then((function(t){e.toplistDetail=t,e.$store.commit("changeValue",{type:"musicIsCompleteUpdate",value:!0}),e.getToplistComment(i)}))},getToplistComment:function(t){var i=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(n["a"])({url:"/comment/playlist?id=".concat(t,"&offset=").concat(e)}).then((function(t){i.toplistComment=t}))},topListId:function(){switch(this.musicTopListCatName){case 0:this.topId=19723756;break;case 1:this.topId=3779629;break;case 2:this.topId=2884035}},updateTimeFormat:function(t){return Object(c["a"])(t)},countFormat:function(t){return Object(o["a"])(time)},playFormat:function(t){return Object(u["a"])(t)}}},L=R,w=(e("0819"),Object(v["a"])(L,s,a,!1,null,"172622d6",null));i["default"]=w.exports},"1c14":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEQUlEQVRYR7WXXWgcVRTH/2dSbAOFnTMQ9UlbQV+yNwFFiFBBqQ8Nil8PUit+oK3YVnzQh6SaN6n6ogXFFGmLilIFK0VptEKL9QNsQRR3tooIadAXG8mc2WBto2SOnM3sMkk2M7sbvTCwu/ecc/977zn3/IbQ5vgFWDsXBA+q6vUArso8FuHXxkNE362NoneuBebaCU1FRlXmTVC9JyHaSUBvkb3NK3DRU90PoqNlka/zfHIFhMyvA9iVCXAawLEEkB4gmieKPdUeEF0J1SsA3AjgFgB+xmfciexeScSKAkLmz9NgIOA4gLfLIu8X7UAVuGze97f0eN5Tqro5tT/lRG5t5dtSQIV5moC+dDv3DIi8VLRwq/lqEGxX1QNpnD8GRC5fardMQIV5koCNdUPVe10cH+1m8YZPhXmYgE/sOwFTZZGF2OlYJCD0/QMg2m5zTqQwQTsRFjJr+qc+cHF83zIBIfMLAPakE4NOpNLJAkW2lVLpBvK8b1O7vU5kLN0V4GyptDnxvBP1H4h2lKPoYFHAbuYrzI8T8AYBs+p5Q25m5qf6Noe+fwhEjxLRyXIU3ZYXvBoEb+qaNaNuevp8NyKqzJ8qsAXAfieyi85t2LDuQq0mCqxLVO8ajOOPcwX4/s9K1EdEI+Uoqmd4J6PKvFWB9wDU5oCrKWR+wtQAmCWRvjLwdxsCrkttJjyikf4oOtuJiJD5GwBDUH3IBIwD2AngMydiW5M7qgs70BDQsH3OiVgStzUqvj9GRM9D9UMTcAzA7QDaCrKCAKvxM6o66uL4VJGKKvOTCrymwPcmwMrNWf27KDpU6Nx6B5pupLoPcTyad5QV5gcIeBfAbyYgBlACcIcTmVitgNR/Mk3SI63iZW7Hv5oCEqLhwSiyptNNDiz1+RHAiBOx4102QmY7cpurNY+AgPvb6nYFRwDgRSfybN6/CIPgMajaZRc2kzABdg+KWEV0uwNfeJ430j8zc6YoRshsAvcCmMiW4ZgTsR87FfBPet77inwb8yGzddi77f6hTM8+7URuKgqSLUNVPQLVkYFabbLIrzFvwKLMdo371nfIYPMis/Xe3nbywAQkROtpIcmslDoaP/j+nR7RR8aNvSJcb0ZV339ZiZ429CqLDOcmEPP4BaLRoSia7Wjl1LgaBCcM1Uj1lXIcP7MggHmTAl/ZZwW6RrAiQVlEI+BmI+Ym9Swi4P8AxZaKyaIZgCYpL0ayDAn/b0gGLCLkVlDaJGIAq0azLIopsIyMV8LyJhmvBtEaCJbm1rkBkWuWHs3KLyYZQjZUm0+SV3vi+HgRsKRJvRXAwyl6Gd4fdHG8o1WSFr2aZUnZ/K30jGa+BNF5qP6uQAIg8ABOVO1ysUYzlFkstzcUsn+dmIm2EdE248aiUrN5Ai6p6mFP9XB/rXYyz6dQQMPZ4PXPWu0RAAN5r+cAKutLpbc2Tk1dakfsv0XG5r1A8JWQAAAAAElFTkSuQmCC"},"20cc":function(t,i,e){"use strict";function s(t){return t>1e4?parseInt(t/1e4)+"万":t}e.d(i,"a",(function(){return s}))},5465:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJDSURBVGhD7Zm/axRREMdnNrm9IBhE7C57p423Z8QUQpRUIqa0UgjiX2BlERSxUNPYmMpKwTqksRcxGBDUgI2i7p6Nuc1hKf5ozEvccd7bOfQPeO9lV/YDt2++s8XN95g59u2DmpqaaoOyGpJOeAEJZoFoVlJl42MO+OLYlloV/ddAGjWeA+IZkSUHH8TZ9hUT6Uu/Hb4ngGkdV4gvcaZamLTDO+zitiSf/s7p1vRwZ0N0qUg643NIwQ0Oz2vNP/pSwMWf1kJDQDfLWrymN9h9yTUuieSOhxlM2+F3jie5md7FAzVT3Co3XPMbXk7y51vAl0mdhJy+mrUKEP2U6IA2UGlqA3tNbeBf+u3mQ/6H+PwpCi9JyjlWDRDlR3k5nCOsJFFzsci6xVkLIdJyP2osi3SG0xkgxEVuqdX0EOyXlHV8DPEC7AufJK2mbi/r+DCgmcMxepZ2Js6KtoYvA5oIKF9Lpsat7jl8GjBgMLYgoRW8G+DRtjrQ3g1Qnj+S0AreDPDGaYgQnOsNd9clZQUvBghhg79pvpv9WpOUNXwYeIwTar67qVLRVnFsgO7HmboY92G0g7KOOwOI1+Ns56ooZ1g2gHqzvck9fzkebN8rcm6xaiDeUte4ZY70BmpFUs7xMcROqQ3sNf+FgR9FhAfNWgUQRw+E5tXiKxMSnEjaDf2+sdRIjUWdCOsBAbw2gkHAux+mGqdElg7zeh1wdBQARPC28gccZoi7mTrOdqw+5rpFHzGplomMFqp4yFdTU1NpAP4A3Pqmk9V1cFcAAAAASUVORK5CYII="},"56d9":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEfklEQVRYR7WXa2gcVRTH/+dmA6ZCkGjBB6KVilIfUFrBSKWtiNiCXwoGBYspdO+5u4tio4VUEesXK8YPtU0yc2c2SSlGhaKIIFWwWnyglmp9RUWxRlERfH0waQnszJG77sTNdpOZ3eKFZZed8/hx59xz/4fQwvJ9f5WI9CmlLiWiK0TkSgA9RHRSRE66bwBvaq1fyRqWshhaa+8EkHycyykR+YOIfheRU0TU40Bqn04A7v/nlVKHtdaHl8qxJEAYhteLyDMisgHAzwAmoyiaLBaLnzULOjIycmEul+sHcC+Aq2s2e5l5x2IQiwIEQbBVRA46RyIanJmZ2TcwMHA6y45NTEycMzc3109EewCcB+ATZl7dzLcpQBAE94nIPiL6LYqivkKhcDRL4kYbVzMAniUil/xPZj6/0eYMAM/zblFKHQEwxczXtpO40cfzvN1KqcdEZNIYc0/98wUAYRiuieP4uDNg5kwFmhUwgQDwJDPvSvwWJPF9/zgRrRGRa4wxX6YF9zzvEgD5QqGwO83WPbfWhgC2A+hj5kPV+kocrbU7ATwlIvuNMfenBfQ8r18pNZHYzc7OLksr0nK5vDKKom+J6KjWemMjwDEAN0RR1FssFj9IA7DWfg/g8jq7MjPnM/g9DeDBOI43uuKu7kAYhpvjOH4VwAvMfHdakNp2um53R53tDmbem+YbBMFNIvKeiIwaY0pVgCAIJkSkX0Q2GWNeSwtSA1gH4GEAmwAcYua+LH61fEdE5Lqurq4VVQBr7ecALmDmi7IGORs7a+0ggD1Kqd4E4G8i+kJr3Xs2gbP6BkFwl7sriEjT2NjYxZVKxfX5zO8/SZSc7TiOtxUKhQNZATzPW62U+piI9lMYhjfGcfx+HMePZz3PdUdXqkep7lhlgbDWLgMw6/xodHT0qo6Ojq+J6KDW2t1imZe1ti0A18CUUj8BGKehoaFzu7u7ZwC8y8w3Z87+b/G2C7BBKfWWiDyaFOEPRJTTWrvWmnm1C2Ctde04dLWTALwDYJ2IrDfGvJ2VoF2AIAg8ETEicmsCUAIw7NSPMeaB/xPAWuuU0gkAx5h5fQLgqtL92VWpVFaVSiVXE6mrnR2w1jqVNJgc3fnb0Pf9XUT0RCvHsVWAcrncE0XRFIAZZnaK+r/r2AnKzs7OjwD8FcdxXxY90CpAXeOa7zkLBIm19jYArxPRlNY6VY61AuB5Xl4pFRDRAa31tuT9niG7giB4SESGskAkt2hyty9WNL7vbyYid91PM/OKerumus9a6+T4VgCfViqV20ul0q+pFbmIQYNyWsnM36UC1K5oC0C7KcfpPmZ+uRWI4eHhy3K53CNElCeiX0Skl5l/bIyxpPL1fX8LEb3onETkhPutlHopn89/tcR2ryWi7US0RUSWA/CYubiYfar09n1/LYCdLiCAXC2QG0LdQPoNEbmeUZ0L3YxYG+Oc2Rsi8pwxZl64NoNIBUicxsfHl1cqleqAKiJOjNYLUmd2ujYlf1hL7Iab1JUZoFkkz/MSkOlCoTCdmq2JwT+6jjQ15nPkUwAAAABJRU5ErkJggg=="},"6bcc":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADM0lEQVRoQ+2ZTWgTQRTH/29SBcWvdlsrUjTdVCho0kIrIvbgNz14qIi3Cl6rF3uy2RZsoYnVg96kNy8VehBR8FRFhd68VaFpod1YFAXd1CKK0LTzJP2QUJPsbGyyCexADmHfvvn/3v9NZjNLKPNBZa4fHoDbDpaIA5d91YFAMyBaWOIIERoY9Dy5WDH649PAfK4iFR2grq572+8t24MkuFlKtBChBVj5/DMI1GmZkUeuAVTqN3cDFUEBhJi5KZfYTCIZGJg3o/1FAdjXEK5Jsi/IvBwiUBBAU7bKqq6bggPs8ff4BYlrgug8g1OCN3UUHEDTjYcArm6q6rRkhQeoD78G0UkPIEsFysmBnwDHwPiV7mgpAiyAOUaESQlMgnhSSl9sIR6ZWzdB0404AH/qu2sABFgSiAmiKUieBmFKCDH1dWZw1m69aGnrqtgAH8F0l0AvrPjgtJ3QbNfdBHiQMKPX8xX+t4XcckDFbhU41xzwANbs8RxQ6dN8F5xKbs8BlSp5DuSoktdCXgs5qUCG2LJuIU3vOQqIVwB2FP1xOp9HiaqGW7uwlDwuBLUz+DCAc+mmqOT8r4Mtp3avi6vxG83ShwEw2gFszdZ1BQeo1o0JBkKqdqfiqvTwDQLdV1kqBQVY69e360JUJqvUe9sEeFxFvGpRlFuoNtC/dxmLpyWjkYCDG8+DVACqdWOcgTZVAAJ1WWZkOFe8LUCVbvQT6ATAZ3MlUgHQdCP15/2AKgAEdSRmIs/yAtD84WPw0RMw9qtMqAjAKrlWYgifaQmt1lz0i2OAnY1hbesiWcqTrc4YTpiRoVz3ODmKVCnIKmem3VA3HgO45AiAcSURj47YAJwB8FIh73DCjHYpxGUByOPMk6Q8ZX0YemM36eqaQieAwMZYBk0A/NTunUD6fZkdcAhAwDvLjDo6XtcCvRcBeYiZLMHCWqZk/Lt5571dATZezwhQpRvdBNxTTabar6r5nMRlBKisN0KCMAag1i6Zm+KzLuLUBS0Q7gBTX/bXRDzGwOi8eTv1ksO1YbuRVet9FyRka7pCH8mRb7NDM66pTpvYFqAURDreyEpdtO3PqAdQxAr8ARNY1kAFIgRSAAAAAElFTkSuQmCC"},"96d2":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[t.musicHead?s("div",{staticClass:"d1"},[t._t("default")],2):t._e(),t._l(t.playListInfo,(function(i,a){return s("div",{key:a},[s("div",{staticClass:"d2"},[s("div",[s("span",{staticClass:"tablecount",style:{marginRight:t.musicMargin[0]+"px",width:t.musicWidth[0]+"px"}},[t._v(t._s(a+1))]),i.id===t.musicAudioId?s("img",{staticStyle:{opacity:"1"},attrs:{src:e("1c14")},on:{click:function(e){return t.addMusic(i.id,a,!0)}}}):s("img",{attrs:{src:e("b056")},on:{click:function(e){return t.addMusic(i.id,a,!0)}}})]),s("div",{style:{marginLeft:t.musicMargin[1]+"px",width:t.musicWidth[1]+"px"}},[s("span",{on:{click:function(e){return t.jumpPage("digitalsingle",i.id)}}},[t._v(" "+t._s(i.name)+" "),s("span",{staticStyle:{color:"#AEAEAE"},attrs:{hidden:!t.playListInfo[a].alia[0]}},[t._v("-("+t._s(t.playListInfo[a].alia[0])+")")])]),s("span",{staticClass:"dmv",attrs:{title:"播放mv",hidden:!t.playListInfo[a].mv},on:{click:function(i){return t.jumpPage("videodetail",t.playListInfo[a].mv)}}},[s("img",{staticClass:"mv",attrs:{src:e("5465")}})])]),s("div",{style:{marginLeft:t.musicMargin[2]+"px",width:t.musicWidth[3]+"px"}},[s("span",[t._v(t._s(t.playFormat(i.dt)))]),s("div",{attrs:{id:"playtime"}},[s("operate",{staticClass:"operate",style:{marginLeft:t.musicMargin[3]+"px",width:t.musicWidth[3]+"px"},attrs:{myFlag:t.myFlag,sendShow:t.sendShow,operateMusicInfo:[i.id,a,!1,t.playlistId]}})],1)]),t.musicIsSinger?t._e():s("div",{style:{marginLeft:t.musicMargin[4]+"px",width:t.musicWidth[4]+"px"},on:{click:function(e){return t.jumpPage("singerdetail",i.ar[0].id)}}},[s("span",{attrs:{title:i.ar[0].name}},[t._v(t._s(i.ar[0].name))])]),t.musicIsPlayList?s("div",{style:{marginLeft:t.musicMargin[5]+"px",width:t.musicWidth[5]+"px"}},[s("span",{attrs:{title:i.al.name},on:{click:function(e){return t.jumpPage("albumdetail",i.al.id)}}},[t._v(t._s(i.al.name))])]):t._e()])])}))],2)},a=[],n=(e("d81d"),e("45fc"),e("a9e3"),e("d3b7"),e("3ca3"),e("ddb0"),e("901c")),c=e("1bab"),u=e("fb92"),o=e("20cc"),r=e("1aaa"),l={name:"MusicOperate",components:{Operate:n["a"]},props:{playlistId:{type:Number,default:0},playListInfo:{type:Array,default:function(){return[]}},musicMargin:{type:Array,default:function(){return[]}},musicWidth:{type:Array,default:function(){return[]}},musicIsPlayList:{type:Boolean,default:!0},musicHead:{type:Boolean,default:!0},musicIsSinger:{type:Boolean,default:!1},myFlag:{type:Boolean,default:!1}},computed:{musicAudioId:function(){return this.$store.state.musicAudioId},musicAudioIdList:function(){return this.$store.state.musicAudioIdList},musicAudioList:function(){return this.$store.state.musicAudioList},musicAudioAddAllFlag:function(){return this.$store.state.musicAudioAddAllFlag},musicAudioPlayStatus:function(){return this.$store.state.musicAudioPlayStatus}},data:function(){return{checkResult:{},value:0,sendShow:[!0,!0,!0,!0,!1]}},watch:{musicAudioAddAllFlag:function(t,i){var e=this;!0===t&&(this.playListInfo.map((function(t,i){e.addMusic(t.id,0,!1)})),this.musicAudioPlayStatus&&setTimeout((function(){e.addMusic(e.playListInfo[0].id,0,!0)}),500),this.$store.commit("changeValue",{type:"musicAudioAddAllFlag",value:!1}))}},created:function(){console.log(this.playlistId)},methods:{checkMusic:function(t){var i=this;return Object(c["a"])({url:"/check/music?id=".concat(t)}).then((function(t){i.checkResult=t.success}))},addMusic:function(t,i,e){var s=this;Object(c["a"])({url:"/check/music?id=".concat(t)}).then((function(a){if(console.log(a.success),console.log(t),a.success)if(s.checkMusic(t),s.checkResult){s.currentIndex=i;var n=s.musicAudioList.some((function(i){if(i.songs[0].id===t)return t=i.songs[0].id,!0})),u=Object(c["a"])({url:"/song/url?id=".concat(t)}).then((function(t){(0===s.musicAudioIdList.length||e)&&s.$store.commit("changeValue",{type:"musicAudioUrl",value:t.data[0].url}),s.$store.commit("addValue",{type:"musicAudioUrlList",value:t.data[0].url})})),o=Object(c["a"])({url:"/song/detail?ids=".concat(t)}).then((function(t){(0===s.musicAudioIdList.length||e)&&s.$store.commit("changeValue",{type:"musicAudioDetail",value:t}),n||s.$store.commit("addValue",[{type:"musicAudioList",value:t},{type:"musicAudioDetailList",value:t}])})),r=Object(c["a"])({url:"/lyric?id=".concat(t)}).then((function(t){(0===s.musicAudioIdList.length||e)&&s.$store.commit("changeValue",{type:"musicAudioLyric",value:t}),n||s.$store.commit("addValue",{type:"musicAudioLyricList",value:t})}));Promise.all([u,o,r]).then((function(i){(0===s.musicAudioIdList.length||e)&&s.$store.commit("changeValue",[{type:"musicAudioId",value:t}]),s.$store.commit("addValue",{type:"musicAudioIdList",value:t})}))}else console.log(!1)}))},jumpPage:function(t,i){this.$router.push({name:t,params:{id:i}})},createTime:function(t){return Object(u["a"])(t)},countFormat:function(t){return Object(o["a"])(t)},playFormat:function(t){return Object(r["a"])(t)}}},d=l,m=(e("1135"),e("2877")),A=Object(m["a"])(d,s,a,!1,null,"78cdd284",null);i["a"]=A.exports},a9e3:function(t,i,e){"use strict";var s=e("83ab"),a=e("da84"),n=e("94ca"),c=e("6eeb"),u=e("5135"),o=e("c6b6"),r=e("7156"),l=e("c04e"),d=e("d039"),m=e("7c73"),A=e("241c").f,p=e("06cf").f,g=e("9bf2").f,f=e("58a8").trim,h="Number",v=a[h],I=v.prototype,y=o(m(I))==h,C=function(t){var i,e,s,a,n,c,u,o,r=l(t,!1);if("string"==typeof r&&r.length>2)if(r=f(r),i=r.charCodeAt(0),43===i||45===i){if(e=r.charCodeAt(2),88===e||120===e)return NaN}else if(48===i){switch(r.charCodeAt(1)){case 66:case 98:s=2,a=49;break;case 79:case 111:s=8,a=55;break;default:return+r}for(n=r.slice(2),c=n.length,u=0;u<c;u++)if(o=n.charCodeAt(u),o<48||o>a)return NaN;return parseInt(n,s)}return+r};if(n(h,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var R,L=function(t){var i=arguments.length<1?0:t,e=this;return e instanceof L&&(y?d((function(){I.valueOf.call(e)})):o(e)!=h)?r(new v(C(i)),e,L):C(i)},w=s?A(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;w.length>N;N++)u(v,R=w[N])&&!u(L,R)&&g(L,R,p(v,R));L.prototype=I,I.constructor=L,c(a,h,L)}},b056:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC0klEQVRYR82XyWsUQRTGv0cTEgQTRD0oiEbUwdQbB4mC4IIe9Ki4g+Af4H7IzcToIfEe43LUg7grqDcVFBf0YJSx6yljxBX0YERcSRhmSipUS9vO0skonbp11ffe+3XVe7UQYrbW1tamoaGh1QDWENFMY8wkABOd+SciGjDGvARwub6+/kpfX9+XOK6pmoiZ5wLYBWALgKZqejdug58C0Ku1flbJpiIAM3e54I0xA0dlXx1ERzn7sgBKqXNEtDFi+BDANQDXPc97Pzg4+MGONzQ0TCkUClMBrASwCsCCsJ0x5ryIbCoFURJAKfWKiGYEBsaYOwB6RORinJlQSq0HsIeIloZ8vBaR5qj9XwBKqY9EZBMsaO1a64NxAkc1zLwXQHcIYkBEJod1fwAopW5HqJeIyL3RBA9slFKLiehueDZFZFnw/RvAJVx7SDhbRF7UEjwEMYuI+kO+urXWw4k5DOBK7QGAINt3a617/0XwwAcz21I+5L5tdSyyJRoAHAWwzQ7ahAtPURSipaVFeZ630Pf9EyMFjCzxMa31dkqlUuPr6ureAJjgADZUynZmPgBgPxGdLhaLXSLyNC6IrQ4iuuD0n/P5/HRi5rUALrnOJ1rrTCWHAYDTfAOwT2vdExeCmbMA5jn9OgtwBsDm4YQgOuL7/s4RAATSG0TU6fv+/Wog6XT6sDFmh9OdpXQ6/cgYM991rNBa3xoFQGBis7sTQLGcD2ZeDuCm++HHdgbeAphmOzzPS2Wz2ec1AFjTfmNMm4hcLeUnk8nMKRQKOTf2zgL8ADDOduTz+cZcLmfXtWyL5EAl6Umt9daowCW9LUPbfo4JgGSXYCwkYbJlWONG9B1AR00bUeJbsa0FZo59GNmNhIiafd8/Xm3Xi46XPIwcgL35JnccOwh7A07mQhJMVaJXshBEcpfSEERy1/IQRHIPkwAi0adZCCK5x2l4I/lfz/NfV+zfnkTgNI8AAAAASUVORK5CYII="},b455:function(t,i,e){"use strict";var s=e("cfac"),a=e.n(s);a.a},cfac:function(t,i,e){},d101:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"headmain",style:{width:t.headwidth+"px"}},[s("div",{staticClass:"left"},[s("div",{staticClass:"hotre"},[t._t("head"),t.headReg?s("span",{staticClass:"reg"},[t._v("®")]):t._e(),t._t("count")],2),s("div",{staticClass:"cat"},[t._l(t.headcat,(function(i){return s("div",{key:i,staticClass:"catitem"},[s("span",{on:{click:function(e){return t.jumpPage(t.headPath,i)}}},[t._v(t._s(i))])])})),t._t("songsNumber"),t.headPrompt?s("div",{staticClass:"headPrompt"},[t._m(0),t._m(1)]):t._e()],2)]),s("div",{staticClass:"right"},[t.headOutChain?s("div",{staticClass:"outchain"},[s("img",{attrs:{src:e("6bcc"),alt:""}}),s("a",{attrs:{href:"javascrpt::"}},[t._v("生成外链播放器")])]):t._e(),t.headPlayCount?s("div",{staticClass:"playcount"},[s("span",[t._v("播放：")]),s("span",[t._t("playCount")],2),s("span",[t._v("次")])]):t._e(),t.headSort?s("div",{staticClass:"sort"},[s("span",{class:0===t.currentIndex?"active week":"week",on:{click:function(i){return t.toggleSort(0)}}},[t._v("最近一周")]),s("span",{staticClass:"mid"},[t._v("|")]),s("span",{class:1===t.currentIndex?"active all":"all",on:{click:function(i){return t.toggleSort(1)}}},[t._v("所有时间")])]):t._e(),s("div",{staticClass:"more",on:{click:function(i){return t.jumpPage(t.headPath)}}},[t._t("more")],2)])])},a=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"prompt"},[s("img",{attrs:{src:e("56d9")}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"txt"},[e("div",{staticClass:"point"}),e("span",[t._v("实际播放时间过短的歌曲将不纳入计算。")])])}],n=(e("a9e3"),{name:"MusicHead",props:{headwidth:{type:Number,default:720},headcat:{type:Array,default:function(){return[]}},headOutChain:{type:Boolean,default:!1},headPlayCount:{type:Boolean,default:!1},headPrompt:{type:Boolean,default:!1},headSort:{type:Boolean,default:!1},headReg:{type:Boolean,default:!1},headPath:{type:String,default:""},headCatName:{type:String,default:""}},data:function(){return{currentIndex:0,toggleRecordType:1}},computed:{userRecordList:function(){return this.$store.state.userRecordList}},methods:{toggleSort:function(t){this.currentIndex=t,0===this.toggleRecordType?this.toggleRecordType=1:this.toggleRecordType=0,this.$store.commit("changeValue",[{type:"userRecordType",value:this.toggleRecordType},{type:"musicIsCompleteUpdate",value:!1}])},jumpPage:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"全部";this.$router.push({name:t}),this.$store.commit("changeValue",{type:"musicPlayListCatName",value:i})}}}),c=n,u=(e("f5cd"),e("2877")),o=Object(u["a"])(c,s,a,!1,null,"26dac812",null);i["a"]=o.exports},d81d:function(t,i,e){"use strict";var s=e("23e7"),a=e("b727").map,n=e("1dde"),c=e("ae40"),u=n("map"),o=c("map");s({target:"Array",proto:!0,forced:!u||!o},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},de67:function(t,i,e){},e493:function(t,i,e){},f5cd:function(t,i,e){"use strict";var s=e("de67"),a=e.n(s);a.a},fb92:function(t,i,e){"use strict";function s(t){var i=new Date(t),e=i.getFullYear(),s=i.getMonth()+1<10?"0"+(i.getMonth()+1):i.getMonth()+1,a=i.getDate()<10?"0"+i.getDate():i.getDate();i.getHours(),i.getHours(),i.getMinutes(),i.getMinutes(),i.getSeconds(),i.getSeconds();return e+"-"+s+"-"+a}e.d(i,"a",(function(){return s}))}}]);
//# sourceMappingURL=chunk-174c36a1.d9c23228.js.map