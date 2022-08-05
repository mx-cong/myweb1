window.onload = function () {
    var sp = document.getElementsByTagName('span')
    var box = document.getElementsByTagName('section')

    for (var i = 0; i < sp.length; i++) {
        sp[i].setAttribute('index', i)

        sp[i].onclick = function () {
            var t = this.getAttribute('index')
            console.log(t)
            for (j = 0; j < sp.length - 2; j++) {
                sp[j].removeAttribute('class')
                box[j].removeAttribute('class')
            }
            box[t].setAttribute('class', 'dis')
            this.setAttribute('class', 'dis')
        }
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