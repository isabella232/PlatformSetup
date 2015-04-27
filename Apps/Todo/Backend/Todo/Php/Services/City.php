<?php

namespace Apps\Todo\Backend\Todo\Php\Services;

use Webiny\Platform\Services\AbstractEntityService;

class City extends AbstractEntityService
{

    /**
     * Get entity instance
     * @return \Apps\Todo\Common\Php\Entities\City
     */
    protected function getEntity()
    {
        return new \Apps\Todo\Common\Php\Entities\City();
    }
}