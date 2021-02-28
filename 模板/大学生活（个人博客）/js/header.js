const header = {
   html:"<!-- nav部分 -->\n" +
       "  <div class=\"nav index\">\n" +
       "    <div class=\"layui-container\">\n" +
       "      <!-- logo -->\n" +
       "      <div class=\"nav-logo\">\n" +
       "        <a href='../home.html'>\n" +
       "          <img src='res/static/img/logoko.png' width=\"200px\" height=\"80px\" alt=\"个人博客\">\n" +
       "        </a>\n" +
       "      </div>\n" +
       "      <div class=\"nav-list\">\n" +
       "        <button>\n" +
       "          <span></span><span></span><span></span>\n" +
       "        </button>\n" +
       "        <ul class=\"layui-nav\" id='header_nav' lay-filter=\"\">\n" +
       "          <li class=\"layui-nav-item layui-this\"><a id='home' href=\"home.html\">首页</a></li>\n" +
       "          <li class=\"layui-nav-item\"><a id='self-introduction' href=\"self-introduction.html\">自我介绍</a></li>\n" +
       "          <li class=\"layui-nav-item \"><a id='blog' href=\"blog.html\">个人博客</a></li>\n" +
       "          <li class=\"layui-nav-item\"><a id='leave-word' href=\"leave-word.html\">留言板</a></li>\n" +
       "        </ul>\n" +
       "      </div>\n" +
       "    </div>\n" +
       "  </div>",
   init: function (userId) {
      const currentHref = window.location.href;
      $('#header_nav').children().removeClass("layui-this");
      if (currentHref.endsWith("home.html") || currentHref.endsWith("home.html", currentHref.indexOf("?"))) {
         $('#header_nav').children().eq(0).addClass('layui-this');
      } else if (currentHref.endsWith("self-introduction.html") || currentHref.endsWith("self-introduction.html", currentHref.indexOf("?"))) {
         $('#header_nav').children().eq(1).addClass('layui-this');
      } else if (currentHref.endsWith("blog.html") || currentHref.endsWith("blog.html", currentHref.indexOf("?"))) {
         $('#header_nav').children().eq(2).addClass('layui-this');
      } else if (currentHref.endsWith("leave-word.html") || currentHref.endsWith("leave-word.html", currentHref.indexOf("?"))) {
         $('#header_nav').children().eq(3).addClass('layui-this');
      }
      $("#home").attr("href","home.html?id="+userId);
      $("#self-introduction").attr("href","self-introduction.html?id="+userId);
      $("#blog").attr("href","blog.html?id="+userId);
      $("#leave-word").attr("href","leave-word.html?id="+userId);
   }
};