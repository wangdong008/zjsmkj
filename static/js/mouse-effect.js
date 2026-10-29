/* 自定义鼠标光标：水滴 💧（仅电脑/触控板生效，手机触摸屏自动跳过） */
(function () {
    if (!window.matchMedia || !window.matchMedia('(hover: hover)').matches) return;

    // 隐藏全站系统箭头（输入框保留，方便打字）
    var css = document.createElement('style');
    css.textContent = 'html,body,a,button,span,div,li,img,svg,p,h1,h2,h3,h4,h5,strong{ cursor:none !important; } input,textarea{cursor:auto !important; }';
    document.head.appendChild(css);

    // 手指图案跟随鼠标
    var el = document.createElement('div');
    el.setAttribute('aria-hidden', 'true');
    el.style.cssText = [
        'position:fixed;left:0;top:0;',
        'font-size:26px;line-height:1;',
        'pointer-events:none;z-index:99999;',
        'transform:translate(-8px,-10px);',
        'filter:drop-shadow(0 2px 4px rgba(0,0,0,.28));',
        'display:none;'
    ].join('');
    el.textContent = '💧';
    document.body.appendChild(el);

    document.addEventListener('mousemove', function (e) {
        el.style.display = 'block';
        el.style.left = e.clientX + 'px';
        el.style.top = e.clientY + 'px';
    });
    document.addEventListener('mouseleave', function () { el.style.display = 'none'; });
})();
