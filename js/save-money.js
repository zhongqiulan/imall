$(function () {
    getproduct();
    getpage();
  })

function getproduct() {
    $.ajax({
        url:'http://mmb.ittun.com/api/getmoneyctrl',
        
        success:function (data) {
            // console.log(data);
            var html = template('productListTmp',data);
            $('#main li').html(html);
             // 1定义一个总页数 总条数/每页大小
           
        //    $('#main li').html(html);
        }
       
    })
}
function getpage() {
    $.ajax({
        url:"http://mmb.ittun.com/api/getmoneyctrlproduct",
        
        success:function (data) {
            data.result = data.result.reverse();
            var html = template('pageTmp',data);
            $('#main li ').html(html);                        
            pageCount = Math.ceil(data.total / 5);
            // 2.还要一个当前页码数
                var arr = [];
                for (var i=1; i <=pageCount;i++){
                    arr.push(i);
                }
            
                $('.pagination').html(html);
                
               
               
        }
    })
}