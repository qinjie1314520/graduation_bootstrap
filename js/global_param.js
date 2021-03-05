const common = {
    token: "token",
    url: "139.9.87.17"
};

function getUserIP(onNewIP) {
    var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var pc = new myPeerConnection({
            iceServers: []
        }),
        noop = function () {
        },
        localIPs = {},
        ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
        key;

    function iterateIP(ip) {
        if (!localIPs[ip]) onNewIP(ip);
        localIPs[ip] = true;
    }

    pc.createDataChannel("");

    pc.createOffer().then(function (sdp) {
        sdp.sdp.split('\n').forEach(function (line) {
            if (line.indexOf('candidate') < 0) return;
            line.match(ipRegex).forEach(iterateIP);
        });

        pc.setLocalDescription(sdp, noop, noop);
    }).catch(function (reason) {
        // An error occurred, so handle the failure to connect
    });

    //listen for candidate events
    pc.onicecandidate = function (ice) {
        if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
        ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
    };
}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}

function getUserInfo(f) {
    $.ajax({
        type: 'GET',
        url: address_of_the_interface.url_base
            + address_of_the_interface.url_project_user_center.base
            + address_of_the_interface.url_project_user_center.url_selUserInfo,
        headers: {
            Authorization: $.cookie(common.token)
        },
        success: function (res) {
            if (res.code == 200) {
                f(res.datas);
            }
        },
        error: function (e) {
            console.log(e);
        }
    });
};
function getHttp(url,datas,successFunc) {
    $.ajax({
        type: 'GET',
        url:url,
        headers: {
            Authorization: $.cookie(common.token)
        },
        data:datas,
        success: function (res) {
            if (res.code == 200) {
                successFunc(res.datas);
            }else{
                swalInfoAutoClose(res.msg, 1200);
            }
        },
        error: function (e) {
            console.log(e);
        }
    });
};
function getHttpAsync(url,datas,successFunc) {
    $.ajax({
        type: 'GET',
        url:url,
        async:true,
        headers: {
            Authorization: $.cookie(common.token)
        },
        data:datas,
        success: function (res) {
            if (res.code == 200) {
                successFunc(res.datas);
            }else{
                swalInfoAutoClose(res.msg, 1200);
            }
        },
        error: function (e) {
            console.log(e);
        }
    });
};
function postHttp(url,datas,successFunc) {
    $.ajax({
        type: 'POST',
        url:url,
        headers: {
            'Content-Type': 'application/json',
            Authorization: $.cookie(common.token)
        },
        data:JSON.stringify(datas),
        success: function (res) {
            if (res.code == 200) {
                successFunc(res.datas);
            }else{
                swalInfoAutoClose(res.msg, 1000);
            }
        },
        error: function (e) {
            console.log(e);
        }
    });
};
function postHttpAsync(url,datas,successFunc) {
    $.ajax({
        type: 'POST',
        url:url,
        async:true,
        headers: {
            'Content-Type': 'application/json',
            Authorization: $.cookie(common.token)
        },
        data:JSON.stringify(datas),
        success: function (res) {
            if (res.code == 200) {
                successFunc(res.datas);
            }else{
                swalInfoAutoClose(res.msg, 1000);
            }
        },
        error: function (e) {
            console.log(e);
        }
    });
};
function putHttp(url,datas,successFunc) {
    $.ajax({
        type: 'PUT',
        url:url,
        headers: {
            'Content-Type': 'application/json',
            Authorization: $.cookie(common.token)
        },
        data:JSON.stringify(datas),
        success: function (res) {
            if (res.code == 200) {
                successFunc(res.datas);
            }else{
                swalInfoAutoClose(res.msg, 1000);
            }
        },
        error: function (e) {
            console.log(e);
        }
    });
};
function deleteHttp(url,datas,successFunc) {
    $.ajax({
        type: 'DELETE',
        url:url,
        headers: {
            'Content-Type': 'application/json',
            Authorization: $.cookie(common.token)
        },
        data:JSON.stringify(datas),
        success: function (res) {
            if (res.code == 200) {
                successFunc(res.datas);
            }else{
                swalInfoAutoClose(res.msg, 1000);
            }
        },
        error: function (e) {
            console.log(e);
        }
    });
};

