(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1047777e"],{"5c3d":function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"main"},[e("div",{staticClass:"singeritem"},[e("div",{staticClass:"left"},[e("div",{staticClass:"name"},[e("span",[t._v(t._s(t.singerInfo.name))]),e("span",[t.singerInfo.trans?e("span",[t._v(t._s(t.singerInfo.trans)+" -")]):t._e(),t._v(" "+t._s(t.singerInfo.alias[0])+" ")])]),e("div",{staticClass:"img"},[e("div",{staticClass:"bg"}),e("img",{attrs:{src:t.singerInfo.picUrl,alt:""}}),t._m(0),t.singerInfo.accountId?e("div",{staticClass:"userhome",on:{click:function(i){return t.jumpPage("profile",t.singerInfo.accountId)}}},[e("img",{attrs:{src:n("c34b"),alt:""}}),e("span",[t._v("个人主页")])]):t._e()]),e("div",{staticClass:"head"},t._l(t.menuList,(function(i,n){return e("div",{key:i,class:t.currentIndex==n?"item active":"item",on:{click:function(i){return t.changeCat(n)}}},[t._v(t._s(i))])})),0),e("router-view")],1),e("div",{staticClass:"right"},[t.simiArtist?e("music-minor",{attrs:{musicSimiSinger:t.simiArtist.slice(0,6)}},[e("span",{attrs:{slot:"related"},slot:"related"},[t._v("相似歌手")])]):t._e()],1)])])},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"collect"},[e("img",{attrs:{src:n("779c"),alt:""}}),e("span",[t._v("收藏")])])}],a=(n("99af"),n("1bab")),r=n("1bfe"),A={name:"SingerDetail",components:{MusicMinor:r["a"]},data:function(){return{currentIndex:0,menuList:["热门作品","所有专辑","相关MV","艺人介绍",""],menupath:["popular","allalbum","relatedmv","introduction",""],singerInfo:{},hotSongs:[],simiArtist:[]}},computed:{id:function(){return this.$route.params.id}},created:function(){this.getSingerInfo(this.id),this.changeCat(0),this.getSimiArtist(this.id)},watch:{id:function(t){this.getSingerInfo(t),this.changeCat(0),this.getSimiArtist(t)}},methods:{changeCat:function(t){this.$router.push("/discover/singerdetail/".concat(this.$route.params.id,"/").concat(this.menupath[t])),this.currentIndex=t},getSingerInfo:function(t){var i=this;return Object(a["a"])({url:"/artists?id=".concat(t)}).then((function(t){i.singerInfo=t.artist,i.$store.commit("changeValue",{type:"singerHotSongs",value:t.hotSongs}),console.log(t)}))},getSimiArtist:function(t){var i=this;return Object(a["a"])({url:"/simi/artist?id=".concat(t)}).then((function(t){i.simiArtist=t.artists,console.log(t)}))},jumpPage:function(t,i){this.$router.push({name:t,params:{id:i}})}}},c=A,o=(n("8bff"),n("2877")),g=Object(o["a"])(c,e,s,!1,null,"10d7ff88",null);i["default"]=g.exports},"667a":function(t,i,n){},"779c":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABL0lEQVRYR+2WPW4CMRCF3zsAp+EAhIMghY6CkiIdUEYRJUKiAdFwjNDnPNQPmZjVgtb4Z42MEG79xvPN7PN4icKLhfPjDfBcHZDUAdD1+YLkwacJ3b/qgKRPAJuA4CHJbYDOK7kFmAGYeqP+BWOSy0CtU+YCOJDsN0VJ2gEY2L0vkt9tIKIBTDJJKwAjmzjWD2uS+wt0EoCF+AEwSah+TtJ86vNKBrAQLr80Xe8egA8A+QBiqpf0mx1AkqkIIXPhUQDnqkh6J+rrAEiqHAygMlbl6prD6x7J1oHaQU0evDfA8pjwYjyb3RxqVjU1XYbM1oGbtsregmImLAtQfBC9NEBMcbHau49R6C9ZbNK6fkJy4XqOg35K22QH8Efy2AjQ8uCkcO8ASTo1IugNULwDJ2HZ4SHFC6tTAAAAAElFTkSuQmCC"},"8bff":function(t,i,n){"use strict";var e=n("667a"),s=n.n(e);s.a},c34b:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADH0lEQVRYR7WXW6iVZRCGnxcsvFFQ6sLUjXqhlKCRkCeMoiAvVDIxEAWz1ERTy9MOJUpMUBEkticiUfOAZEeUFHGTiRaapIiKoIJFQiQi3Vbwyiy/vVnt1lr/YenAz7r5Zub5ZuabmSUKiO2ewOj0jQcGA8eBH4CfJZ0tYK5yVHkVbL8HvA30BW4CZ4BbwEjgWeAR4EfgI0lH8trNBLDdHwiDQ4GtwBZJV6odpMi8CKxLUWmTtCgPREMA292Af4DbwDRJ7VlGbe8A3gByQWQBtAEzJUXuc4vtKcAXwAuSTjRSrAtgewJwKI+RWg5sRzoCZIykiGBNaQRwGrgiaU7uq1cdtN0DOAm0S1pWCMB2d+Au8Kak/WUAQsf2bqCfpCjQ/BGwPQr4CRgoKZ5cKbH9IbBYUq+iAPOAFZIGlfKclGxPBT4HnpR0tZatmjVgeykwV9KQJgFeAb4GRkj6pQjADGAP0F/S72UhbL8DbGpkp14EXgaOph7wWRMAEf7ngBZJfxeJwKPABeCqpFfLANhuAX4FNkpaXqgI0xNaCawFJko6XBTC9k7gdWC4pItlAKIXnAN6SYoJmFtsTwa+Aj6R9FYjxaxZ8BRwGTgPTJV0I4vCdtw6bo+kzGmbecD2gLR09AFWxUiuV1BVYd8kaUkWbAUyz6EE8UHK6bEU2i87dG1Hir4DhqVlZbWkXXlsZwLYfheIlnodOAAcrNWe0/x4KYo2mlgC2QDsl/RXmSKcBMQUewLYHJ+kf/PcyvaIBBEgvwErJe0r0gc6evjqtNncyeO465kE8jEwFpgvaVvXM/9LQdUAiTxG6JuStBd8CrwGtEqKtHTKfwAetPNqR2lDagUWSIrltiKdALYfA07FHiBpVlPXrqNsOyZjbNejJVXSWg2wPoUpFsnSS0gjcNtPA9+ngn6/E8B2FEncflbe91s2QmlEr0lRuFSJgO1v08x+pqzhvHq2ewPXgN3RLTsA/gD2SYpN6KGL7b3AIEljZPtx4E9gsqRvHrr3+xGfDuyNYRUAz6cWu71J505F3fW3ntmFwLgAmB9/OJt0XlZ99j3tkze3a2gNBAAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=chunk-1047777e.05a2343e.js.map