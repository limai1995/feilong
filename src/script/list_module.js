define(['jlazyload'], () => {
    return {
        init: function() {
            const $list = $('.list ul');
            //1.渲染list.html页面
            $.ajax({
                url: 'http://localhost/projectname/php/listdata.php',
                dataType: 'json'
            }).done(function(data) {
                let $strhtml = '';
                $.each(data, function(index, value) {
                    $strhtml += `
                        <li>
                            <a href="detail.html?sid=${value.sid}">
                                <img src="${value.url}"/>
                                <p>${value.title}</p>
                                <span>￥${value.price}</span>
                            </a>
                        </li>
                    `;
                });
                $list.html($strhtml); //渲染的下面进行懒加载操作
                $(function() { //页面加载完成
                    $("img.lazy").lazyload({
                        effect: "fadeIn" //显示方法：谈入
                    });
                });
            });
        }
    }
});




! function($) {
    const $list = $('.list ul');
    //1.渲染list.html页面
    $.ajax({
        url: 'http://localhost/projectname/php/listdata.php',
        dataType: 'json'
    }).done(function(data) {
        let $strhtml = '';
        $.each(data, function(index, value) {
            $strhtml += `
                <li>
                    <a href="detail.html?sid=${value.sid}">
                        <img src="${value.url}"/>
                        <p>${value.title}</p>
                        <span>￥${value.price}</span>
                    </a>
                </li>
            `;
        });
        $list.html($strhtml);

    });

}(jQuery);