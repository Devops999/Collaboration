/**
 * 
 */

app.factory('JobService', function($http) {
	var jobService ={}
	jobService.saveJob = function(job) {
		return $http.post("http://localhost:8380/Collabs_Back/savejob", job)
	}
	jobService.getAllJobs=function(){
		return $http.get("http://localhost:8380/Collabs_Back/getalljobs")
	}
	jobService.getJobById=function(id){
		return $http.get("http://localhost:8380/Collabs_Back/getjobbyid/" +id)
	}
	return jobService
})