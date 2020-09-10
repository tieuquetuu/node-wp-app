//
// Scrollbar
//

import $ from "jquery";
import "jquery.scrollbar/jquery.scrollbar.min";
import "jquery-scroll-lock/jquery-scrollLock.min";

var Scrollbar = function(elements) {

    // Variables

    var $scrollbar = $(elements);


    // Methods

    function init() {
        $scrollbar.scrollbar().scrollLock()
    }


    // Events

    if ($scrollbar.length) {
        init();
    }

};

export default Scrollbar;