app.controller('JobController', function($scope, $location, JobService) {

	//$scope jobs

	function getAllJobs() {
		$scope.jobs = JobService.getAllJobs().then(function(response) {
			$scope.jobs = response.data;
		}, function(response) {
			console.log(response.data)
			$scope.message = response.data.message
			$location.path('/login')

		})
	}
	$scope.saveJob = function() {
		JobService.saveJob($scope.job).then(function(response) {
			$location.path('/getalljobs')
		}), function(response) {
			$scope.message = response.data.message
			if (response.status == 401)
				$location.path('/login')
			if (response.status == 500)
				$location.path('/savejob')

		}
	}
	
	
	$scope.getJobDetail = function(id)
	{
		$scope.showDetail = true;
		console.log(id)
		JobService.getJobById(id).then(function(response){
			console.log("sucess");
			console.log(response.data);
			$scope.j = response.data;
			$location.path('/getalljobs')
			
		}, function(response) {
			console.log(response.status);
			// console.log(response.data)
        })
	}
		
	
		getAllJobs();
	/*
	 * function getJobDetail(id) { console.log('**********From
	 * JobDetailController.js => getJobDetail() => Entering the getJobDetail
	 * function') JobService.getJobById(id) .then( function(response) {
	 * console.log("**********From JobDetailController.js => getJobDetail() =>
	 * success - Entering success function for getJobDetail")
	 * console.log("**********response.status => " + response.status)
	 * console.log(response.data) $scope.message= response.data }),
	 * function(response) { console.log("**********From JobDetailController.js =>
	 * getJobDetail() => failure - Entering failure function for getJobDetail")
	 * console.log("**********response.status => " + response.status) } }
	 *  // calling the function => Get job Details of a Job getJobById(id)
	 */

})