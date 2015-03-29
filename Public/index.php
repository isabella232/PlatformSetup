<?php
use Webiny\Component\ClassLoader\ClassLoader;
use Webiny\Component\Http\Request;
use Webiny\Component\StdLib\StdObject\UrlObject\UrlObject;
use Webiny\Platform\Bootstrap\Platform;

require_once realpath(__DIR__ . '/../vendor/autoload.php');

$currentUrl = Request::getInstance()->getCurrentUrl(true);

// Load only platform config and setup Storage, Mongo, Entity and initialize Router component with empty config
$platform = Platform::getInstance();
$platform->setRootDir(__DIR__ . '/..')->setRequest($currentUrl)->prepare();

if(!$platform->isBackend()){
    /**
     * TODO: Frontend caching layer could be plugged in here
     *
     * NOTE: APPS ARE NOT LOADED AT THIS POINT!
     * Call `$platform->loadApps();` to load platform apps.
     *
     * Platform config is accessed using $platform->getConfig($key = null)
     * See $platform autocomplete for a list of all available methods
     *
     * If you want to access the output that wil be sent to browser, listen for 'Platform.BeforeSendOutput' event.
     * You get an instance of \Webiny\Platform\Events\OutputEvent passed to your event handler.
     * Use $event->getOutput() to get the actual HTML.
     *
     * Example of custom frontend route is located in: /Apps/Todo/Frontend/Test/Module.yaml
     */
}

// Load platform apps and register their services
$platform->loadApps();

// Check if it's an API request
$api = $currentUrl->getPath(true)->startsWith('/api');

if ($api) {
    $platform->runApi();
}
$platform->runApp();