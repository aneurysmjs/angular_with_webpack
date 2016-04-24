class LoaderDisplayService {

   constructor($window) {
      this.$window = $window;

      var getComputedStyle = function () {
         let func = null;

         if (document.defaultView && document.defaultView.getComputedStyle) {
            func = document.defaultView.getComputedStyle;
         } else if (typeof (document.body.curentStyle) !== "undefined") {
            func = function (element, anything) {
               return element.currentStyle;
            };
         }

         return function (element, style) {
            return func(element, null)[style];
         };

      }();

   }

   hide(overlayContainer) {
      overlayContainer = overlayContainer || getOverlayContainer();
      overlayContainer.style.display = 'none';
   }

   show(overlayContainer) {

      overlayContainer = overlayContainer || getOverlayContainer();

      let w = 0,
          h = 0;

      if (!this.$window.innerWidth) {

         if (document.documentElement.clientWidth !== 0) {
            w = document.documentElement.clientWidth;
            h = document.documentElement.clientHeight;
         } else {
            w = document.body.clientWidth;
            h = document.body.clientHeight;
         }

      } else {
         w = this.$window.innerWidth;
         h = this.$window.innerHeight;
      }

      let content = document.getElementById('overlay-content'),
          contentWidth = parseInt(getComputedStyle(content, 'width').replace('px', '')),
          contentHeight = parseInt(getComputedStyle(content, 'height').replace('px', ''));

      content.style.top  = h / 2 - contentHeight / 2 + 'px';
      content.style.left = w / 2 - contentWidth / 2 + 'px';

      overlayContainer.style.display = 'block';

   }

}

LoaderDisplayService.$inject = ['$window'];

export default LoaderDisplayService;