app.controller('MessageController', function (MessageService) {

    console.log('MessageController loaded');
    var vm = this
    vm.newMessage = {};

    vm.addMessage = function (message) {
        MessageService.addMessage(message)
    }
    
    
    MessageService.getMessage();

});