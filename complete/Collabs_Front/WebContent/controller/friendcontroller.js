/**
 * 
 */
app.controller('FriendController',function($scope,$location,FriendService,$window){
	
	
	function suggestUsers(){
		FriendService.listOfSuggestedUsers().then(function(response){
			$scope.suggestedUsers=response.data;
			console.log(response.data)
		//	$location.path('/suggestedusers')
			
		},function(response){
			console.log(response.status);
			$window.alert("HERE IN FAAILUR FUNCTION ******")
		})
		
	}
	$scope.friendrequest=function(toUsername){
		FriendService.sendFriendRequest(toUsername).then(function(response){
			alert("Friendrequest to'+toUsername +' has been sent successfully..")
			suggestUsers()
			$location.path('/viewfriends')
		},function(response){
			console.log(response.status);
			$window.alert("HERE IN FAAILUR FUNCTION ******")
		})
	}
	
	
	function pendingRequest(){
		FriendService.getPendingRequest().then(function(response){
		$scope.pendingRequest=response.data
		console.log(response.data)
		$scope.message=response.data.message
		},
		function(response){
			$window.alert("fetching Data failed.Chaeck consoole for errors")
			console.log(response.status);
		
		})
	}
	
	$scope.acceptOrRejectRequest=function(fromId,status){
		FriendService.acceptOrReject(fromId,status).then(function(response){
			$window.alert("Friend added successfully")
			pendingRequest();
			$location.path('/pendingrequests')
		},function(response){
			$window.alert("Failed to process action")
			console.log(response.status)
		})
	}
		
		function viewFriendList(){
			$scope.friends=FriendService.getFriendList().then(function(response){
					$scope.friends=response.data
					console.log(response.data);
		},
		function(response){
			$window.alert("failed to fetch FriendList.read the console for detail")
			console.log(response.status);
		
					})
		}
		
		$scope.friendDetails=function(username){
			$scope.showDetails=false
			FriendService.getFriendDetails(username).then(function(response){
				$scope.showDetails=true
				$scope.friendDetails=response.data
			},function(response){
				$window.alert("Failed to fetch Friend Details. Read console for details")
				console.log(response.status)
			})
		}
		
	 suggestUsers();
	 pendingRequest();
	 viewFriendList();
	})