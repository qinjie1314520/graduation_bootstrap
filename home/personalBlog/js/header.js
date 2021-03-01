const header = {
    html: "<div class=\"nav index\" style='background-color:white !important;'>\n" +
        "  <div class=\"layui-container\">\n" +
        "    <!-- logo -->\n" +
        "    <div class=\"nav-logo\">\n" +
        "      <a href=\"home.html\">\n" +
        "        <img src=\"res/static/img/logoko.png\" width=\"200px\" height=\"80px\" alt=\"个人博客\">\n" +
        "      </a>\n" +
        "    </div>\n" +
        "    <div class=\"nav-list\">\n" +
        "      <button>\n" +
        "        <span></span><span></span><span></span>\n" +
        "      </button>\n" +
        "      <ul class=\"layui-nav\" lay-filter=\"\" id=\"header_nav\">\n" +
        "        <li class=\"layui-nav-item\"><a href=\"home.html\" id='home'>首页</a></li>\n" +
        "        <li class=\"layui-nav-item\"><a href=\"self-introduction.html\" id='self-introduction'>自我介绍</a></li>\n" +
        "        <li class=\"layui-nav-item \"><a href=\"blog.html\" id='blog'>个人博客</a></li>\n" +
        "        <li class=\"layui-nav-item\"><a href=\"leave-word.html\" id='leave-word'>留言板</a></li>\n" +
        "        <li class=\"layui-nav-item\"><a href=\"person-center.html\" id='person-center' style='display: none'>个人信息</a></li>\n" +
        "      </ul>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "</div>",
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
        } else if (currentHref.endsWith("person-center.html") || currentHref.endsWith("person-center.html", currentHref.indexOf("?"))) {
            $('#header_nav').children().eq(4).addClass('layui-this');
        }
        $("#home").attr("href", "home.html?id=" + userId);
        $("#self-introduction").attr("href", "self-introduction.html?id=" + userId);
        $("#blog").attr("href", "blog.html?id=" + userId);
        $("#leave-word").attr("href", "leave-word.html?id=" + userId);
        $("#person-center").attr("href", "person-center.html?id=" + userId);
        getUserInfo(function (userInfo) {
            if (userInfo.id+"" === userId) {
                $('#person-center').show();
            }
        })

    }
};