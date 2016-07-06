/**
 * 
 */

var db = window.openDatabase("RssDB", "0.1", "RSSList.", 2*1024*1024);
function findTitle(){
	
	var findStr = $("#search_inp").val();
	alert(findStr);
	db.transaction(function(tx) {
		tx.executeSql('SELECT * FROM todo WHERE tit=?', [findStr], function(tx, result) {
				for(var i = 0; i < result.rows.length; i++) {
					alert("SUccess");
					var url_img = result.rows.item(i)['img'];
					
					var title = result.rows.item(i)['tit'];
					
					var desc = result.rows.item(i)['desc'];
					
					$('#searchresult').append('<div class="feed"><div class="images"><img src='+ url_img + '  width="90%px" /></div><div class="title">'+ title +'</div><div class="description">'+ desc +'</div></div>');
				}
			}, null)
	}); 
}