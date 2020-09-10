import React, {useEffect} from "react";
import {setupSideNav} from "../js/toggle-sidenav";
import $ from "jquery";
import {Collapse} from "bootstrap";
import "popper";

function SideNavMain() {

    useEffect(() => {
        setupSideNav(".sidenav");
    });

    return (<nav className="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white"
                 id="sidenav-main" style={{height: "calc(100% - 84px)", top: 84}}>
        <div className="px-3 scrollbar-inner">
            {/*<!-- Collapse -->*/}
            <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                {/*<!-- Navigation -->*/}
                <ul className="navbar-nav navbar-nav-docs">
                    <li className="nav-item">
                        <a className="nav-link" href="#navbar-feeds" data-toggle="collapse" role="button"
                           aria-expanded="false" aria-controls="navbar-feeds">
                            Getting started
                        </a>
                        <div className="collapse" id="navbar-feeds">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a href="../docs/getting-started/installation.html"
                                       className="nav-link">Installation</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/getting-started/file-structure.html" className="nav-link">File
                                        structure</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/getting-started/quick-start.html" className="nav-link">Quick
                                        start</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/getting-started/build-tools.html" className="nav-link">Build
                                        tools</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/getting-started/customization.html"
                                       className="nav-link">Customization</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/getting-started/skins.html" className="nav-link">Skins</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/getting-started/plugins.html" className="nav-link">Plugins</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#navbar-styleguide" data-toggle="collapse" role="button"
                           aria-expanded="false" aria-controls="navbar-styleguide">
                            Styleguide
                        </a>
                        <div className="collapse" id="navbar-styleguide">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a href="../docs/styleguide/breakpoints.html" className="nav-link">Breakpoints</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/styleguide/colors.html" className="nav-link">Colors</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/styleguide/grid.html" className="nav-link">Grid</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/styleguide/icons.html" className="nav-link">Icons</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/styleguide/spacing.html" className="nav-link">Spacing</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/styleguide/typography.html" className="nav-link">Typography</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#navbar-components" data-toggle="collapse" role="button"
                           aria-expanded="false" aria-controls="navbar-components">
                            Components
                        </a>
                        <div className="collapse" id="navbar-components">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a href="../docs/components/alerts.html" className="nav-link">Alerts</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/avatar.html" className="nav-link">Avatar</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/badge.html" className="nav-link">Badge</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/breadcrumb.html" className="nav-link">Breadcrumb</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/buttons.html" className="nav-link">Buttons</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/card.html" className="nav-link">Card</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/carousel.html" className="nav-link">Carousel</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/collapse.html" className="nav-link">Collapse</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/countdown.html" className="nav-link">Countdown</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/counter.html" className="nav-link">Counter</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/divider.html" className="nav-link">Divider</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/dropdowns.html" className="nav-link">Dropdowns</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/forms.html" className="nav-link">Forms</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/icons.html" className="nav-link">Icons</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/input-group.html" className="nav-link">Input group</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/list-group.html" className="nav-link">List group</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/jumbotron.html" className="nav-link">Jumbotron</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/media-object.html" className="nav-link">Media object</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/modal.html" className="nav-link">Modal</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/navs.html" className="nav-link">Navs</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/navbar.html" className="nav-link">Navbar</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/omnisearch.html" className="nav-link">Omnisearch</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/pagination.html" className="nav-link">Pagination</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/popovers.html" className="nav-link">Popovers</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/progress.html" className="nav-link">Progress</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/spinners.html" className="nav-link">Spinners</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/tables.html" className="nav-link">Tables</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/toasts.html" className="nav-link">Toasts</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/tooltips.html" className="nav-link">Tooltips</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/components/tongues.html" className="nav-link">Tongues</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#navbar-plugins" data-toggle="collapse" role="button"
                           aria-expanded="false" aria-controls="navbar-plugins">
                            Plugins
                        </a>
                        <div className="collapse" id="navbar-plugins">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a href="../docs/plugins/animate.html" className="nav-link">Animate</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/plugins/autosize.html" className="nav-link">Autosize</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/plugins/datepicker.html" className="nav-link">Datepicker</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/plugins/fancybox.html" className="nav-link">Fancybox</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/plugins/google-maps.html" className="nav-link">Google maps</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/plugins/input-mask.html" className="nav-link">Input mask</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/plugins/list.html" className="nav-link">List</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/plugins/masonry.html" className="nav-link">Masonry</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/plugins/notify.html" className="nav-link">Notify</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/plugins/quill.html" className="nav-link">Quill</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/plugins/select.html" className="nav-link">Select</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/plugins/sweet-alert.html" className="nav-link">Sweet alert</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/plugins/swiper.html" className="nav-link">Swiper</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/plugins/tags.html" className="nav-link">Tags</a>
                                </li>
                                <li className="nav-item">
                                    <a href="../docs/plugins/typed.html" className="nav-link">Typed</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                {/*<!-- Heading -->*/}
                <h6 className="navbar-heading text-muted mt-4">Resources</h6>
                {/*<!-- Navigation -->*/}
                <ul className="navbar-nav mb-md-3">
                    <li className="nav-item">
                        <a className="nav-link" href="../docs/support.html">
                            <i className="fas fa-question-circle"></i>Support
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>Bootstrap
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>);
}

export default SideNavMain;