function loadingConfigProvider () {

   //default config
   let config = {
      delay: 500,
      exceptUrls: []
   };

   //set delay
   this.setDelay = function (delayTime) {
      config.delay = delayTime;
   };

   //set exception urls
   this.setExceptionUrls = function (urlList) {
      config.exceptUrls = urlList;
   };

   this.$get = function () {

      return {
         getDelayTime,
         getExceptUrls,
         getConfig
      };

      function getDelayTime(){
         return config.delay;
      }

      function getExceptUrls(){
         return config.exceptUrls;
      }

      function getConfig(){
         return config;
      }

   };


}

export default loadingConfigProvider;