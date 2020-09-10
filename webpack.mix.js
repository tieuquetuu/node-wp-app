let mix = require('laravel-mix');

mix.setPublicPath('public')
    .sass('resources/scss/theme.scss', 'public/css')
    .combine([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
        'node_modules/in-view/dist/in-view.min.js',
        'node_modules/sticky-kit/dist/sticky-kit.min.js',
        'node_modules/svg-injector/dist/svg-injector.min.js',
        'node_modules/jquery.scrollbar/jquery.scrollbar.min.js',
        'node_modules/jquery-scroll-lock/dist/jquery-scrollLock.min.js',
        'node_modules/imagesloaded/imagesloaded.pkgd.min.js',
    ], 'public/js/theme.core.js')
    .combine([
        // 'resources/js/purpose/license.js',
        'resources/js/purpose/layout.js',
        'resources/js/purpose/init/*.js',
        'resources/js/purpose/custom/*.js',
        // 'resources/js/purpose/maps/*.js',
        'resources/js/purpose/libs/*.js',
        // 'resources/js/purpose/charts/*.js'
    ], 'public/js/theme.js');


// Options

mix.options({
    processCssUrls: false
});


// Live reload

// mix.browserSync({
// 	browser: 'Google Chrome',
// 	proxy: false,
// 	server: {
// 		baseDir: './',
// 	},
// 	files: [
//         '**/*.html',
//         '**/*.js',
//         '**/*.css'
//     ]
// });


// Production settings

if (mix.inProduction()) {

}
