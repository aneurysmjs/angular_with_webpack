import './loader.styl';

class LoadingInterceptor {

   constructor($q, $timeout, $window, LoadingInterceptor, loadingConfig, LoadingDisplay) {
      this.$q = $q;
      this.$timeout = $timeout;
      this.$window = $window;
      this.LoadingInterceptor = LoadingInterceptor;
      this.loadingConfig = loadingConfig;
      this.LoadingDisplay = LoadingDisplay;
      this.restrict = 'EA';
      this.scope = {
         delay: '@'
      };
      this.template = `<div id="overlay-container" class="overlayContainer">
                          <div id="overlay-background" class="overlayBackground"></div>
                          <div id="overlay-content" class="overlayContent">
                             <ng-transclude></ng-transclude>
                          </div>
                       </div>`;
   }

   link(scope, element, attrs) {

      let overlayContainer = null,
          timerPromise = null,
          timerPromiseHide = null,
          inSession = false,
          queue = [],
          loadingConfig = this.loadingConfig.getConfig();

      function getOverlayContainer() {
         return document.getElementById('overlay-container');
      }

      init();

      function init() {
         wireUpHttpInterceptor();
         overlayContainer = getOverlayContainer();
      }

      //Hook into httpInterceptor factory request/response/responseError functions
      function wireUpHttpInterceptor() {

         this.LoadingInterceptor.request = function (config) {
            //I want to have a condition to not show the overlay on specific calls
            if(shouldShowOverlay(config.method, config.url))
               processRequest();
            return config || this.$q.when(config);
         };

         this.LoadingInterceptor.response = function (response) {
            processResponse();
            return response || this.$q.when(response);
         };

         this.LoadingInterceptor.responseError = function (rejection) {
            processResponse();
            return this.$q.reject(rejection);
         };
      }

      function processRequest() {
         queue.push({});
         if (queue.length === 1) {
            timerPromise = this.$timeout(function () {
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
            timerPromiseHide = this.$timeout(function () {
               //Make sure queue is still 0 since a new XHR request may have come in
               //while timer was running
               if (queue.length === 0) {
                  hideOverlay();
                  if (timerPromiseHide) this.$timeout.cancel(timerPromiseHide);
               }
            }, scope.wcOverlayDelay ? scope.wcOverlayDelay : loadingConfig.delay);
         }
      }

      function showOverlay() {
         this.LoadingDisplay.show(overlayContainer);
      }

      function hideOverlay() {
         if (timerPromise) this.$timeout.cancel(timerPromise);
         this.LoadingDisplay.hide(overlayContainer);
      }

      function shouldShowOverlay(method, url){
         var searchCriteria = {
            method: method,
            url: url
         };
         return angular.isUndefined(findUrl(this.loadingConfig.exceptUrls, searchCriteria));
      }

      function findUrl(urlList, searchCriteria){
         let retVal = '';
         angular.forEach(urlList, function (url) {
            if(angular.equals(url, searchCriteria)){
               retVal = true;
               return false; //break out of forEach
            }
         });
         return retVal;
      }
   }

}

LoadingInterceptor.$inject = ['$q', '$timeout', '$window', 'LoadingInterceptor', 'loadingConfig'];

export default LoadingInterceptor;