//JavaScript document 

jQuery(document).ready(function(){
//jCarousel Lite
//LINKS
var x;
var uniList=new Array("#01L","#03L","#04L","#05L","#06L")
					

for (i=0;i<uniList.length;i++)
{
	$(uniList[i]).mouseover(function(){
		x=i;
		$(this).fadeTo("normal",0.9);
	});
}

for (i=0;i<uniList.length;i++)
{
	$(uniList[i]).mouseout(function(){
		$(this).fadeTo("normal",1);
	});
}

});

