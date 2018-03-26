var Coupon;
$(function() {
    Coupon = new Coupon();
    Coupon.getcoupon();
});
var Coupon = function(){

}
Coupon.prototype = {
    getcoupon:function(){
        $.ajax({
            url: 'http://mmb.ittun.com/api/getcoupon',
            success: function(data) {
                var html = template('navTmp',data);
                $('.quan-box .quan-model .bd >ul').html(html);
            }
        })

    }
}


