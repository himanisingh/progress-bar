var app = angular.module('progress', []);

app.controller('ProgressCtrl', function($scope){

	$scope.progressBarList = [
		{
			"name":"progressbar1",
			"value":62			
		},
		{
			"name":"progressbar2",
			"value":45			
		},
		{
			"name":"progressbar3",
			"value":62			
		}
	];
	
	$scope.selectedProgressBar = $scope.progressBarList[0];
	this.handleProgress = function(event, selectedProgressBar){	
		
		selectedProgressBar.value = parseInt(selectedProgressBar.value) + parseInt(event.target.innerText);  
		console.log(selectedProgressBar);				
    };

});
