(function(){
    var isRedirect = false;
    document.addEventListener('DOMContentLoaded', function(event) {
       console.log('content-loaded');
        var $playStore = document.getElementsByClassName('play-store')[0];
        var $appStore = document.getElementsByClassName('app-store')[0];
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            if(navigator.userAgent.match(/android/i)) {
                $appStore.style.display = 'none';
                $playStore.style.marginRight = 'auto';
                setTimeout(redirectInAndroid, 1000);
            } else {
                $playStore.style.display = 'none';
                setTimeout(redirectInIos, 1000)
            }
        }
    });
    var redirectInAndroid = function() {
        isRedirect = confirm('Open App on "Play Store"');
        if(isRedirect) {
            window.location.href = "https://play.google.com/store/apps/details?id=com.classprostudentapp&hl=en";
        }
    };

    var redirectInIos = function() {
        isRedirect = confirm('Open App on "Play Store"');
        if(isRedirect) {
            window.location.href = "https://play.google.com/store/apps/details?id=com.classprostudentapp&hl=en";
        }
    }
})();