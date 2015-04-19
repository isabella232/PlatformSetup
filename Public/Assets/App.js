import EventManager from '/Webiny/Core/EventManager';
import Router from '/Webiny/Core/Router/Router';
import Http from '/Webiny/Core/Http';

/* Global classes */
import Tools from '/Webiny/Core/Tools/Tools';
import BaseComponent from '/Webiny/Core/Base/BaseComponent';
import ComponentLoader from '/Webiny/Core/Component/ComponentLoader';
window.Tools = Tools;
window.ComponentLoader = ComponentLoader;

/* For development purposes */
window.Router = Router;
window.EventManager = EventManager;
window.BaseComponent = BaseComponent;

/* Expose these often used components so we don't need to import them all the time */
window.Http = Http;

import TodoApp from '/Todo/App';
import WebinyApp from '/Webiny/App';
import MainComponent from '/Webiny/Layout/Components/App';
var todoApp = new TodoApp();
var webinyApp = new WebinyApp();

Router.setActiveRoute(window.location.pathname);
var mainComponent = MainComponent.createElement();
React.render(mainComponent, document.getElementById('app'));
Router.start(window.location.pathname);

$(document).on('click', 'a', function(e){
e.preventDefault();
Router.goTo(e.target.href);
});
