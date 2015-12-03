describe('Jentoo Component');

// Instantiate a new version of my module before each test
beforeEach(module('notesApp'));
var ctrl;
// Before each unit test, instantiate a new instance
// of the controller
beforeEach(inject(function ($controller) {
   ctrl = $controller('JentooController');
   console.log('--- ctrl ---');
   console.log(ctrl);
}));

/*
it('should have items available on load', function () {
   expect(ctrl.items).toEqual([
      {id: 1, label: 'First', done: true},
      {id: 2, label: 'Second', done: false}
   ]);
});*/
