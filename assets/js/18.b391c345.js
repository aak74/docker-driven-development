(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{166:function(e,a,r){"use strict";r.r(a);var t=r(0),s=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"допоnнитеnьные-вопросы"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#допоnнитеnьные-вопросы","aria-hidden":"true"}},[e._v("#")]),e._v(" Дополнительные вопросы")]),e._v(" "),r("h2",{attrs:{id:"поnьзоватеnь-в-dockerfile"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#поnьзоватеnь-в-dockerfile","aria-hidden":"true"}},[e._v("#")]),e._v(" Пользователь в Dockerfile")]),e._v(" "),r("p",[e._v("Если специальным образом не указать пользователя, под которым будут работать процессы в контейнере, то все процессы будут работать из под рута. Это неприемлемо с точки зрения безопасности.")]),e._v(" "),r("p",[e._v("В процессе разработки можно упростить себе жизнь не указывая пользователя, но на проде это совершенно недопустимо. Но даже в процессе разработки я не рекомендую малодушничать. Всегда указывайте пользователя, под которым будут работать процессы в контейнере.")]),e._v(" "),r("h2",{attrs:{id:"документирование"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#документирование","aria-hidden":"true"}},[e._v("#")]),e._v(" Документирование")]),e._v(" "),r("p",[e._v("Добавление в проект "),r("code",[e._v("Dockerfile")]),e._v(" и "),r("code",[e._v("docker-compose.yml")]),e._v(" описывают серверное окружение в котором проект должен работать. Кроме быстрого развертывания это приносит дополнительную пользу. А именно документирование проекта. Информация о необходимом окружении будет весьма полезна даже если docker в проде не будет использоваться.")]),e._v(" "),r("h2",{attrs:{id:"сnоистая-структура-образов"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#сnоистая-структура-образов","aria-hidden":"true"}},[e._v("#")]),e._v(" Слоистая структура образов")]),e._v(" "),r("p",[e._v("Каждый образ состоит из нескольких слоев. Слой создает каждая из команд внутри "),r("code",[e._v("Dockerfile")]),e._v(". Такой подход обеспечивает переиспользование слоя и экономит место на диске и ускоряет время сборки образа.\nПри повторной сборке образа учитываются изменения в "),r("code",[e._v("Dockerfile")]),e._v(" и изменения в файлах, которые участвуют в сборке.\nЕсли изменений в "),r("code",[e._v("Dockerfile")]),e._v(" не было, то образ "),r("em",[e._v("соберется")]),e._v(" очень быстро.\nЧем выше в "),r("code",[e._v("Dockerfile")]),e._v(" были изменения тем больше слоев нужно пересобирать. То есть часто изменяемые настройки следует помещать ближе к концу "),r("code",[e._v("Dockerfile")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"устаревшие-образы-продоnжают-занимать-место"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#устаревшие-образы-продоnжают-занимать-место","aria-hidden":"true"}},[e._v("#")]),e._v(" Устаревшие образы продолжают занимать место")]),e._v(" "),r("p",[e._v("В процессе работы с docker может сильно замусориваться файловая система устаревшими образами и устаревшими слоями. Для того, чтобы этого избежать необходимо чистить файловую систему от неиспользуемых образов. Сделать это можно командой:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("docker system prune\n")])])]),r("p",[e._v("Однако это не всегда решает всех проблем, поэтому стоит изучить этот вопрос поподробнее. Или просто купить SSD побольше.")]),e._v(" "),r("h2",{attrs:{id:"испоnьзование-docker-в-windows-и-macos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#испоnьзование-docker-в-windows-и-macos","aria-hidden":"true"}},[e._v("#")]),e._v(" Использование Docker в Windows и MacOS")]),e._v(" "),r("p",[e._v("Linux лучшая система для разработчика.\nНо если вам не повезло и вам приходится жить с Windows или MacOS, то с docker вы тоже сможете работать. Разве что есть некоторые особенности.")]),e._v(" "),r("p",[e._v("@TODO Описать особенности или дать ссылки на материалы.")])])}],!1,null,null,null);s.options.__file="README.md";a.default=s.exports}}]);