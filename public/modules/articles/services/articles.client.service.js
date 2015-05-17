(function () {
    'use strict';

    //Articles service used for communicating with the articles REST endpoints
    angular.module('app.articles').factory('Articles', ['$resource',
        function($resource) {
            return $resource('articles/:articleId', {
                articleId: '@_id'
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
})();