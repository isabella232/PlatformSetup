<?php
use cli\Arguments;
use Webiny\Component\ServiceManager\ServiceManager;
use Webiny\Component\StdLib\StdLibTrait;
use Webiny\Component\StdLib\StdObject\UrlObject\UrlObject;
use Webiny\Component\Storage\Storage;
use Webiny\Platform\Bootstrap\Platform;
use Webiny\Platform\Builders\Backend\DevelopmentBuilder;

error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once realpath(__DIR__ . '/../vendor/autoload.php');

class Build
{
    use StdLibTrait;

    function __construct($argv)
    {
        /**
         * Parse command-line parameters
         */
        $strict = in_array('--strict', $argv);
        $arguments = new Arguments(compact('strict'));
        $arguments->addOption(array('domain', 'd'), 'Domain to load');
        $arguments->addOption(array('app', 'a'), 'App to build');
        $arguments->addFlag(array('dev'), 'Development build');
        $arguments->addFlag(array('help', 'h'), 'Show this help screen');

        $arguments->parse();
        if ($arguments['help']) {
            \cli\out("\nWebiny Backend Builder\n\n");
            \cli\out($arguments->getHelpScreen());
            \cli\out("\n\n");
            die();
        }

        $this->_build($arguments);
    }

    private function _build($args)
    {
        /**
         * Load platform apps
         */
        $platform = Platform::getInstance();
        $domain = $args['domain'];
        if (!$this->str($domain)->startsWith('http://')) {
            $domain = 'http://' . $domain;
        }
        $currentUrl = new UrlObject($domain);
        $platform->setRootDir(__DIR__ . '/..')->setRequest($currentUrl)->setArea(Platform::BACKEND)->prepare();
        $platform->loadApps();
        
        $app = $platform->getApps($args['app']);
        if (!$app) {
            \cli\err("App with name `" . $args['app'] . "` was not found!\n");
            die();
        }

        /* @var Storage $appsStorage */
        $appsStorage = ServiceManager::getInstance()->getService('Storage.Apps');

        if ($args['dev']) {
            $builder = new DevelopmentBuilder();
            $builder->setAppsStorage($appsStorage)->buildApp($app);
        } else {
            //$builder = new ProductionBuilder($this->_config);
            //$builder->setAppsStorage($this->_storage)->buildApp($app);
        }
    }

}

$build = new Build($argv);
