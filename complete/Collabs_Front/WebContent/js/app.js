/**
 * 
 */
var app = angular.module("app", [ 'ngRoute', 'ngCookies' ])
app.config(function($routeProvider) {

	$routeProvider.when('/registration', {
		templateUrl : 'views/registration.html',
		controller : 'UserController'
	})

	.when('/login', {
		templateUrl : 'views/login.html',
		controller : 'UserController'
	}).when('/savejob', {
		templateUrl : 'views/jobform.html',
		controller : 'JobController'
	}).when('/getalljobs', {
		templateUrl : 'views/jobtitles.html',
		controller : 'JobController'
	}).when('/saveblogpost', {
		templateUrl : 'views/blogpostform.html',
		controller : 'BlogPostController'
	}).when('/getallblogs', {
		templateUrl : 'views/bloglist.html',
		controller : 'BlogPostController'
	}).when('/getBlogForApproval/:id', {
		templateUrl : 'views/approvalform.html',
		controller : 'BlogDetailController'
	}).when('/getBlogDetail/:id', {
		templateUrl : 'views/blogdetail.html',
		controller : 'BlogDetailController'
	})

	/* adding friend module */
	.when('/suggestedusers', {
		templateUrl : 'views/suggestedusers.html',
		controller : 'FriendController'
	})

	.when('/pendingrequests', {
		templateUrl : 'views/viewrequests.html',
		controller : 'FriendController'
	})

	.when('/viewfriends', {
		templateUrl : 'views/friendlist.html',
		controller : 'FriendController'
	})

	.when('/wall/:username', {
		templateUrl : 'views/wall.html',
		controller : 'WallController'
	})

	.when('/profilepic', {
		templateUrl : 'views/profilepic.html'
	})

	/*.when('/chat', {
		templateUrl : 'views/chat.html'*/
	
	.when('/chat',{
		templateUrl:'views/chatt.html',
		controller:'chatcon'
	})

	.when('/message/:username', {
		templateUrl : 'views/viewmessage.html',
		controller : 'messagecontroller'
	})

	.when('/', {
		templateUrl : 'views/home.html'
	})

	.otherwise('/', {
		templateUrl : 'views/home.html'
	})
})

app.run(function($rootScope, $location, UserService, $cookieStore) {

	if ($rootScope.currentUser == undefined)
		$rootScope.currentUser = $cookieStore.get("currentUser")
		// console.log($rootScope.currentUser.username)

	$rootScope.logout = function() {
		console.log("app.run(--log out called**  ");
		delete $rootScope.currentUser;
		$cookieStore.remove('currentUser');
		UserService.logout().then(function(response) {
			// $rootScope.currentUser.firstname=null;
			// $rootScope.currentUser.role=null
			$rootScope.message = "logged out successfully..."
			// delete $rootScope
			// $cookieStore.remove("currentUser")
			$location.path('/login')
		}, function(response) {
			console.log(response.status)
			$rootScope.message = response.data.message
			// $location.path('/login')

		})
	}
})