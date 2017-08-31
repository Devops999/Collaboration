/**
 * 
 */

app.factory("MessageService",function($http){
	var messageService={};
	
	messageService.sendMessage=function(message){
		return $http.post("http://localhost:8380/Collabs_Back/sendmessage",message)
	}
	
	messageService.viewMessage=function(username){
		return $http.get("http://localhost:8380/Collabs_Back/getmessage/"+username)
	}
	return messageService;
})