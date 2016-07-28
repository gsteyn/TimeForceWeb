'use strict';

angular.module('timeForceApp').service('UserService', function($q, $resource) {
    
    this.getAll = function() {
        var deferred = $q.defer();
        
        var resource = $resource('/api/users');
        resource.get('/api/users').$promise.then(function(response) {
            deferred.resolve(response);
        });
        
        return deferred.promise;
    };
    
    this.getByUsername = function(username) {
        var deferred = $q.defer();
        
        var resource = $resource('/api/users/:username');
        resource.get({username: username}).$promise.then(function(response) {
            deferred.resolve(response);
        });
        
        return deferred.promise;
    };
    
    this.create = function(user) {
        var deferred = $q.defer();
        
        var resource = $resource('/api/users');
        resource.save(user).$promose.then(function(response) {
            deferred.resolve(response);
        });
        
        return deferred.promise;
    };
    
    this.update = function(user) {
        var deferred = $q.defer();
        
        var resource = $resource('/api/users/:userId', {userId: '@id'}, {
            'update': { method: 'PUT' }
        });
        resource.update(user.id, user).$promise.then(function(response) {
            deferred.resolve(response);
        });
        
        return deferred.promise;
    };
    
    this.delete = function(id) {
        var deferred = $q.defer();
        
        var resource = $resource('/api/users/:userId');
        resource.delete({userId: id}).$promise.then(function(response) {
            deferred.resolve(response);
        });
        
        return deferred.promise;
    };
    
});