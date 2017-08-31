/**
 * 
 */
app.factory('BlogPostService', function($http) {
	var blogPostService = {}

	blogPostService.saveBlog = function(blogPost) {
		return $http.post("http://localhost:8380/Collabs_Back/saveblogpost",
				blogPost)
	}

	blogPostService.blogsApproved = function() {
		return $http
				.get("http://localhost:8380/Collabs_Back/listofblogs/" + true)
	}
	blogPostService.blogsWaitingForApproval = function() {
		return $http
				.get("http://localhost:8380/Collabs_Back/listofblogs/" + false)
	}
	blogPostService.getBlogPost = function(id) {
		return $http
				.get("http://localhost:8380/Collabs_Back/getblogpost/" + id)
	}
	blogPostService.updateBlogPost = function(blogPost) {
		return $http.put("http://localhost:8380/Collabs_Back/updateblogpost",
				blogPost)
	}
	blogPostService.addComment = function(blogComment) {
		return $http.post("http://localhost:8380/Collabs_Back/addblogcomment",
				blogComment)
	}
	
	
	
	blogPostService.addCommentWall=function(blog){
		return $http.put("http://localhost:8380/Collabs_Back/addcommentwall",blog) 
	}
	
	blogPostService.getBlogComments = function(blogId) {
		return $http.get("http://localhost:8380/Collabs_Back/getblogcomments/"
				+ blogId)
	}

	// addiing wallpost service
	blogPostService.viewWall = function(username) {
		return $http.get("http://localhost:8380/Collabs_Back/wall/" + username)
	}

	return blogPostService;
})