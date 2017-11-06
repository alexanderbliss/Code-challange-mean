app.controller('MessageController', function (MessageService) {

    console.log('MessageController loaded');
    var vm = this
    vm.newMessage = {};

    vm.addMessage = function (message) {
        MessageService.addMessage(message)
    }
    
    vm.messageResult = MessageService.messageResult;

    MessageService.getMessage();

});