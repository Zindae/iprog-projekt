myApp.factory('albumGramService', ['$resource',  function ($resource) {
	console.log('HEJ FRÅN SERVICE');
	this.flickrImg = $resource('http://api.flickr.com/services/feeds/photos_public.gne', {id:'96272396@N05', size:'b', lang:'en-us', format:'json', jsoncallback:'?'});
	return this;
	
}]);
  