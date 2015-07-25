(function(){

    var script = document.getElementById('NotoSansKR-font-config');
    var path = script.dataset.fontPath;

    if(typeof window.sessionStorage === 'undefiend') {
        document.write('<link rel="stylesheet" href="'+path+'/NotoSansKR-2350.css"/>');
    }else if(window.sessionStorage.getItem('NotoSansKR') === 'loaded'){
        document.write('<link rel="stylesheet" href="'+path+'/NotoSansKR-full.css"/>');
    }
    else
    {
        document.write('<link rel="stylesheet" href="'+path+'/NotoSansKR-2350.css"/>');
        if(typeof WebFont === 'undefined')
        {
            if(typeof console.error === 'function'){
                console.log('need webfontloader');
            }
        }
        var font = script.dataset.fontConfig;
        var length = font.split(",").length;
        var count = 0;
        WebFont.load({
            custom: {
                families: [font],
                urls: [path+'/NotoSansKR-full.css']
            },
            timeout  : 10000,
            fontactive : function () {
                count++;
                if(count === length){
                    window.sessionStorage.setItem('NotoSansKR', 'loaded');
                }
            }
        });
    }
})();