(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{8669:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return n}));a("ac1f"),a("5319"),a("498a");function o(e){var t=document.createElement("textarea");t.className="fixed-top",t.value=e,document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t)}function s(e){var t=window.location.origin+window.location.pathname+"#"+e,a=document.getElementById(e);a&&(a.id=""),window.location.hash="#"+e,a&&setTimeout((function(){a.id=e}),300),o(t),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function n(e){return encodeURIComponent(String(e).trim().replace(/\s+/g,"-"))}},"896f":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-markdown",[e._v("\n::: warning\nCodepen uses the UMD version of QCalendar. As such, the examples below must be written in such a way that they also work on that platform. If you see code like `QCalendar.addToDate`, you can instead use `import { addToDate } from '@quasar/quasar-ui-qcalendar'` in your own non-UMD code to get the best tree-shaking effects.\n:::\n    ")]),a("example-title",{attrs:{title:"Day View"}}),a("example-viewer",{attrs:{title:"Basic",file:"DayViewBasic","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Dark",file:"DayViewDark","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"3Day",file:"DayView3Day","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Hide Header",file:"DayViewHideHeader","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nThere may be circumstances where you wish to control the scrolling. In this case, use the `no-scroll` property and provide your own scroll wrapper.\n\n:::\nNote: The header area of the calendar will now scroll with the rest of the calendar\n:::\n    ")]),a("example-viewer",{attrs:{title:"No Scroll",file:"DayViewNoScroll","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Intervals"}}),a("q-markdown",[e._v("\n`interval-height` is available only for one of the available `day` or `week` views.\nThe example below is setting the `interval-height` to `100`, the default is `40`.\n    ")]),a("example-viewer",{attrs:{title:"Interval Height",file:"DayViewIntervalHeight","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nThe example below is setting the `interval-count` to `4`, the default is `24`. This is the number of intervals to be displayed.\n    ")]),a("example-viewer",{attrs:{title:"Interval Count",file:"DayViewIntervalCount","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nThe example below is setting the `interval-minutes` to `30`, the default is `60`. This is the number of minutes in an interval. For this example, if you wanted the full 24 hours, you would also need to set `interval-count` to `48` (if you cut `interval-minutes` in half, then you need to double `interval-count`).\n    ")]),a("example-viewer",{attrs:{title:"Interval Minutes (30)",file:"DayViewIntervalMinutes30","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nThe example below is setting the `interval-minutes` to `15`, the default is `60`. This is the number of minutes in an interval. For this example, if you wanted the full 24 hours, you would also need to set `interval-count` to `96` (if you cut `interval-minutes` in quarter, then you need to quadruple `interval-count`).\n    ")]),a("example-viewer",{attrs:{title:"Interval Minutes (15)",file:"DayViewIntervalMinutes15","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nThe example below is setting the `interval-start` to `8`, the default is `0`. It is a good idea to also adjust the `interval-count` so that extra intervals are not displayed. In this example, the `interval-count` is set to `10`, so the intervals displayed are from 08:00-18:00.\n    ")]),a("example-viewer",{attrs:{title:"Interval Start",file:"DayViewIntervalStart","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Navigation"}}),a("example-viewer",{attrs:{title:"Prev/Next",file:"DayViewPrevNext","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Swipe",file:"DayViewSwipe","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Header"}}),a("example-viewer",{attrs:{title:"Custom Header",file:"DayViewCustomHeader","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Custom Header with Custom Scroll",file:"DayViewCustomHeaderWithCustomScroll","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nColumn Headers are scoped slots only. They are turned on with the `column-header-before` and `column-header-after` properties. Once each property is set to `true` the respective slot is availale.\nColumn Headers are only available for the `day` (includes 2day, 3day, etc), `week` and `scheduler` views.\nThe `timestamp` information is passed to the scoped slot.\n    ")]),a("example-viewer",{attrs:{title:"Column Header",file:"DayViewColumnHeader","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nColumn Count is only available for `day` view (no other views), with the property `column-count`.\nSetting `column-count` to a value higher than 1 (default) will display the same day in that many columns.\n    ")]),a("example-viewer",{attrs:{title:"Column Count",file:"DayViewColumnCount","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nIf you combine `column-header-before` or `column-header-after` you can achieve a vertical schedule.\n    ")]),a("example-viewer",{attrs:{title:"Column Header Count",file:"DayViewColumnHeaderCount","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nAnd finally, if you wanted the ability to page through a large number of resources, you can set the `column-index-start` to create a paging effect.\n    ")]),a("example-viewer",{attrs:{title:"Column Header Count (Paged)",file:"DayViewColumnHeaderCountPaging","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Events"}}),a("q-markdown",[e._v('\n::: tip\nThe events below won\'t show up unless there is a listener for it. Therefore, if using `Vue Devtools`, you won\'t see it unless you add it.\n:::\n\nYou can add a listener for the following events. An event is comprised of an `event + suffix`. By adding the event with the suffix, you get the completed listener name.\n\n| Event       | `:day:header2`     | `:time2`            | `:interval2`       | `:interval:header2` | `:date2`           |\n| ----------- | :----------------: | :----------------: | :----------------: | :-----------------: | :----------------: |\n| click       | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: |\n| contextmenu | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: |\n| mousedown   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :x:                |\n| mousemove   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :x:                |\n| mouseup     | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :x:                |\n| mouseenter  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :x:                |\n| mouseleave  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :x:                |\n| touchstart  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :x:                |\n| touchmove   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :x:                |\n| touchend    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :x:                |\n\n::: warning\nDo NOT combine suffixes. Only one suffix per event. A different suffix will give you a different event.\n:::\n\n| Suffix | Description | Data |\n| ------ | ----------- | ---- |\n| `:day:header2` | The header area | `{ scope: { timestamp: { "..." }, index: 0 }, event: { "..." } } |\n| `:time2` | The slotted area to side of intervals | `{ scope: { timestamp: { "..." }, index: 0 }, event: { "..." } } |\n| `:interval2` | The interval area | `{ scope: { timestamp: { "..." } }, event: { "..." } } |\n| `:intervals:header2` | The header area above the intervals| `{ scope: { days: [ "..." ] }, event: { "..." } } |\n| `:date2` | The date button | Date in format YYYY-MM-DD |\n\n::: tip\n`:intervals:header2` is new since v2.4.0\n:::\n\n::: warning\nThe events `:day` (now `:day:header2`), `:time`, `:interval` and `:date` have been removed in v3.0.0\n:::\n\nThe example below is only showing `click` events as well as the `input` event.\n    ')]),a("example-viewer",{attrs:{title:"Events",file:"DayViewEvents","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Slots"}}),a("q-markdown",[e._v("\nFor slots that return a `timestamp`, it looks like this:\n```js\n{\n  date: '',       // YYYY-MM-DD\n  time: '',       // HH:MM (optional)\n  year: 0,        // YYYY\n  month: 0,       // MM (Jan = 1, etc)\n  day: 0,         // day of the month\n  weekday: 0,     // week day\n  hour: 0,        // 24-hr\n  minute: 0,      // mm\n  doy: 0,         // day of year\n  workweek: 0,    // workweek number\n  hasDay: false,  // if this timestamp is supposed to have a date\n  hasTime: false, // if this timestamp is supposed to have a time\n  past: false,    // if timestamp is in the past (based on `now` property)\n  current: false, // if timestamp is current date (based on `now` property)\n  future: false,  // if timestamp is in the future (based on `now` property)\n  disabled: false // if timestamp is disabled\n}\n```\n\nYou can use the slots `day-header` and `day-body` to control visual aspects of your event system.\nThe example below is using the `day-header` slot to indicate there are events on that day, in case it is not visible, indicating to the user they should scroll down to see the event.\nThe `day-body` slot is used to get information about the date and time of an event and then to calculate where the absolute position of the event based on passed in functions `timeStartPos` and `timeDurationHeight`.\n    ")]),a("example-viewer",{attrs:{title:"day-header with day-body",file:"DayViewSlots","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"head-day",file:"DayViewSlotHeadDay","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nYou can use the scopedSlot `day-container` to set an absolute position for a time tracking bar.\nScroll down if the current time is later for your location to see the example.\n    ")]),a("example-viewer",{attrs:{title:"day-container: Show current time",file:"DayViewCurrentTime","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Customization"}}),a("q-markdown",[e._v("\nYou can create your own themes by overriding various css vars. You do not have to override all of them (as in the next example), just the ones you need. For building your own themes, head on over to the [Theme Builder](../../quasar-ui-qcalendar/theme-builder)\n    ")]),a("example-viewer",{attrs:{title:"Colors",file:"DayViewColors","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Locale Support"}}),a("example-viewer",{attrs:{title:"Locale",file:"DayViewLocale","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}})],1)},s=[],n=a("fe7d"),i=a("8669"),l=a("384e"),r={name:"DayView",components:{ExampleTitle:n["a"]},data:function(){return{tempToc:[],locationUrl:"https://github.com/quasarframework/quasar-ui-qcalendar/tree/dev/demo/src/examples/",jsPaths:["https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qcalendar@".concat(l["c"],"/dist/index.umd.min.js")],cssPaths:["https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qcalendar@".concat(l["c"],"/dist/index.min.css"),"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.12.0/css/all.css"]}},mounted:function(){this.toc=[],this.tempToc=[],this.addToToc("Day View"),this.addToToc("Basic",2),this.addToToc("Dark",2),this.addToToc("3Day",2),this.addToToc("Hide Header",2),this.addToToc("No Scroll",2),this.addToToc("Intervals"),this.addToToc("Interval Height",2),this.addToToc("Interval Count",2),this.addToToc("Interval Minutes (30)",2),this.addToToc("Interval Minutes (15)",2),this.addToToc("Interval Start",2),this.addToToc("Navigation"),this.addToToc("Prev/Next",2),this.addToToc("Swipe",2),this.addToToc("Header"),this.addToToc("Custom Header",2),this.addToToc("Custom Header with Custom Scroll",2),this.addToToc("Column Header",2),this.addToToc("Column Count",2),this.addToToc("Column Header Count",2),this.addToToc("Column Header Count (Paged)",2),this.addToToc("Events"),this.addToToc("Events",2),this.addToToc("Slots"),this.addToToc("day-header with day-body",2),this.addToToc("head-day",2),this.addToToc("day-container: Show current time",2),this.addToToc("Customization"),this.addToToc("Colors",2),this.addToToc("Locale Support"),this.addToToc("Locale",2),this.toc=this.tempToc},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(e){this.$store.commit("common/toc",e)}}},methods:{addToToc:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=e;a=1===t?"title-"+a:"example-"+a;var o=Object(i["b"])(a);this.tempToc.push({children:[],id:o,label:e,level:t})}}},c=r,h=a("2877"),d=Object(h["a"])(c,o,s,!1,null,null,null);t["default"]=d.exports},fe7d:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:e.slugifiedTitle},on:{click:function(t){return e.copyHeading(e.slugifiedTitle)}}},[e._v(e._s(e.title))])},s=[],n=a("8669"),i={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle:function(){return Object(n["b"])("title-"+this.title)}},methods:{copyHeading:n["a"]}},l=i,r=a("2877"),c=Object(r["a"])(l,o,s,!1,null,null,null);t["a"]=c.exports}}]);