var mmbuy;
$(function() {
    mmbuy = new MMBuy();
    mmbuy.initScroll();
    mmbuy.getProductCom();
})
var MMBuy = function () {


}
MMBuy.prototype = {
    // 初始化区域滚动
    initScroll: function () {
        mui('.mui-scroll-wrapper').scroll({
            scrollY: true, //是否竖向滚动
            scrollX: false, //是否横向滚动
            startX: 0, //初始化时滚动至x
            startY: 0, //初始化时滚动至y
            indicators: false, //是否显示滚动条
            deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
            bounce: true     //是否启用回弹
        });
    },
    // 获取热门品牌数据
    getProductCom:function(){
        $.ajax({
            url:"http://mmb.ittun.com/api/getproductcom",
            data:{
                productid:1
            },
            success:function(data){
                var html = template("commentTem",data);
                $('#main .comment-list').html(html);
            }
        })
    },
    
}