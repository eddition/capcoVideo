'use strict';

/**
 * @ngdoc function
 * @name capcoVideoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the capcoVideoApp
 */
angular.module('capcoVideoApp')
  .controller('MainCtrl', function ($scope) {

	$scope.videos=[
	    {
	        "title":"The Dark Knight Rises - Official Trailer 3 [HD]",
	        "code":"<iframe width='960' height='540' src='http://www.youtube.com/embed/9l3DDSXkEQ0' frameborder='0' allowfullscreen></iframe>",
	        "tags":["funny", "internal"],
	        "thumbnail": "/images/thumbnails/thumb1.jpg"
	    },
	    {
	        "title":"The Dark Knight Rises - Official Trailer 2 [HD]",
	        "code":"<iframe width='960' height='540' src='http://www.youtube.com/embed/1KgCP0QyfdY' frameborder='0' allowfullscreen></iframe>",
			"tags":["sales", "internal"],
			"thumbnail": "/images/thumbnails/thumb2.jpg"
	    },
	    {
	        "title":"The Dark Knight Rises - Official Teaser Trailer [HD]",
	        "code":"<iframe width='960' height='540' src='http://www.youtube.com/embed/kqF8lcKTLw0' frameborder='0' allowfullscreen></iframe>",
			"tags":["client", "internal"],
			"thumbnail": "/images/thumbnails/thumb3.jpg"
	    },
	    {
	        "title":"The Dark Knight Rises - Official Rise TV Spot [HD]",
	        "code":"<iframe width='960' height='540' src='http://www.youtube.com/embed/fNGAYD31fMo' frameborder='0' allowfullscreen></iframe>",
			"tags":["funny", "internal"],
			"thumbnail": "/images/thumbnails/thumb4.jpg"
	    },
	    {
	        "title":"The Dark Knight Rises - Official Back TV Spot [HD]",
	        "code":'<iframe width="960" height="540" src="http://www.youtube.com/embed/gimGOlbnNjk" frameborder="0" allowfullscreen></iframe>',
	        "tags":["funny", "client"],
	        "thumbnail": "/images/thumbnails/thumb5.jpg"
	    }
	]

	$scope.select=function(index){
		$scope.selectedVideo = $scope.videos[index];
	}

  })

.directive('bindHtmlUnsafe', function( $compile ) {
    return function( $scope, $element, $attrs ) {

        var compile = function( newHTML ) { // Create re-useable compile function
            newHTML = $compile(newHTML)($scope); // Compile html
            $element.html('').append(newHTML); // Clear and append it
        };

        var htmlName = $attrs.bindHtmlUnsafe; // Get the name of the variable 
                                              // Where the HTML is stored

        $scope.$watch(htmlName, function( newHTML ) { // Watch for changes to 
                                                      // the HTML
            if(!newHTML) return;
            compile(newHTML);   // Compile it
        });

    };
});
