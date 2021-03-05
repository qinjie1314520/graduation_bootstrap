const header = {
    html:"<header class=\"header\">\n" +
        "    <nav class=\"navbar navbar-default\" id=\"navbar\">\n" +
        "        <div class=\"container\">\n" +
        "            <div class=\"header-topbar hidden-xs link-border\">\n" +
        "                <ul  class=\"site-nav topmenu\">\n" +
        "                    <li><a href=\"tags.html\">标签云</a></li>\n" +
        "                    <li><a href=\"readers.html\" rel=\"nofollow\">读者墙</a></li>\n" +
        "                    <li><a href=\"links.html\" rel=\"nofollow\">友情链接</a></li>\n" +
        "                    <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\"\n" +
        "                                            aria-haspopup=\"true\" aria-expanded=\"false\" rel=\"nofollow\">关注本站 <span\n" +
        "                            class=\"caret\"></span></a>\n" +
        "                        <ul class=\"dropdown-menu header-topbar-dropdown-menu\">\n" +
        "                            <li><a data-toggle=\"modal\" data-target=\"#WeChat\" rel=\"nofollow\"><i class=\"fa fa-weixin\"></i>\n" +
        "                                微信</a></li>\n" +
        "                            <li><a href=\"#\" rel=\"nofollow\"><i class=\"fa fa-weibo\"></i> 微博</a></li>\n" +
        "                            <li><a data-toggle=\"modal\" data-target=\"#areDeveloping\" rel=\"nofollow\"><i\n" +
        "                                    class=\"fa fa-rss\"></i> RSS</a></li>\n" +
        "                        </ul>\n" +
        "                    </li>\n" +
        "                </ul>\n" +
        "                <div id=\"loginDiv\">\n" +
        "                                        <a data-toggle=\"modal\" data-target=\"#loginModal\" class=\"login\" rel=\"nofollow\">Hi,请登录</a>&nbsp;&nbsp;\n" +
        "                                        <a href=\"javascript:;\" class=\"register\" rel=\"nofollow\" data-toggle=\"modal\"\n" +
        "                                           data-target=\"#registerModal\">我要注册</a>\n" +
        "                                        <a href=\"\" rel=\"nofollow\">找回密码</a>\n" +
        "                </div>\n" +
        "                <div id=\"loginSuccessDiv\" style=\"display:none\">\n" +
        "                  <img alt=\"test\" src=\"../images/weixin.jpg\" class=\"img-circle\" style=\"vertical-align:middle;width:30px; height:30px;\">\n" +
        "                  <a href=\"\" rel=\"nofollow\" id=\"loginSuccessUsername\">欢迎登陆：roger</a>\n" +
        "                  <a href=\"\" rel=\"nofollow\" id=\"loginSuccessLogout\">退出</a>\n" +
        "                </div>\n" +
        "\n" +
        "            </div>\n" +
        "            <div class=\"navbar-header\">\n" +
        "                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\n" +
        "                        data-target=\"#header-navbar\" aria-expanded=\"false\"><span class=\"sr-only\"></span> <span\n" +
        "                        class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button>\n" +
        "                <h1 class=\"logo hvr-bounce-in\"><a href=\"Home.html\" title=\"\"><img src=\"../images/logo.png\" alt=\"\"></a></h1>\n" +
        "            </div>\n" +
        "            <div class=\"collapse navbar-collapse\" id=\"header-navbar\">\n" +
        "                <ul class=\"nav navbar-nav navbar-right\">\n" +
        "                    <form class=\"navbar-form\" >\n" +
        "                        <div class=\"input-group\">\n" +
        "                            <input type=\"text\" name=\"keyword\" class=\"form-control\" placeholder=\"请输入关键字搜索文章\" maxlength=\"20\"\n" +
        "                                   autocomplete=\"off\" style=\"width: 250px\">\n" +
        "                            <span class=\"input-group-btn\">\n" +
        "                      <button class=\"btn btn-default btn-search\" id=\"search\" type=\"button\">搜索</button>\n" +
        "                      </span></div>\n" +
        "                    </form>\n" +
        "                </ul>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </nav>\n" +
        "</header>",
    loginModel:
        "<div class=\"modal fade user-select\" id=\"loginModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"loginModalLabel\">\n" +
        "  <div class=\"modal-dialog\" role=\"document\">\n" +
        "    <div class=\"modal-content\">\n" +
        "      <form>\n" +
        "        <div class=\"modal-header\">\n" +
        "          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n" +
        "                  aria-hidden=\"true\">&times;</span></button>\n" +
        "          <h4 class=\"modal-title\" id=\"loginModalLabel\">登录</h4>\n" +
        "        </div>\n" +
        "        <div class=\"modal-body\">\n" +
        "          <div class=\"form-group\">\n" +
        "            <label for=\"loginModalUserNmae\">用户名</label>\n" +
        "            <input type=\"text\" class=\"form-control\" id=\"loginModalUserNmae\" placeholder=\"请输入用户名\" autofocus\n" +
        "                   maxlength=\"15\" autocomplete=\"off\" required>\n" +
        "          </div>\n" +
        "          <div class=\"form-group\">\n" +
        "            <label for=\"loginModalUserPwd\">密码</label>\n" +
        "            <input type=\"password\" class=\"form-control\" id=\"loginModalUserPwd\" placeholder=\"请输入密码\"\n" +
        "                   maxlength=\"18\" autocomplete=\"off\" required>\n" +
        "          </div>\n" +
        "        </div>\n" +
        "        <div class=\"modal-footer\">\n" +
        "          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">取消</button>\n" +
        "          <button type=\"button\" class=\"btn btn-primary\" id=\"login\">登录</button>\n" +
        "        </div>\n" +
        "      </form>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "</div>",
    registerModel:
    "<div class=\"modal fade user-select\" id=\"registerModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"registerModalLabel\">\n" +
        "    <div class=\"modal-dialog\" role=\"document\">\n" +
        "        <div class=\"modal-content\">\n" +
        "            <form action=\"/Admin/Index/login\" method=\"post\">\n" +
        "                <div class=\"modal-header\">\n" +
        "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n" +
        "                            aria-hidden=\"true\">&times;</span></button>\n" +
        "                    <h4 class=\"modal-title\">注册</h4>\n" +
        "                </div>\n" +
        "                <div class=\"modal-body\">\n" +
        "                    <div class=\"form-group\">\n" +
        "                        <label for=\"loginModalUserNmae\">用户名</label>\n" +
        "                        <input type=\"text\" class=\"form-control\" id=\"registerModalUserNmae\" placeholder=\"请输入用户名\"\n" +
        "                               autofocus maxlength=\"15\" autocomplete=\"off\" required>\n" +
        "                    </div>\n" +
        "                    <div class=\"form-group\">\n" +
        "                        <label for=\"loginModalUserPwd\">密码</label>\n" +
        "                        <input type=\"password\" class=\"form-control\" id=\"registerModalUserPwd\" placeholder=\"请输入密码\"\n" +
        "                               maxlength=\"18\" autocomplete=\"off\" required>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"modal-footer\">\n" +
        "                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">取消</button>\n" +
        "                    <button type=\"button\" id=\"register\" class=\"btn btn-primary\">注册</button>\n" +
        "                </div>\n" +
        "            </form>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</div>\n",
    init: function () {
        $('#login').click(function () {

            //获得用户名
            let username = $('#loginModalUserNmae').val();
            let password = $('#loginModalUserPwd').val();
            // $.cookie("username", username, {
            //     //cookies信息的有效时常（7天）。
            //     expires: 7
            // });
            // $.cookie("password", password, {
            //     //cookies信息的有效时常（7天）。
            //     expires: 7
            // });
            let json = {
                username: username,
                password: password,
                loginType: 1
            };
            $.ajax({
                type: 'POST',
                url: address_of_the_interface.url_base
                    + address_of_the_interface.url_project_authority.base
                    + address_of_the_interface.url_project_authority.url_login,
                dataType: "json",
                headers: {'Content-Type': 'application/json'},
                data: JSON.stringify(json),
                success: function (res) {
                    if (res.code != 200) {
                        swal({
                            text: res.msg
                        });
                    } else {
                        //登陆成功保存jwt
                        $.cookie(common.token, res.datas, {
                            //cookies信息的有效时常（7天）。
                            expires: 7
                        });
                        swal({
                            text: "登陆成功！",
                            timer: 1000
                        });
                        window.location.reload();
                    }
                }
            });
        });
        $('#loginSuccessLogout').click(function () {
            $.cookie(common.token,"", {
                expires: -1
            });
        });
        $('#register').click(function () {
            //获得用户名
            let username = $('#registerModalUserNmae').val();
            let password = $('#registerModalUserPwd').val();
            Swal(username+""+password);
        });
        getUserInfo(function (userInfo) {
            //隐藏登陆标签
            $("#loginDiv").hide();
            //显示登陆成功的标签页
            $('#loginSuccessDiv').show();
            //设置登陆成功标签页的名称
            $('#loginSuccessUsername').text(userInfo.name);
            $('#loginSuccessProfile').attr("src",userInfo.profile);
        })
    }
};
