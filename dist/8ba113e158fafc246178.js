(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{23:function(t){t.exports=[{group:"FrontEnd",skills:{HTML5:85,CSS3:80,javascript:75,"jQuery и Vue.js":25}},{group:"Workbench",skills:{GIT:20,Terminal:15,Gulp:80,Webpack:15}}]},46:function(t,s,l){},63:function(t,s,l){"use strict";var i=l(46);l.n(i).a},91:function(t,s,l){"use strict";l.r(s);var i=function(){var t=this,s=t.$createElement,l=t._self._c||s;return l("section",{staticClass:"about"},[l("div",{staticClass:"container"},[l("div",{staticClass:"about__header"},[l("h2",{staticClass:"section-title"},[t._v("Блок «Обо мне»")]),l("button",{staticClass:"add",attrs:{type:"button"},on:{click:t.addNewGroup}},[t._m(0),l("div",{staticClass:"add__text"},[t._v("Добавить группу")])])]),l("div",{staticClass:"about__block"},[l("div",{staticClass:"skills"},[l("InputNameGroup"),l("div",{staticClass:"skills__block"}),l("NewSkill")],1),t._l(t.skills,function(s){return l("div",{key:s.group,staticClass:"skills"},[l("InputNameGroup",{attrs:{groupName:s.group}}),l("div",{staticClass:"skills__block"},[l("ul",{staticClass:"skills__list"},t._l(s.skills,function(t,s,i){return l("li",{key:i},[l("InputSkill",{attrs:{value:s,percent:t}})],1)}),0)]),l("NewSkill")],1)})],2)])])};i._withStripped=!0;l(10);var n={data:function(){return{skills:[]}},methods:{addNewGroup:function(){console.log("add New Group")}},created:function(){this.skills=l(23)},components:{InputSkill:function(){return l.e(14).then(l.bind(null,94))},NewSkill:function(){return l.e(15).then(l.bind(null,98))},InputNameGroup:function(){return l.e(13).then(l.bind(null,95))}}},e=(l(63),l(8)),a=Object(e.a)(n,i,[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"add__plus"},[s("div",{staticClass:"plus plus--bg"})])}],!1,null,null,null);a.options.__file="src/admin/components/pages/About.vue";s.default=a.exports}}]);