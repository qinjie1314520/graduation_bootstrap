const announcement = {
    html:"<aside class=\"sidebar\">\n" +
        "      <div class=\"fixed\">\n" +
        "        <div class=\"widget widget-tabs\">\n" +
        "          <ul class=\"nav nav-tabs\" role=\"tablist\">\n" +
        "            <li role=\"presentation\" class=\"active\"><a href='#notice' aria-controls=\"notice\" role=\"tab\" data-toggle=\"tab\">网站公告</a></li>\n" +
        "            <li role=\"presentation\"><a href=\"#centre\" aria-controls=\"centre\" role=\"tab\" data-toggle=\"tab\">会员中心</a></li>\n" +
        "            <li role=\"presentation\"><a href=\"#contact\" aria-controls=\"contact\" role=\"tab\" data-toggle=\"tab\">联系站长</a></li>\n" +
        "          </ul>\n" +
        "          <div class=\"tab-content\">\n" +
        "            <div role=\"tabpanel\" class=\"tab-pane notice active\" id=\"notice\">\n" +
        "              <ul  id=\"announcement\">\n" +
        "              </ul>\n" +
        "            </div>\n" +
        "            <div role=\"tabpanel\" class=\"tab-pane centre\" id=\"centre\">\n" +
        "              <h4>需要登录才能进入会员中心</h4>\n" +
        "              <p> <a href=\"javascript:;\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#loginModal\" id=\"announcementLogin\">立即登录</a> <a href=\"javascript:;\" class=\"btn btn-default\" data-toggle=\"modal\"\n" +
        "                                           data-target=\"#registerModal\" id=\"announcementRegister\">现在注册</a> </p>\n" +
        "            </div>\n" +
        "            <div role=\"tabpanel\" class=\"tab-pane contact\" id=\"contact\">\n" +
        "              <h2>Email:<br />\n" +
        "                <a href=\"mailto:admin@ylsat.com\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"admin@ylsat.com\">admin@ylsat.com</a></h2>\n" +
        "            </div>\n" +
        "          </div>\n" +
        "        </div>\n" +
        "      </div>\n" +
        "      <div class=\"widget widget_sentence\">\n" +
        "        <h3 >每日一句</h3>\n" +
        "        <div id=\"dailySentence\"></div>\n" +
        "      </div>\n" +
        "      <div class=\"widget widget_hot\">\n" +
        "        <h3>热门文章</h3>\n" +
        "        <ul id=\"hotArticle\">\n" +
        "        </ul>\n" +
        "      </div>\n" +
        "    </aside>",
    init: function () {
        //每日一句
        $.ajax({
            type: 'GET',
            url: address_of_the_interface.url_base
                + address_of_the_interface.url_project_article.base
                + address_of_the_interface.url_project_article.url_selDailySentence,
            success: function (res) {
                if (res.code != 200) {
                    swal({
                        text: res.msg
                    });
                } else {
                    let html = " <div class=\"widget-sentence-content\">\n" +
                        "                <h4>" + res.datas.createTime + "</h4>\n" +
                        "                <p>" + res.datas.content + "</p>\n" +
                        "            </div>";
                    $('#dailySentence').html(html);

                }
            }
        });
        //最热文章
        $.ajax({
            type: 'GET',
            url: address_of_the_interface.url_base + address_of_the_interface.url_project_article.base + address_of_the_interface.url_project_article.url_selHotArticle,
            success: function (res) {
                if (res.code != 200) {
                    swal({
                        text: res.msg
                    });
                } else {
                    let html = "";
                    res.datas.forEach((item, index, array) => {
                        html += " <li><a href='ArticleDetails.html?id="+item.id+"'><span class=\"thumbnail\"><img class=\"thumb\" data-original=\"images/excerpt.jpg\"\n" +
                            "                                                            src=\"" + item.imageUrl + "\" alt=\"\"></span><span class=\"text\">" + item.title + "</span><span\n" +
                            "                        class=\"muted\"><i class=\"glyphicon glyphicon-time\"></i> " + item.title + " </span><span class=\"muted\"><i\n" +
                            "                        class=\"glyphicon glyphicon-eye-open\"></i> " + item.viewingTimes + "</span></a></li>";
                    });
                    $('#hotArticle').html(html);

                }
            }
        });

        getHttp(address_of_the_interface.url_base
            + address_of_the_interface.url_project_admin.base
            + address_of_the_interface.url_project_admin.url_selAnnouncement
            , {pageSize: 5, pageNum: 1}
            , function (datas) {
                var html = '';
                datas.list.forEach(function (item) {
                    html += "<li>\n" +
                        "                  <time datetime=\"2016-01-04\">"+item.createTime+"</time>\n" +
                        "                  <a href=\"\" target=\"_blank\">"+item.content+"</a></li>\n" +
                        "                <li>";
                });
                $('#announcement').html(html);
            });
        getUserInfo(function (userInfo) {
            $('#centre').html("<div class=\"row\">\n" +
                "                            <div class=\"col-md-2 col-md-offset-3\">\n" +
                "                                <h4>"+userInfo.name+"</h4>\n" +
                "                            </div>\n" +
                "                            <div class=\"col-md-4\">\n" +
                "                                <img src='"+userInfo.profile+"' style=\"width:60px; height:60px;\"\n" +
                "                                     class=\"img-responsive center-block img-circle\" id=\"images\"/>\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                      <div class=\"row\">\n" +
                "                        <p><a href='personalBlog/home.html?id="+userInfo.id+"' class=\"btn btn-primary\">我的博客</a>\n" +
                "                          <a href='personalBlog/person-center.html?id="+userInfo.id+"&selected=collect' class=\"btn btn-default\">收藏夹</a>\n" +
                "                          <a href='personalBlog/person-center.html?id="+userInfo.id+"&selected=history' class=\"btn btn-default\">历史记录</a>\n" +
                "                        </p>\n" +
                "                      </div>");
        })


    }
};
