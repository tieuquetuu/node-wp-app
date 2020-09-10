//
// Offset top
//

import $ from "jquery";

let OffsetTop = function (elements) {
    console.log(elements)
    let $that = $(elements);

    if($that.length) {
        $that.each(function () {
            init($(this))
        });

    }

    function init($el) {
        var/* $el = $('[data-offset-top]'),*/
            $offsetEl = $($el.data('offset-top')),
            offset = $offsetEl.height();

        $el.css({'padding-top':offset+'px'})
    }
}

export default OffsetTop;