(function () {
    'use strict';

    angular.module('client.services')
        .factory('hackerService', HackerServiceFactory)

    HackerServiceFactory.$inject = ['$http', '$q']

    function LocationServiceFactory($http, $q) {
        return {
            readAll: readAll,
            readById: readById,
            create: create,
            update: update,
            delete: _delete
        }

        function readAll() {
            var carArray = ["Honda", "Honda Accord", "Honda Civic"]
            return $q.resolve(carArray)
                .then(xhrSuccess)
                .catch(onError)
        }
    }
})();