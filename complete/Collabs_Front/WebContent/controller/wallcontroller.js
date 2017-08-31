/**
 * 
 */

app.controller("WallController",function($scope,$location,BlogPostService,$window,$routeParams,$rootScope,FriendService){
	var username=$routeParams.username
	$scope.wallName=username
	
		$scope.blogPost=BlogPostService.viewWall(username).then(function(response){
			$scope.blogPost=response.data
			console.log(response.data)
		},function(response){
			$window.alert('Failed to open Wall')
			console.log(response.status)
		})
		
		
		$scope.model={};
	$scope.addComment=function(blog){
		$scope.date=new Date();
		blog.blogComments.push({"body":$scope.comment,"commentOn":$scope.date,"commentedBy":$rootScope.currentUser});
		BlogPostService.addComment(blog).then(function(response){
			console.log(response.status)
alert('commnt added successfully')
$scope.comment=''},
function(response){
	console.log(response.status)		
		})
	}
		
		/*$scope.addComment=function(){
		$scope.blogComment.blogPost=$scope.blogPost
		BlogPostService.addComment($scope.blogComment).then(function(response){
			console.log(response.status)
			alert('Comment added successfully')
			$scope.blogComment.body=''
		},function(response){
			console.log(response.status)
		})
	}
		
		$scope.getBlogComments=function(blogId){
		$scope.showComments=true
		BlogPostService.getBlogComments(blogId).then(function(response){
			$scope.blogComments=response.data
			console.log(response.data)
			console.log(response.status)
		},function(response){
			console.log(response.status)
		})
	}*/

	function friendDetails(username){
		FriendService.getFriendDetails(username).then(function(response){
			$scope.friendDetailsOne=response.data
		},function(response){
			$window.alert("Failed to fetch Friend Details")
			console.log(response.status)
		})
	}
	friendDetails(username);
	
	$scope.saveBlogPost = function() {
		BlogService.saveBlogPost($scope.blogPost).then(function(response) {
		$scope.message = 'Blog posted successfully and awaiting Administrator approval'
		$location.path('/listofblogs')
		},function(response) {
		$scope.message = response.data.message
		if (response.status == 401) 
		{
	       $location.path('/login')
		}
		if (response.status == 500) 
		{
		   $location.path('/saveblogpost')
		}
	
	
	
		})
	}


})