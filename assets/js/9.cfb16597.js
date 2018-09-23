(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{180:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("В "),a("router-link",{attrs:{to:"./../ex11/"}},[t._v("примере")]),t._v(" мы подключили БД. И даже заполнили ее. Но при перезапуске контейнера все данные потерялись. Такое поведение было описано в "),a("router-link",{attrs:{to:"./../ex0/"}},[t._v("нулевом примере")]),t._v(".")],1),t._v(" "),a("p",[t._v("Обычно мы хотим все же сохранения данных в БД даже после перезапуска контейнера.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),a("p",[t._v("Теперь БД будет сохраняться и при перезапуске контейнера.")]),t._v(" "),t._m(4),t._v(" "),t._m(5)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"поnноценное-испоnьзование-бд"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#поnноценное-испоnьзование-бд","aria-hidden":"true"}},[this._v("#")]),this._v(" Полноценное использование БД")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"рецепт"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#рецепт","aria-hidden":"true"}},[this._v("#")]),this._v(" Рецепт")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("В файле "),s("code",[this._v("docker-compose.yml")]),this._v(" изменяем секцию с описанием контейнера следующим образом:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("mongo:\n  image: mongo:3.6-stretch\n  volumes:\n    - ./data/mongo:/data/db\n  networks:\n    - skynet\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"итоговый-файn-docker-compose-yml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#итоговый-файn-docker-compose-yml","aria-hidden":"true"}},[this._v("#")]),this._v(" Итоговый файл docker-compose.yml")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'2'")]),t._v("\n\n"),a("span",{attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v("server")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("alpine\n    "),a("span",{attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 3000"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("3000 ")]),t._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[t._v("networks")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" skynet\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v("mongo")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mongo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3.6"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("stretch\n    "),a("span",{attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./data/mongo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/data/db\n    "),a("span",{attrs:{class:"token key atrule"}},[t._v("networks")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" skynet\n"),a("span",{attrs:{class:"token key atrule"}},[t._v("networks")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v("skynet")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[t._v("driver")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bridge\n    "),a("span",{attrs:{class:"token key atrule"}},[t._v("ipam")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[t._v("driver")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" default\n      "),a("span",{attrs:{class:"token key atrule"}},[t._v("config")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token key atrule"}},[t._v("subnet")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10.1.0.1/24      \n")])])])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);