(function(){
    document.addEventListener('DOMContentLoaded', function(event) {
       console.log('content-loaded');
        var $playStore = document.getElementsByClassName('play-store')[0];
        var $appStore = document.getElementsByClassName('app-store')[0];
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            if(navigator.userAgent.match(/android/i)) {
                $appStore.style.display = 'none';
            } else {
                $playStore.style.display = 'none';
            }
        }
    });
})();