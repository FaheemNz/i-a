(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5,4],{"0902":function(e,n,o){"use strict";o.r(n);var i=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("q-select",{class:e.toolbar?"is-toolbar":"",attrs:{"use-input":"",label:"Search",filled:"","hide-dropdown-icon":"","transition-show":"jump-down",options:e.options,dense:e.toolbar},on:{filter:e.filterFn},scopedSlots:e._u([{key:"no-option",fn:function(){return[o("q-item",{staticClass:"text-center bg-white text-dark"},[o("q-item-section",{staticClass:"flex"},[e._v("\n        ¯\\_(ツ)_/¯\n        "),o("span",[e._v(e._s(e.$t("Settings.Errors.empty")))])])],1)]},proxy:!0},{key:"option",fn:function(n){return[o("q-item",{staticClass:"bg-white text-dark",attrs:{to:n.opt.link}},[o("q-item-section",[e._v(e._s(n.opt.desc))])],1)]}},{key:"append",fn:function(){return[o("q-icon",{staticClass:"cursor-pointer",attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.model,callback:function(n){e.model=n},expression:"model"}})},s=[];o("c975");const a=[{name:"Polygamy",desc:"Polygamy Questions",link:"polygamy"},{name:"marriage",desc:"Arranged Marriages",link:"arranged-marriages"},{name:"aisha",desc:"Aisha(RA) Marriage objections",link:"aishara-marriage"},{name:"divorce",desc:"Common Divorce Objections",link:"divorce-objections"},{name:"divorce",desc:"Why Divorce is only man's right",link:"divorce-objections"},{name:"divorce",desc:"Are men more important than women?",link:"divorce-objections"},{name:"divorce",desc:"Marriage & Divorce",link:"divorce-objections"},{name:"divorce",desc:"Feminist objections",link:"divorce-objections"},{name:"divorce",desc:"Common Marriage Scenarios",link:"divorce-objections"},{name:"inheritence",desc:"Common Inheritence Objections",link:"inheritence-objections"},{name:"witness",desc:"Women & Man testimony",link:"women-witness"},{name:"violence",desc:"Jihad, Terrorism Questions",link:"jihad"},{name:"apostasy",desc:"Apostasy, Murder, Theft Questions",link:"chopping-hands"},{name:"slavery",desc:"Slavery & Islam Objections",link:"slavery"},{name:"sword",desc:"Islam was spread by sword & Forced Conversions",link:"islam-was-spread-by-sword"},{name:"jizya",desc:"Jizya & Zakah Objections",link:"jizya"},{name:"quran",desc:"Eternal speech in a book",link:"eternal-speech-in-a-book"},{name:"quran & science",desc:"Scientific Interpretations in the Quran",link:"scientific-miracles-in-the-quran"},{name:"alghazali",desc:"Al-Ghazali & Islamic Golden Age (Science)",link:"alghazali-ended-islamic-golden-age"},{name:"kaba",desc:"Kaba & Blackstone objections",link:"muslims-worship-blackstone"},{name:"evil",desc:"Problem of Evil & Islam",link:"problem-of-evil"},{name:"hijab",desc:"Women dress code objections",link:"women-dress-code"},{name:"who created god",desc:"Who created God",link:"who-created-god"},{name:"why islam",desc:"4200 religions",link:"4200-religions"}];var t={data(){return{model:"",options:a}},props:{toolbar:Boolean},methods:{filterFn(e,n,o){e.length<2?o():n(()=>{const n=e.toLowerCase();this.options=a.filter(e=>e.name.toLowerCase().indexOf(n)>-1||e.desc.toLowerCase().indexOf(n)>-1)})}}},r=t,c=(o("cd0d"),o("2877")),l=o("ddd8"),d=o("66e5"),m=o("4074"),p=o("0016"),h=o("eebe"),k=o.n(h),b=Object(c["a"])(r,i,s,!1,null,"8b8309da",null);n["default"]=b.exports;k()(b,"components",{QSelect:l["a"],QItem:d["a"],QItemSection:m["a"],QIcon:p["a"]})},9886:function(e,n,o){},cd0d:function(e,n,o){"use strict";var i=o("9886"),s=o.n(i);s.a}}]);