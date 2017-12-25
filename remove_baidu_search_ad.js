// ==UserScript==
// @namespace         https://www.github.com/Cat7373/

// @name              移除百度搜索的广告
// @name:en           Remove Baidu Search AD
// @name:zh           移除百度搜索的广告
// @name:zh-CN        移除百度搜索的广告

// @description       移除百度搜索的广告如搜索结果里的百度推广
// @description:en    Remove Baidu search advertising such as search results, Baidu Promotion
// @name:zh           移除百度搜索的广告如搜索结果里的百度推广
// @name:zh-CN        移除百度搜索的广告如搜索结果里的百度推广

// @homepageURL       https://github.com/Cat7373/remove-baidu-search-ad/
// @supportURL        https://github.com/Cat7373/remove-baidu-search-ad/issues/
// @updateURL         https://raw.githubusercontent.com/Cat7373/remove-baidu-search-ad/master/remove_baidu_search_ad.js

// @compatible        chrome 49.0.2623.75 + TamperMonkey + 脚本 0.1.5 测试通过
// @compatible        firefox 未测试
// @compatible        opera 未测试
// @compatible        safari 未测试

// @author            Cat73
// @version           0.1.5
// @license           LGPLv3

// @match             http://www.baidu.com/s*
// @match             https://www.baidu.com/s*
// @grant             none
// @run-at            document-end
// ==/UserScript==
'use strict';

function clearBaiduSearchAD () {
    // 移除网页右边的推广
    var div = document.getElementById("ec_im_container");
    if (div) {
        div.parentNode.removeChild(div);
    }

    // 移除搜索结果头部与尾部的推广
    Array.prototype.forEach.call(document.body.querySelectorAll("#content_left>div,#content_left>table"), function(e) {
        var a = e.getAttribute("style");
        if (a && /display:(table|block)\s!important/.test(a)) {
            e.parentNode.removeChild(e);
        }
    });
}
// ==UserScript==
// @namespace         https://www.github.com/Cat7373/

// @name              移除百度搜索的广告
// @name:en           Remove Baidu Search AD
// @name:zh           移除百度搜索的广告
// @name:zh-CN        移除百度搜索的广告

// @description       移除百度搜索的广告如搜索结果里的百度推广
// @description:en    Remove Baidu search advertising such as search results, Baidu Promotion
// @name:zh           移除百度搜索的广告如搜索结果里的百度推广
// @name:zh-CN        移除百度搜索的广告如搜索结果里的百度推广

// @homepageURL       https://github.com/Cat7373/remove-baidu-search-ad/
// @supportURL        https://github.com/Cat7373/remove-baidu-search-ad/issues/

// @compatible        chrome 49.0.2623.75 + TamperMonkey + 脚本 0.1.5 测试通过
// @compatible        firefox 未测试
// @compatible        opera 未测试
// @compatible        safari 未测试

// @author            Cat73
// @version           0.1.5
// @license           LGPLv3

// @match             http://www.baidu.com/s*
// @match             https://www.baidu.com/s*
// @grant             none
// @run-at            document-end
// ==/UserScript==
'use strict';

function clearBaiduSearchAD () {
    // 移除网页右边的推广
    var div = document.getElementById("ec_im_container");
    if (div) {
        div.parentNode.removeChild(div);
    }

    // 移除搜索结果头部与尾部的推广
    Array.prototype.forEach.call(document.body.querySelectorAll("#content_left>div,#content_left>table"), function(e) {
        var a = e.getAttribute("style");
        if (a && /display:(table|block)\s!important/.test(a)) {
            e.parentNode.removeChild(e);
        }
    });
  
   // 移除搜索结果头部与尾部的推广Jackie
    Array.prototype.forEach.call(document.body.querySelectorAll(".c-container /deep/ .c-container"), function(e) {         
            e.parentNode.removeChild(e);         
    });
}
bds.ready(function(){
    clearBaiduSearchAD();
    document.getElementById("su").addEventListener('click', function() {
        setTimeout(clearBaiduSearchAD, 800);
    }, false);
    document.getElementById("kw").addEventListener('keyup', function() {
        setTimeout(clearBaiduSearchAD, 800);
    }, false);
});
 
