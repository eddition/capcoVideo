'use strict';

/**
 * @ngdoc function
 * @name capcoVideoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the capcoVideoApp
 */

var capcoVideoApp = angular.module('capcoVideoApp');

capcoVideoApp.controller('MainCtrl', function ($scope, $videoService, $sce) {

	$scope.videos=[
	    {
	        "title":"Some Blonde Girl",
	        "video_id": 1234,
	        "code":"http://www.youtube.com/embed/XGSy3_Czz8k",
	        "tags":["funny", "internal"],
	        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu consectetur lectus, id porta urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet nibh vel leo euismod convallis convallis ut erat. Integer purus velit, convallis non vestibulum vel, faucibus vitae felis. Phasellus.",
	        "thumbnail": "/images/thumbnails/thumb1.jpg"
	    },
	    {
	        "title":"An aged Jennifer Aniston",
	        "video_id": 1235,
	        "code":"http://www.youtube.com/embed/1KgCP0QyfdY",
			"tags":["sales", "internal"],
			"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu consectetur lectus, id porta urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet nibh vel leo euismod convallis convallis ut erat. Integer purus velit, convallis non vestibulum vel, faucibus vitae felis. Phasellus.",
			"thumbnail": "/images/thumbnails/thumb2.jpg"
	    },
	    {
	        "title":"Thor fo-shore",
	        "video_id": 1236,
	        "code":"http://www.youtube.com/embed/kqF8lcKTLw0",
			"tags":["client", "internal"],
			"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu consectetur lectus, id porta urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet nibh vel leo euismod convallis convallis ut erat. Integer purus velit, convallis non vestibulum vel, faucibus vitae felis. Phasellus.",
			"thumbnail": "/images/thumbnails/thumb3.jpg"
	    },
	    {
	        "title":"James Franco in Prison",
	        "video_id": 1237,
	        "code":"http://www.youtube.com/embed/fNGAYD31fMo",
			"tags":["funny", "internal"],
			"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu consectetur lectus, id porta urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet nibh vel leo euismod convallis convallis ut erat. Integer purus velit, convallis non vestibulum vel, faucibus vitae felis. Phasellus.",
			"thumbnail": "/images/thumbnails/thumb4.jpg"
	    },
	    {
	        "title":"Hot Tube Time Machine",
	        "video_id": 1238,
	        "code":"http://www.youtube.com/embed/gimGOlbnNjk",
	        "tags":["funny", "client", 'test'],
	        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu consectetur lectus, id porta urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet nibh vel leo euismod convallis convallis ut erat. Integer purus velit, convallis non vestibulum vel, faucibus vitae felis. Phasellus.",
	        "thumbnail": "/images/thumbnails/thumb5.jpg"
	    },
	    {
	        "title":"Black Widow Grillin",
	        "video_id": 1239,
	        "code":"http://www.youtube.com/embed/9l3DDSXkEQ0",
	        "tags":["funny", "internal"],
	        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu consectetur lectus, id porta urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet nibh vel leo euismod convallis convallis ut erat. Integer purus velit, convallis non vestibulum vel, faucibus vitae felis. Phasellus.",
	        "thumbnail": "/images/thumbnails/thumb6.jpg"
	    },
	    {
	        "title":"Stop Crying",
	        "video_id": 1244,
	        "code":"http://www.youtube.com/embed/1KgCP0QyfdY",
			"tags":["sales", "internal"],
			"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu consectetur lectus, id porta urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet nibh vel leo euismod convallis convallis ut erat. Integer purus velit, convallis non vestibulum vel, faucibus vitae felis. Phasellus.",
			"thumbnail": "/images/thumbnails/thumb7.jpg"
	    },
	    {
	        "title":"The Last Nazi",
	        "video_id": 1254,
	        "code":"http://www.youtube.com/embed/kqF8lcKTLw0",
			"tags":["client", "internal"],
			"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu consectetur lectus, id porta urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet nibh vel leo euismod convallis convallis ut erat. Integer purus velit, convallis non vestibulum vel, faucibus vitae felis. Phasellus.",
			"thumbnail": "/images/thumbnails/thumb8.jpg"
	    },
	    {
	        "title":"Street Fighters the Animated Series",
	        "video_id": 1264,
	        "code":"http://www.youtube.com/embed/fNGAYD31fMo",
			"tags":["funny", "internal"],
			"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu consectetur lectus, id porta urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet nibh vel leo euismod convallis convallis ut erat. Integer purus velit, convallis non vestibulum vel, faucibus vitae felis. Phasellus.",
			"thumbnail": "/images/thumbnails/thumb9.jpg"
	    },
	    {
	        "title":"Ferris Bueler",
	        "video_id": 1274,
	        "code":"http://www.youtube.com/embed/gimGOlbnNjk",
	        "tags":["funny", "client"],
	        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu consectetur lectus, id porta urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet nibh vel leo euismod convallis convallis ut erat. Integer purus velit, convallis non vestibulum vel, faucibus vitae felis. Phasellus.",
	        "thumbnail": "/images/thumbnails/thumb10.jpg"
	    },
	    	    {
	        "title":"Tom Hardy",
	        "video_id": 1284,
	        "code":"http://www.youtube.com/embed/9l3DDSXkEQ0",
	        "tags":["funny", "internal"],
	        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu consectetur lectus, id porta urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet nibh vel leo euismod convallis convallis ut erat. Integer purus velit, convallis non vestibulum vel, faucibus vitae felis. Phasellus.",
	        "thumbnail": "/images/thumbnails/thumb11.jpg"
	    },
	    {
	        "title":"The Sixth Sense 2",
	        "video_id": 1294,
	        "code":"http://www.youtube.com/embed/1KgCP0QyfdY",
			"tags":["sales", "internal"],
			"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu consectetur lectus, id porta urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet nibh vel leo euismod convallis convallis ut erat. Integer purus velit, convallis non vestibulum vel, faucibus vitae felis. Phasellus.",
			"thumbnail": "/images/thumbnails/thumb12.jpg"
	    },
	    {
	        "title":"The Dark Knight Falls",
	        "video_id": 1288,
	        "code":"http://www.youtube.com/embed/kqF8lcKTLw0",
			"tags":["client", "internal"],
			"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu consectetur lectus, id porta urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet nibh vel leo euismod convallis convallis ut erat. Integer purus velit, convallis non vestibulum vel, faucibus vitae felis. Phasellus.",
			"thumbnail": "/images/thumbnails/thumb13.jpg"
	    }
	];

	$scope.trustUrl =function(url){
		return $sce.trustAsResourceUrl(url);
	}

	$scope.select = function(index){
		$scope.selectedVideo = $scope.videos[index];
	}

	$scope.setVideo = function(video){
		$videoService.setVideo(video);
	}

  });




//Custom directive to embed HTML
capcoVideoApp.directive('bindHtmlUnsafe', function( $compile ) {
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



