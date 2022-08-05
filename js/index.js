window.onload = function () {
    //右侧图标
    var er = document.getElementById('er')
    var imger = document.getElementById('imger')
    er.onmouseenter = function () {
        imger.style.display = 'inline-block'
    }
    er.onmouseleave = function () {
        imger.style.display = 'none'
    }

    //头部大轮播
    var box = document.getElementsByClassName('box');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var lb = document.getElementsByClassName('lunbo');

    var timer;
    var num = -1;
    function go2() {
        if (num == 0) {
            box[0].style.transform = 'translateX(' + -0 * 678 + 'px)';
            box[0].style.transitionDuration = '0ms';
        } else {
            box[0].style.transform = 'translateX(' + -num * 678 + 'px)';
            box[0].style.transitionDuration = '300ms';
        }

    }
    function go() {
        timer = setInterval(function () {
            num++
            if (num == 7) { num = 0 }
            go2()
        }, 1800)
    }
    go()

    lb[0].onmouseenter = function () {
        clearInterval(timer)
    }
    lb[0].onmouseleave = function () {
        go()
    }
    //左点击
    left.onclick = function () {
        num--;
        if (num == -1) { num = 5 }
        box[0].style.transform = 'translateX(' + -num * 678 + 'px)';
        box[0].style.transitionDuration = '500ms';
    }
    //右点击
    right.onclick = function () {
        num++;
        if (num == 6) { num = 0 }
        box[0].style.transform = 'translateX(' + -num * 678 + 'px)';
        box[0].style.transitionDuration = '500ms';
    }

    //中心图片轮播
    var imgbox = document.getElementById('img-box1');

    var timer2;
    var n = -1;
    function go1() {
        if (n == 0) {
            imgbox.style.transform = `translateX(${-0 * 299}px)`;
            imgbox.style.transitionDuration = '0ms'
        } else {
            imgbox.style.transform = `translateX(${-n * 299}px)`;
            imgbox.style.transitionDuration = '300ms'
        }
    }
    timer2 = setInterval(function () {
        n++;
        if (n == 4) n = 0;
        go1()
    }, 1800)

    //中心文字轮播
    var fbox = document.getElementById('f-box');
    var q = -1;
    var timer3;
    timer3 = setInterval(function () {
        q++
        if (q == 3) {
            fbox.style.transform = `translateX(${-0 * 800}px)`
            q = -1
        } else {
            fbox.style.transform = `translateX(${-q * 800}px)`
        }

    }, 1800
    )

    //时事热点图片轮播
    var hotbox = document.getElementById('hotimgbox');
    var hotboxc = document.getElementById('hotimgbox').children;
    var timer4;
    var num2;
    num2 = 0;
    timer4 = setInterval(function () {
        num2++;
        if (num2 == 4) { num2 = 0 }
        for (var i = 0; i < hotboxc.length; i++) {
            hotboxc[i].removeAttribute('class');
        }
        hotbox.style.transform = `translateX(${-num2 * 85}px)`;
        hotboxc[num2 + 1].setAttribute('class', 'big');
    }, 2000)

    //时事热点文字轮播
    var hotbox2 = document.getElementsByClassName('font-box')
    var timer5;
    var num3;
    num3 = 0;
    timer5 = setInterval(function () {
        num3++
        if (num3 == 4) { num3 = 0 }
        hotbox2[0].style.transform = `translateX(${-num3 * 285}px)`;
    }, 2000)
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



}
