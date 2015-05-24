<?php
namespace Apps\Webiny\Backend\Layout\Php\Handlers;

use Webiny\Component\Config\ConfigTrait;
use Webiny\Component\Storage\StorageTrait;
use Webiny\Platform\Bootstrap\App;
use Webiny\Platform\Bootstrap\Generators\BackendBootstrap;
use Webiny\Platform\Builders\Backend\DevelopmentBuilder;
use Webiny\Platform\Responses\HtmlResponse;
use Webiny\Platform\Traits\PlatformTrait;
use Webiny\Platform\Traits\TemplateEngineTrait;
use Webiny\Component\EventManager\Event;
use Webiny\Component\StdLib\StdLibTrait;

class RenderApp
{
    use StdLibTrait, PlatformTrait, TemplateEngineTrait, ConfigTrait, StorageTrait;

    public function handle(Event $event)
    {
        error_reporting(E_ALL);
        ini_set("display_errors", 1);
        if ($this->getPlatform()->getEnvironment()->isDevelopment()) {
            /* @var $app App */
            foreach ($this->getPlatform()->getApps() as $app) {
                $builder = new DevelopmentBuilder();
                $builder->setAppsStorage($this->storage('Apps'))->setBuildStorage($this->storage('Build'))->buildApp($app);
            }
        }

        $bootstrapGenerator = new BackendBootstrap();
        $assets = $bootstrapGenerator->generateBootstrapFile();
        
        $data['assets'] = $assets;
        $html = $this->templateEngine()->fetch($this->getModule()->getTemplate('Master.php'), $data);

        return $html;
    }
}