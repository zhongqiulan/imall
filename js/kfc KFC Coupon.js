var kfc;
$(function() {
    kfc = new kfc();
    kfc.getcou();
});
var kfc = function(){

}
kfc.prototype = {
    getcou:function(){
        $.ajax({
            url: 'http://mmb.ittun.com/api/getcouponproduct',
            data:{couponid:0},
            dataType:'json',
            success: function(data) {
                console.log(data);
                var html = template('navyou',data);
                var html1 = $('.quan-list ul').html(html);
                console.log(html);
                
            }
        })

    }
}

