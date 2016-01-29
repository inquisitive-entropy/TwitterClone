var api = angular.module('fakerApiFactory', []);

api.factory('fakerApi', ['$http', function($http){

  var fakerInfo = {};


  fakerInfo.getName = function(){
    return $http.get('http://faker.hook.io?property=name.findName&locale=de');
  };


  fakerInfo.getUsername = function(){
    return $http.get('http://faker.hook.io?property=internet.userName&locale=de');
  };


  fakerInfo.getImage = function(){
    return $http.get('http://faker.hook.io?property=image.people&locale=de');
  };




  return fakerInfo;

}]);