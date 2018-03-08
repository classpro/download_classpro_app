(function(){
    document.addEventListener('DOMContentLoaded', function(event) {
       console.log('content-loaded');
        var $playStore = document.getElementsByClassName('play-store')[0];
        var $appStore = document.getElementsByClassName('app-store')[0];
        var isRedirect = false;
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            if(navigator.userAgent.match(/android/i)) {
                $appStore.style.display = 'none';
                $playStore.style.marginRight = 'auto';
                isRedirect = confirm('Open App on "Play Store"');
                if(isRedirect) {
                    window.location.href = "https://play.google.com/store/apps/details?id=com.classprostudentapp&hl=en";
                }
            } else {
                $playStore.style.display = 'none';
                isRedirect = confirm('Open App on "App Store"');
                if(isRedirect) {
                    window.location.href = "https://itunes.apple.com/in/app/classpro/id1185807691?mt=8";
                }
            }
        }
    });
})();