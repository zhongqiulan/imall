var getsitenav;
$(function() {
    getsitenav = new Getsitenav();
    getsitenav.addNav();
})
var Getsitenav = function () {
};
Getsitenav.prototype = {
    addNav:function () { 
        $.ajax({
            url:'http://mmb.ittun.com/api/getsitenav',
            type:'get',
            dataType:'json',
            success:function (data) {
                console.log(data);
                var html = template('navTmp',data);
                $('#main>.nav.link').html(html);
            }
        })
    }
};