const address_of_the_interface = {
    url_base: "http://localhost:30004",
    url_project_authority: {
        base: "/graduation-project-roger-authority",
        url_login: "/authority/login"
    },
    url_project_article: {
        base: "/graduation-project-roger-article",
        url_selArticleType: "/article/home/selArticleType",
        url_selLatestArticle: "/article/home/selLatestArticle",
        url_selHotArticle: "/article/home/selHotArticle",
        url_selDailyRecommendation: "/article/home/selDailyRecommendation",
        url_selDailySentence: "/article/home/selDailySentence",
        url_delPersonBlog: "/article/blog/delPersonBlog",
        url_selPersonBlogList: "/article/blog/selPersonBlogList",
        url_insPersonBlog: "/article/blog/insPersonBlog",
        url_updPersonBlog: "/article/blog/updPersonBlog",
        url_details: "/article/blog/details",
        url_detailsComments: "/article/blog/detailsComments",
        url_detailsRecommend: "/article/blog/detailsRecommend",
        url_comment: "/article/blog/comment",
        url_selArticlePrograma: "/article/home/selArticlePrograma",
        url_selArticleTypePrograma: "/article/home/selArticleTypePrograma",
        url_selCollectList: "/article/collect/selCollectList",
        url_updBlogCollect: "/article/collect/updBlogCollect",
        url_selHistoryBlogList: "/article/history/selHistoryBlogList",
        url_search: "/article/home/search"

    },
    url_project_admin: {
        base: "/graduation-project-roger-admin",
        url_selHomeRotation: "/public/selHomeRotation",
        url_selAnnouncement: "/public/selAnnouncement"
    },
    url_project_user_center: {
        base: "/graduation-project-roger-user-center",
        url_selCarousel: "/person-center/selCarousel",
        url_selSelfIntroduction: "/person-center/selSelfIntroduction",
        url_selLeaveList: "/person-center/selLeaveList",
        url_insLeaveWords: "/person-center/insLeaveWords",
        url_insSelfIntroduction: "/person-center/insSelfIntroduction",
        url_selUserInfo: "/user-center/selUserInfo",
        url_updUserInfo: "/user-center/updUserInfo",
        url_updSelfIntroductionTitle: "/person-center/updSelfIntroduction"
    }
};

/**
 *
 * @param paging 插件在html中的对象
 * @param currentPage 当前页
 * @param totalPages 总页数
 * @param pageSize 页码
 * @param url 接口地址
 * @param datas 接口参数
 * @param getListDatas 得到列表数据的方法函数
 * @param successFunc 得到列表数据的方法函数中成功调用的函数
 */
function setBootstrapPaginator(paging, currentPage, totalPages, pageSize, url, datas, successFunc) {
    paging.bootstrapPaginator({//使用分页插件
        bootstrapMajorVersion: 3,
        currentPage: currentPage,
        totalPages: totalPages,
        alignment: "center",
        size: "normal",
        itemTexts: function (type, page, current) {
            switch (type) {
                case "first":
                    return "首页";
                case "prev":
                    return "上一页";
                case "next":
                    return "下一页";
                case "last":
                    return "末页";
                case "page":
                    return page;
            }
        },
        onPageClicked: function (event, originalEvent, type, page) {
            //currentPage,pageSize,url,data,successFunc,isFirst
            datas.pageNum = page;
            //当前页 页大小 地址 参数 成功的调用方法 首次进入初始化分页插件
            getPagingList(url, datas, successFunc, false);
        }
    });
}

function getPagingList( url, datas, successFunc, isFirst) {
    $.ajax({
        type: 'GET',
        url: url,
        headers: {
            Authorization: $.cookie(common.token)
        },
        data: datas,
        success: function (res) {
            if (res.code == 200) {
                successFunc(res.datas, isFirst)
            } else {
                swalInfoAutoClose(res.msg, 1000);
            }
        },
        error: function (e) {
            console.log(e);
        }
    });
}
/**
 * 计算总页数
 * @param pageSize 页码
 * @param totalNum 总数
 * @returns {number}
 */
function getTotalPage(pageSize, totalNum) {
    return Math.ceil(totalNum * 1.0 / pageSize);
}

/**
 * 提示确认或者取消的提示框
 * @param title 标题
 * @param text 内容
 * @param confirmFunction 确认的响应函数
 * @param cancelFunction 取消的响应函数
 */
function swalWarningConfirmAndCancel(title, text, confirmFunction, cancelFunction) {
    swal({
        title: title,
        text: text,
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
    }).then(function (isConfirm) {
        if (isConfirm.value === true) {
            confirmFunction();
        } else if (isConfirm.value === false) {
            cancelFunction();
        } else {
        }
    });
}

/**
 * 自动关闭的提示信息
 * @param text 提示信息
 * @param milliSecond 毫秒
 */
function swalInfoAutoClose(text, milliSecond) {
    swal({
        text: text,
        timer: milliSecond
    });
}
