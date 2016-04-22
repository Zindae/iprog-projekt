myApp.controller('imageCtrl', ['$scope', 'albumGramService', function($scope, albumGramService) {
	$scope.images = albumGramService.flickrImg.get();
}]);

		// $.each(data.items, function(i,item){
			 // var image = (item.media.m).replace("_m.jpg", "_d.jpg");
	   // var title = item.title;
	   // if(i<21){
				// $("<div>")
		  // .attr({"style":"background-image: url("+image+")","class":"flickr-image", "data-title":title})
		   // .appendTo(".flickr").wrap("<a href='" + item.link + "'></a>");
				// }    
		// });