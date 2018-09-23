(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{182:function(t,i,s){"use strict";s.r(i);var e=s(0),_=Object(e.a)({},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("В предыдущем "),s("router-link",{attrs:{to:"./../ex11/"}},[t._v("примере")]),t._v(" мы подключили БД. И даже заполнили ее. Но при перезапуске контейнера все данные потерялись. Такое поведение было описано в "),s("router-link",{attrs:{to:"./../ex0/"}},[t._v("нулевом примере")]),t._v(".")],1),t._v(" "),s("p",[t._v("Такое неожиданное поведение можно использовать себе на пользу.\nМне представляются два сценария использования и оба связаны с тестированием:")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("Нужно произвести ряд операций:")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("Подходит для длительного ручного тестирования.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("Один раз создаем образ с восстанавленной из бэкапа БД. Эта операция может быть долгой. Но спасает то, что это нужно сделать единожды. Причем это можно сделать единожды для всех разработчиков.")]),t._v(" "),s("p",[t._v("Для запуска тестов нужно всего три шага:")]),t._v(" "),t._m(8)])},[function(){var t=this.$createElement,i=this._self._c||t;return i("h1",{attrs:{id:"тестирование-с-испоnьзованием-бд"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#тестирование-с-испоnьзованием-бд","aria-hidden":"true"}},[this._v("#")]),this._v(" Тестирование с использованием БД")])},function(){var t=this.$createElement,i=this._self._c||t;return i("ol",[i("li",[this._v("Автоматическое тестирование.")]),this._v(" "),i("li",[this._v("Тестирование миграций.")]),this._v(" "),i("li",[this._v("Ручное тестирование.")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[this._v("Все кто пишет unit тесты знает, что "),i("strong",[this._v("запуск тестов с использованием БД очень дорогой")]),this._v(". Такие тесты выполняются очень долго. Идеальный вариант написание mock-ов, но к сожалению это не всегда возможно или целесообразно.")])},function(){var t=this.$createElement,i=this._self._c||t;return i("h2",{attrs:{id:"стандартный-подход"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#стандартный-подход","aria-hidden":"true"}},[this._v("#")]),this._v(" Стандартный подход")])},function(){var t=this.$createElement,i=this._self._c||t;return i("ol",[i("li",[this._v("Создать БД и наполнить БД нужными данными, либо восстановить ее из бэкапа.")]),this._v(" "),i("li",[this._v("Выполнить тесты.")]),this._v(" "),i("li",[this._v("Удалить или очистить БД.\nВосстановление БД обычно занимает минуты. Для запуска unit-тестов это бесконечно долго.\nВсе три шага нужно выполнять для каждого запуска тестов. Первый шаг очень длительный.")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[this._v("Известный факт")]),this._v(" "),i("p",[this._v("Чем дольше тест выполняется,тем реже он запускается.")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("h2",{attrs:{id:"современый-подход"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#современый-подход","aria-hidden":"true"}},[this._v("#")]),this._v(" Современый подход")])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",[this._v("В случае использования контейнера "),i("strong",[this._v("минуты превращаются в секунды")]),this._v(".")])},function(){var t=this.$createElement,i=this._self._c||t;return i("ol",[i("li",[this._v("Запускаем контейнер.")]),this._v(" "),i("li",[this._v("Запускаем тесты.")]),this._v(" "),i("li",[this._v("Останавливаем контейнер.\nВсе три шага достаточно быстрые.\nПодходит для любого вида тестирования.")])])}],!1,null,null,null);_.options.__file="README.md";i.default=_.exports}}]);