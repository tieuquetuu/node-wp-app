import $ from "jquery";

function pinSidenav($this) {
    $('.sidenav-toggler').addClass('active');
    $('.sidenav-toggler').data('action', 'sidenav-unpin');
    $('body').removeClass('g-sidenav-hidden').addClass('g-sidenav-show g-sidenav-pinned');
    $('body').append('<div class="mask-body mask-body-light d-xl-none" data-action="sidenav-unpin" data-target='+$('#sidenav-main').data('target')+' />');

    // Store the sidenav state in a cookie session
    localStorage.setItem('sidenav-state', 'pinned');
}

function unpinSidenav($this) {
    $('.sidenav-toggler').removeClass('active');
    $('.sidenav-toggler').data('action', 'sidenav-pin');
    $('body').removeClass('g-sidenav-pinned').addClass('g-sidenav-hidden');
    $('body').find('.mask-body').remove();

    // Store the sidenav state in a cookie session
    localStorage.setItem('sidenav-state', 'unpinned');
}

export {pinSidenav, unpinSidenav};