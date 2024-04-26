// 这里编写自定义js脚本；将被静态引入到页面中
<script>
window.ga_tid = 'Your google_site_id';
(function() {
var dga = document.createElement("script");
dga.src = "https://rmt.dogedoge.com/fetch/public/ga.js";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(dga, s);
})();
</script>
<script src="http://yui.yahooapis.com/2.8.0r4/build/yahoo-dom-event/
yahoo-dom-event.js"></script>
<script src="http://yui.yahooapis.com/2.8.0r4/build/container/
container_core-min.js"></script>
<script src="http://yui.yahooapis.com/2.8.0r4/build/menu/menu-min.js"></script>
<script src="http://yui.yahooapis.com/2.8.0r4/build/element/element-min.js"></script>
<script src="http://yui.yahooapis.com/2.8.0r4/build/button/button-min.js"></script>
<script src="http://yui.yahooapis.com/2.8.0r4/build/editor/editor-min.js"></script>
<script type="text/javascript"  src="HttpCombiner.ashx?s=jQueryScripts&t=text/javascript&v=1"></script>
