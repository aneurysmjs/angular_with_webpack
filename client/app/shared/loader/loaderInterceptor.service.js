class LoadingInterceptorService {

    constructor($q) {
        this.$q = $q;
    }

}

LoadingInterceptorService.$inject = ['$q'];

export default LoadingInterceptorService;