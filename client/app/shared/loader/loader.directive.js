import './loader.styl';

Loader.$inject = ['$q', '$timeout', 'LoadingInterceptor', 'loaderConfig', 'LoadingDisplay'];

function Loader($q, $timeout, LoadingInterceptor, loaderConfig, LoadingDisplay) {

   return {
      restrict: 'EA',
      transclude: true,
      scope: {
         delay: '@'
      },
      template: `
         <div id="loader-container" class="loaderContainer">
            <div id="loader-background" class="loaderBackground"></div>
            <div id="loader-content" class="loaderContent">
              <ng-transclude></ng-transclude>
            </div>
         </div>`,
      link
   };


   function link(scope, element, attrs) {

      let overlayContainer = null,
          timerPromise = null,
          timerPromiseHide = null,
          inSession = false,
          queue = [],
          loadingConfig = loaderConfig.getConfig();

      init();

      function init() {
         wireUpHttpInterceptor();
         overlayContainer = document.querySelector('#loader-container');
      }

      //Hook into httpInterceptor factory request/response/responseError functions
      function wireUpHttpInterceptor() {

         LoadingInterceptor.request = (config) => {
            //I want to have a condition to not show the overlay on specific calls
            if(shouldShowOverlay(config.method, config.url)) {
               processRequest();
            }

            return config || $q.when(config);
         };

         LoadingInterceptor.response = (response) => {
            processResponse();
            return response || $q.when(response);
         };

         LoadingInterceptor.responseError = (rejection) => {
            processResponse();
            return $q.reject(rejection);
         };
      }

      function processRequest() {
         queue.push({});
         if (queue.length === 1) {
            timerPromise = $timeout(function () {
               if (queue.length) showOverlay();
            }, scope.delay ? scope.delay : loadingConfig.delay); //Delay showing for 500 millis to avoid flicker
         }
      }

      function processResponse() {
         queue.pop();
         if (queue.length === 0) {
            //Since we don't know if another XHR request will be made, pause before
            //hiding the overlay. If another XHR request comes in then the overlay
            //will stay visible which prevents a flicker
            timerPromiseHide = $timeout(() => {
               //Make sure queue is still 0 since a new XHR request may have come in
               //while timer was running
               if (queue.length === 0) {
                  hideOverlay();
                  if (timerPromiseHide) $timeout.cancel(timerPromiseHide);
               }
            }, scope.wcOverlayDelay ? scope.wcOverlayDelay : loadingConfig.delay);
         }
      }

      function showOverlay() {
         LoadingDisplay.show(overlayContainer);
      }

      function hideOverlay() {
         if (timerPromise) $timeout.cancel(timerPromise);
         LoadingDisplay.hide(overlayContainer);
      }

      function shouldShowOverlay(method, url){
         let searchCriteria = {
            method: method,
            url: url
         };
         return angular.isUndefined(findUrl(loadingConfig.exceptUrls, searchCriteria));
      }

      function findUrl(urlList, searchCriteria){
         let retVal = '';
         angular.forEach(urlList, url => {
            if(angular.equals(url, searchCriteria)){
               retVal = true;
               return false; //break out of forEach
            }
         });
         return retVal;
      }
   }

}

export default Loader;