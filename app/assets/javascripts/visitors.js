var visitorCenter = angular.module('VisitorCenter', ['ngResource']);

visitorCenter.factory("Visitor", function($resource) {
  return $resource("visitors/:id", { id: '@id' }, {
    index: { method: 'GET', isArray: true, responseType: 'json' },
    update: { method: 'PUT', responseType: 'json' }
  });
})

visitorCenter.controller("visitorController", function($scope, Visitor) {
  $scope.visitors = Visitor.index()

  $scope.addVisitor = function(){
    visitor = Visitor.save($scope.newVisitor)

    $scope.visitors.push(visitor)
    $scope.newVisitor = {}
  }

  $scope.deleteVisitor = function() {
    visitor = $scope.visitors[index]
    Visitor.delete(visitor)
    $scope.visitors.splice(index, 1);
  }
})
