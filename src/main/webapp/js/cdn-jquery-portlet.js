require([
    'jquery'
], function ($) {
    $(document).on("click", "#jQueryVersionLink", function() {
        $('#jQueryVersion').text($().jquery);
    });
});