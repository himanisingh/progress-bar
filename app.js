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
		selectedProgressBar.value = selectedProgressBar.value > 0 ? selectedProgressBar.value : 0;
		selectedProgressBar.value = selectedProgressBar.value < 230 ? selectedProgressBar.value : 230;
		console.log(selectedProgressBar);				
    };

});
