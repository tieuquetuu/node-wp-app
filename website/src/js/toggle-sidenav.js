//
// Toggle sidenav
//


import $ from "jquery";
import Scrollbar from "./scrollbar";

function pinSidenav($this) {
    $('body').removeClass('g-sidenav-hidden').addClass('g-sidenav-show g-sidenav-pinned');
    $('body').append('<div class="mask-body mask-body-light d-xl-none" data-action="sidenav-unpin" data-target='+$('#sidenav-main').data('target')+' />');

    // Store the sidenav state in a cookie session
    localStorage.setItem('sidenav-state', 'pinned');
}

function unpinSidenav($this) {
    $('body').removeClass('g-sidenav-pinned').addClass('g-sidenav-hidden');
    $('body').find('.mask-body').remove();

    // Store the sidenav state in a cookie session
    localStorage.setItem('sidenav-state', 'unpinned');
}

function toggleSidenav(e) {
    e.preventDefault(e);
    let $this = $(e.currentTarget);
    let target = $this.data("target");
    if ($this.hasClass('active')) {
        unpinSidenav($(target))
    } else {
        pinSidenav($(target))
    }
    $this.toggleClass("active");
}

function setupSideNav(elements) {
    // Set sidenav state from cookie
    var $sidenavs = $(elements);

    if ($sidenavs.length) {
        $sidenavs.each(function() {
            init($(this));
        });
    }

    function init($this) {
        var $sidenavState = localStorage.getItem('sidenav-state') ? localStorage.getItem('sidenav-state') : 'pinned';

        if($(window).width() > 1200) {
            if($sidenavState === 'pinned') {
                pinSidenav($('#sidenav-toggler'));
            }

            if(localStorage.getItem('sidenav-state') === 'unpinned') {
                unpinSidenav($('#sidenav-main'));
            }
        }

        // Add sidenav modifier classes on mouse events

        $this.on('mouseenter', function() {
            if(! $('body').hasClass('g-sidenav-pinned')) {
                $('body').removeClass('g-sidenav-hide').removeClass('g-sidenav-hidden').addClass('g-sidenav-show');
            }
        });

        $this.on('mouseleave', function() {
            if(! $('body').hasClass('g-sidenav-pinned')) {
                $('body').removeClass('g-sidenav-show').addClass('g-sidenav-hide');

                setTimeout(function() {
                    $('body').removeClass('g-sidenav-hide').addClass('g-sidenav-hidden');
                }, 300);
            }
        });

        Scrollbar($this.find('.scrollbar-inner'));
    }
}

export {toggleSidenav,pinSidenav, unpinSidenav, setupSideNav};