(function (){
    "use strict";

    $('#tabs > ul > li > a').click(function (){
        // set the background and color of all the tabs 
        $('#tabs > ul > li > a').css({background: '#a2a2a2', color: '#cecece'});
        // change the background and color of the tab clicked
        $(this).css({background: '#eaeaea', color: '#333'});

        // get the href value of the tab clicked
        const thisTab = $(this).attr('href');
        // set visible div to fade out 
        $('#tabs > div:visible').fadeOut(200, function () {
            // set the div of the clicked tab to fade in 
            $(thisTab).fadeIn(200);
        });
    });
})();