 /* global angular */
/* https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#data-services */
(function() {
    'use strict'

    angular
        .module('client.services')
        .factory('messageService', MessageService) 

    MessageService.$inject = ['$http', '$q']

    function MessageService($http, $q) {
        return {
            readAll: _readAll,
            readById: _readById,
            create: _create,
            update: _update,
            delete: _delete
        }

        function _readAll() {
            return $http.get('/api/messages')
                .then(dateChange =>
                    convertAllDates(dateChange)
                )
                .catch(onError)
        }

        function _readById(id) {
            return $http.get(`/api/messages/${id}`)
                .then(dateChange =>
                    convertDate(dateChange)
                )
                .catch(onError)
        }

        function _create(data) {
            return $http.post('/api/messages', data)
                .then(xhrSuccess)
                .catch(onError)
        }

        function _update(data) {
            return $http.put(`/api/messages/${data._id}`, data)
                .then(xhrSuccess)
                .catch(onError)
        }

        function _delete(id) {
            return $http.delete(`/api/messages/${id}`)
                .then(xhrSuccess)
                .catch(onError)
        }

        function xhrSuccess(responses) {
            return responses.data
        }

        function convertAllDates(dateChange){
            for (let x = 0; x < dateChange.data.length; x++) {
                dateChange.data[x].dateCreated = new Date(dateChange.data[x].dateCreated)
                dateChange.data[x].dateModified = new Date(dateChange.data[x].dateModified)
                dateChange.data[x].birthDate = new Date(dateChange.data[x].birthdate)
                if (dateChange.data[x].dateDeactivated !== null) {
                    dateChange.data[x].dateDeactivated = new Date(dateChange.data[x].dateDeactivated)
                }
                
            }
            return dateChange.data   
        }

        function convertDate(dateChange){
            dateChange.data.dateCreated = new Date(dateChange.data.dateCreated)
            dateChange.data.dateModified = new Date(dateChange.data.dateModified)
            dateChange.data.birthDate = new Date(dateChange.data.birthdate)
            if (dateChange.data.dateDeactivated !== null) {
                dateChange.data.dateDeactivated = new Date(dateChange.data.dateDeactivated)
            }
            return dateChange.data
        }

        function onError(error) {
            console.log(error.data)
            return $q.reject(error.data)
        }
    }
})()
