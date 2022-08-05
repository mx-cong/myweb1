
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
}