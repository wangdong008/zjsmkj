window.addEventListener('load', function () {
    /* 移动端基础：仅拦截多点触摸缩放，不再拦截单点点击（修复手机端导航点不动的问题） */
    function xf_ios() {
        document.addEventListener('touchstart', function (e) {
            if (e.touches.length > 1) {
                e.preventDefault()
            }
        }, { passive: false })
        document.addEventListener('gesturestart', function (e) {
            e.preventDefault()
        }, { passive: false })
    }
    xf_ios();

    let body = this.document.body
    let xf_nav = body.querySelector('.xf_nav')
    let xf_slither_color = xf_nav.querySelector('.xf_slither_color')
    let xf_site = body.querySelector('.xf_site')
    let xf_about = body.querySelector('.xf_about')
    let xf_wx = body.querySelector('.xf_wx')
    let xf_qq = body.querySelector('.xf_qq')
    let wxImg = body.querySelector('.wxImg')
    let xf_arr = [xf_site, xf_about, xf_wx, xf_qq]
    for (let i = 0; i < xf_nav.children[0].children.length; i++) {
        let lis = xf_nav.children[0].children[i]
        lis.addEventListener('click', function () {
            // 4 个导航统一切换到对应面板：首页/关于/微信/QQ
            xf_slither_color.style.left = i * 25 + '%'
            for (var j = 0; j < xf_arr.length; j++) {
                if (xf_arr[j]) { xf_arr[j].style.display = 'none' }
            }
            if (xf_arr[i]) { xf_arr[i].style.display = 'block' }
        })
    }

    let wxImg2 = this.document.createElement('img')
    let ImgMaski = this.document.createElement('div')
    body.appendChild(wxImg2)
    body.appendChild(ImgMaski)
    wxImg2.src = wxImg.src
    wxImg2.className = 'xf_bigImg'
    ImgMaski.className = 'ImgMaski'
    wxImg.addEventListener('click', function () {
        wxImg2.style.transform = 'translate(-50%, -50%) scale(1)'
        wxImg2.style.zIndex = 2
        ImgMaski.style.display = 'block'
    })
    ImgMaski.addEventListener('click', function () {
        wxImg2.style.transform = 'translate(-50%, -50%) scale(0)'
        wxImg2.style.zIndex = '-100'
        ImgMaski.style.display = 'none'
    })

    // 经营范围：框内横向循环滚动，加载时把文字复制两遍实现无缝（用户只需改一遍文字）
    var _speech = document.querySelector('.xf_speech .type_code');
    if (_speech) {
        var _t = _speech.textContent.trim();
        _speech.textContent = _t + '  ' + _t;
    }

    let xf_mb = body.querySelector('.xf_mb')
    let xf_look = body.querySelector('.xf_look')
    xf_mb.addEventListener('click', function () {
        xf_look.style.top = '35%'
    })
    xf_mb.addEventListener('mouseout', function (e) {
        xf_look.style.top = '100%'
    })

    this.document.addEventListener('contextmenu', function (e) {
        e.preventDefault()
        // 右键弹出名片
        var card = document.getElementById('myCard')
        if (card) {
            card.classList.add('show')
        }
    })
    xf_off == true ? document.body.className = 'gradient_move' : document.body.className = ''
});

/* 名片弹窗：关闭（点遮罩或按钮） */
function closeCard() {
    var card = document.getElementById('myCard')
    if (card) card.classList.remove('show')
}
document.addEventListener('click', function (e) {
    var card = document.getElementById('myCard')
    if (card && e.target === card) card.classList.remove('show')
})

/* 首页卡片：奇数项加圆角样式 */
let li_site = document.querySelector('.li_site')
if (li_site && li_site.children.length) {
    li_site.children.length % 2 != 0 ? li_site.children[li_site.children.length - 1].className = 'site_odd' : ''
}
setTimeout(function () {
    let xf_dd = new Date().getTime()
    let days = xf_dd - xf_timer
    let number_of_days = parseInt(days / (1000 * 60 * 60 * 24))
    $("#xf_timer")[0].innerHTML = number_of_days + '天'
}, 1);

/* 导航卡片「立即打开」按钮：点击触发震动；跳转由 <a href> 原生完成（微信/浏览器通用） */
function openNav(el) {
    el.classList.remove('shake');
    void el.offsetWidth;
    el.classList.add('shake');
    setTimeout(function () { el.classList.remove('shake') }, 420);
}
