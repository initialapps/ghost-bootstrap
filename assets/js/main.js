// This file has the ghost-bootstrap theme javascript
$(document).ready(function() {

    // remove preloader
    $('.preloader').fadeOut('slow');
    
    // load tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    // load popovers
    $(function () {
        $('[data-toggle="popover"]').popover()
    })
});