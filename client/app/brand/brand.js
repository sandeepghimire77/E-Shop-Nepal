'use strict';

angular.module('NepPasalApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('brand', {
        title: 'Add, Remove, Edit Brands',
        url: '/brand',
        templateUrl: 'app/brand/brand.html',
        controller: 'BrandCtrl',
        authenticate: true
      });
  });
