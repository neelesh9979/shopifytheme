$(document).on('click','.add-to-cart-button',function(){ 
  var id = $(this).attr("variant_id"); 
  $.ajax({
  type: 'POST',
  url: '/cart/add.js',
  data: { id: id, quantity: 1 }, 
  dataType: 'json', 
  async: false,  
  success: function (result) { 
    console.log(result);
    location.href="/cart";
   },
   success: function (error) { 
    console.log(error);
   },
 });
}); 


function loadJSONcollection() {
	console.log("triggered");
	$.ajax({
		url:	"/collections/Handmade?view=json",
		type:	'GET'
	})
	.done(function(data) {
		var productList = data;
		$(productList.products).each(function(index){
			console.log(this.title);
		});
	})
	.fail(function(data) {})
	.always(function(data) {});
}


$(function () {
    $(".myList li.grid__item").slice(0, 4).show();
    $("body").on('click touchstart', '.load-more', function (e) {
        e.preventDefault();
        $(".myList li.grid__item:hidden").slice(0, 4).slideDown();
        if ($(".myList li.grid__item:hidden").length == 0) {
            $(".loadMore").css('display', 'none');
        }
    });
});

$(".quickview").click(function() {
  $(".product-quick-view-popup").fadeIn(500);
});
$(".close").click(function() {
  $(".product-quick-view-popup").fadeOut(500);
});




