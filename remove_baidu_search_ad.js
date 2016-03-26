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

// @compatible        chrome 49.0.2623.75 + TamperMonkey + 脚本_0.1.2 测试通过
// @compatible        firefox 未测试
// @compatible        opera 未测试
// @compatible        safari 未测试

// @author            Cat73
// @version           0.1.2
// @license           LGPLv3

// @match             http://*.baidu.com/*
// @match             https://*.baidu.com/*
// @grant             none
// @run-at            document-end
// ==/UserScript==
'use strict';

function clearLoop() {
    var result_div = document.getElementById("content_left");
    if(result_div) {
        var nodes = result_div.childNodes;
        for(var id in nodes) {
            var current = nodes[id];
            if(current.nodeName == "DIV") {
                if(current.className.indexOf("result") == -1) {
                    current.innerHTML = "";
                    current.style.display = "none";
                    break;
                }
            }
        }
    }
}

setInterval(clearLoop, 500);
