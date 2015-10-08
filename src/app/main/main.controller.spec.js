(function () {
  'use strict';

  describe('controllers', function () {

    beforeEach(module('angularMaterialFormBuilder'));

    it('should check true to be true', inject(function ($controller) {
      expect(true).toBeTruthy();
    }));
  });
})();
