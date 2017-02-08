require.config({  
    shim: { 
      'back_to_top': ['jquery'],
      'app': ['jquery'],
      'index':['jquery']
    },
    paths: {
        "jquery": 'jquery-1.8.2.min',
        "bootstrap":'../plugins/bootstrap/js/bootstrap.min',
        "back_to_top":'../plugins/back-to-top',
        "wow":'wow.min',
        "app":'app',
        "index":'pages/index',
    }
});
 
require(['jquery','bootstrap', 'back_to_top','wow','app','index'],function(jQuery) {
      jQuery(document).ready(function() {
      // 	App.init();
//        App.initSliders();
        Index.initParallaxSlider();
    });
    
});
 