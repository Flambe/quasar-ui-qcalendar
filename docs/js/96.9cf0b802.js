(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[96],{f090:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-toolbar",[a("q-btn",{attrs:{stretch:"",flat:"",label:"Prev"},on:{click:e.calendarPrev}}),a("q-separator",{attrs:{vertical:""}}),a("q-btn",{attrs:{stretch:"",flat:"",label:"Next"},on:{click:e.calendarNext}}),a("q-space")],1),a("q-separator"),a("div",{staticStyle:{overflow:"hidden"}},[a("q-calendar",{ref:"calendar",attrs:{view:"month",locale:"en-us",animated:"","transition-prev":"slide-right","transition-next":"slide-left","selected-dates":e.selectedDates},on:{"click:day":e.onToggleDate,"click:date":e.onToggleDate},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1)],1)},s=[],c=(a("a434"),{data(){return{selectedDate:"",selectedDates:[]}},methods:{calendarNext(){this.$refs.calendar.next()},calendarPrev(){this.$refs.calendar.prev()},onToggleDate({scope:e,event:t}){if(this.selectedDates.includes(e.date)){for(let a=0;a<this.selectedDates.length;++a)if(e.date===this.selectedDates[a]){this.selectedDates.splice(a,1);break}}else this.selectedDates.push(e.date)}}}),n=c,r=a("2877"),d=a("65c6"),i=a("9c40"),o=a("eb85"),p=a("2c91"),h=a("eebe"),f=a.n(h),u=Object(r["a"])(n,l,s,!1,null,null,null);t["default"]=u.exports;f()(u,"components",{QToolbar:d["a"],QBtn:i["a"],QSeparator:o["a"],QSpace:p["a"]})}}]);