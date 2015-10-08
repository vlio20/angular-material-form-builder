(function() {
  'use strict';

  angular
    .module('angularMaterialFormBuilder')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
