app.service('MessageService',function($http){

    var self = this

    self.messageResult = { data:[] }


//POST ROUTE

self.addMessage = function(message){
    alert('added a comment')
    $http.post('/message/comment', message).then(function(responce){
        self.getMessage()
    }).catch(function(err){
    })
}// end of addMessage


//GET ROUTE
    
self.getMessage = function(){
    $http.get('/message/comment').then(function (response) {
        self.messageResult.data = response.data
        console.log(self.messageResult.data);
        
    }).catch(function (err) {
    })
}//end of getMessage

})
