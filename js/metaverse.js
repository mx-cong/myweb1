
//分页
function goPage(pno, psize) {
    var itable = document.getElementById("pcon");
    var num = itable.children.length;//表格所有行数(所有记录数)
    console.log(num);
    var totalPage = 0;//总页数
    var pageSize = psize;//每页显示行数
    //总共分几页
    if (num / pageSize > parseInt(num / pageSize)) {
        totalPage = parseInt(num / pageSize) + 1;
    } else {
        totalPage = parseInt(num / pageSize);
    }
    var currentPage = pno;//当前页数
    var startRow = (currentPage - 1) * pageSize + 1;//开始显示的行 31
    var endRow = currentPage * pageSize;//结束显示的行  40
    endRow = (endRow > num) ? num : endRow;  //40
    console.log(endRow);
    //遍历显示数据实现分页
    for (var i = 1; i < (num + 1); i++) {
        var irow = itable.children[i - 1];
        if (i >= startRow && i <= endRow) {
            irow.style.display = "block";
        } else {
            irow.style.display = "none";
        }
    }

    var tempStr = '';

    if (currentPage > 1) {
        tempStr += "<span style='cursor:pointer' onClick=\"goPage(" + (1) + "," + psize + ")\">首页</span>";
        tempStr += "<span style='cursor:pointer' onClick=\"goPage(" + (currentPage - 1) + "," + psize + ")\"><上一页</span>"
    } else {
        tempStr += "首页";
        tempStr += "<上一页";
    }
    if (currentPage < totalPage) {
        tempStr += "<span style='cursor:pointer' onClick=\"goPage(" + (currentPage + 1) + "," + psize + ")\">下一页></span>";
        tempStr += "<span style='cursor:pointer' onClick=\"goPage(" + (totalPage) + "," + psize + ")\">尾页</span>";
    } else {
        tempStr += "下一页>";
        tempStr += "尾页";
    }
    var tempStr2 = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;共" + num + "条记录&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "当前第" + currentPage + "页&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;共" + totalPage + "页";
    tempStr += tempStr2;

    document.getElementById("barcon").innerHTML = tempStr;
}

window.onload = function () {
    //返回顶部
    var gotoTop = document.getElementById('gotoTop');
    gotoTop.onclick = function () {
        let timer6 = setInterval(function () {
            let topheight = document.body.scrollTop || document.documentElement.scrollTop;
            // document.documentElement.scrollTop. = '300ms';
            let jtop = Math.floor(-topheight / 10);//滑动的距离
            document.documentElement.scrollTop = document.body.scrollTop = topheight + jtop;
            if (topheight == 0) {
                clearInterval(timer6)
            }
        }, 30)
    }

    //鼠标移入显示二维码
    var er = document.getElementById('er')
    var imger = document.getElementById('imger')
    er.onmouseenter = function () {
        imger.style.display = 'inline-block'
    }
    er.onmouseleave = function () {
        imger.style.display = 'none'
    }
    goPage(1, 10);
}
