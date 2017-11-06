var app = angular.module('app', ['ngRoute'])
console.log('angular and script sourced');

app.config(function ($routeProvider) {
    $routeProvider.when('/add', {
        templateUrl: 'templates/comment.html',
        controller: 'MessageController as mc'
    }).when('/view', {
        templateUrl: 'templates/view.html',
        controller: 'MessageController as mc'
    })
});