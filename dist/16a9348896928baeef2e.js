(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{433:function(t,s,i){},637:function(t,s,i){"use strict";var o=i(433);i.n(o).a},644:function(t,s,i){"use strict";i.r(s);var o=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"work"},[i("div",{staticClass:"work__img"},[i("img",{attrs:{src:t.srcPhoto,alt:t.work.title}}),i("div",{staticClass:"work__tags"},[i("ul",{staticClass:"tags tags--right"},t._l(t.tags,function(s){return i("li",{key:s,staticClass:"tags__item"},[i("span",[t._v(t._s(s))])])}),0)])]),i("div",{staticClass:"work__info"},[i("h3",{staticClass:"work__title"},[t._v(t._s(t.work.title))]),i("div",{staticClass:"work__text"},[i("p",[t._v(t._s(t.work.description))])]),i("a",{staticClass:"work__link",attrs:{href:t.work.link,target:"_blank"}},[t._v(t._s(t.work.link))])]),i("div",{staticClass:"work__buttons"},[i("button",{staticClass:"btn-card btn-card--edit",attrs:{type:"button"},on:{click:t.editWork}},[t._v("Править")]),i("button",{staticClass:"btn-card btn-card--delete",attrs:{type:"button"},on:{click:t.deleteWork}},[t._v("Удалить")])])])};o._withStripped=!0;i(367);var r={props:{work:Object},computed:{tags:function(){return this.work.techs.split(", ")},srcPhoto:function(){return"https://webdev-api.loftschool.com/"+this.work.photo}},methods:{deleteWork:function(){confirm('Удалить работу "'.concat(this.work.title,'"?'))&&this.$emit("deleteWork",this.work.id)},editWork:function(){this.$emit("editWork",this.work.id)}}},a=(i(637),i(342)),e=Object(a.a)(r,o,[],!1,null,"74297d3a",null);e.options.__file="src/admin/components/blocks/Work.vue";s.default=e.exports}}]);