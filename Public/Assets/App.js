import EventManager from '/Core/Core/EventManager';
import Router from '/Core/Core/Router/Router';
import Http from '/Core/Core/Http';

/* Global classes */
import Tools from '/Core/Core/Tools/Tools';
import BaseComponent from '/Core/Core/Base/BaseComponent';
import ComponentLoader from '/Core/Core/Component/ComponentLoader';
window.Tools = Tools;
window.ComponentLoader = ComponentLoader;

/* For development purposes */
window.Router = Router;
window.EventManager = EventManager;
window.BaseComponent = BaseComponent;

/* Expose these often used components so we don't need to import them all the time */
window.Http = Http;

import CoreApp from '/Apps/Core/Build/Development/Backend/App.js';
import TodoApp from '/Apps/Todo/Build/Development/Backend/App.js';
import MainComponent from '/Core/Layout/Components/App';
var coreApp = new CoreApp();
var todoApp = new TodoApp();

Router.setActiveRoute(window.location.pathname);
var mainComponent = MainComponent.createElement();
React.render(mainComponent, document.getElementById('app'));
Router.start(window.location.pathname);

$(document).on('click', 'a', function(e){
e.preventDefault();
Router.goTo(e.target.href);
});
