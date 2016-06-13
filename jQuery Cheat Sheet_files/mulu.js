function mulu(){
	var ul = $('<ul>');
	$('article h1').each(function(index,el){
	  $('<li>'+$(el).text()+'</li>').appendTo(ul)
	})
	$('.main-content').prepend(ul).css({color:'red',margin:"10 20"})
}
mulu();
function searcher(){
	$('.selectize-input input').bind('keydown',function(e){
       if(e.keyCode!==13){
       	return;
       }else{
       	var v=$(this).val();
       	$('.main-content .ss').css('color','black').removeClass('ss')
       	$('.main-content a:contains('+v+')').css('color','red').addClass('ss');
       	$(this).val('');
       }            
	})
}
searcher();

function hiddens(){
       $('.main-content h2').on('click',function(){
              var self=this;
              $(this).next().toggle(400,function(){
               $(self).toggleClass('h2-active')     
              })
       })
}
// hiddens();
function runhide(){
     $('.main-content h2').on('click',function(){
       var self=this;
       var fs=$('.selecter input:radio:checked').val()
       $(this).next()[ fs ](400,function(){
           $(self).toggleClass('h2-active') 
       })
    })
}
runhide();
// function xxk(){
//   $('.main-content article>div:gt(0)').hide();
//     $('.main-content').on('mouseenter mouseleave','article:gt(0)',function(){
//        $(this).children('div').finish().slideToggle(400);
//     })
// }
// xxk();