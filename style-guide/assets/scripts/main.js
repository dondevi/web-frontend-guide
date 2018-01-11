/**
 * =============================================================================
 *  Web前端规范系列
 * =============================================================================
 *
 *  包括代码风格、编程实践
 *
 * =============================================================================
 *
 * @author dondevi
 * @create 2014-06-25
 *
 * @update 2017-04-12 dondevi
 * @update 2018-01-11 dondevi
 *   1.Add: Disqus
 *
 */

(function (window, document) {

  // 滚动监听导航
  window.scrollSpy({ anchorSelector: ".menu-item > a[href^=\"#\"]" });
  window.scrollSpy({ anchorSelector: ".menu-sub > li > a[href^=\"#\"]" });

  // Disqus 评论
  var disqusBtn = document.getElementById("btn-disqus");
  var disqusDiv = null;
  disqusBtn.onclick = function (event) {
    disqusDiv = injectDisqus();
    disqusBtn.classList.add("open");
    disqusBtn.onclick = function (event) {
      disqusBtn.classList.toggle("open");
      disqusDiv.classList.toggle("hide");
    };
  };

  document.body.addEventListener("click", function (event) {
    if (disqusDiv && !event.target.closest("#btn-disqus") &&
        !event.target.closest("#disqus_thread")) {
      disqusBtn.classList.remove("open");
      disqusDiv.classList.add("hide");
    }
  });

  function injectDisqus () {
    var d = document.createElement("div");
    d.setAttribute("id", "disqus_thread");
    document.body.appendChild(d);

    var s = document.createElement("script");
    s.src = "https://dondevi-github-io.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    document.body.appendChild(s);

    return d;
  }

})(window, document);
