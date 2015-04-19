<?php

namespace Apps\Todo\Backend\Todo\Php\Services;

use Apps\Todo\Common\Php\Entities\TodoTask;
use Webiny\Platform\Entity\EntityAbstract;
use Webiny\Platform\Services\AbstractEntityService;

class Item extends AbstractEntityService
{
    /**
     * Get entity instance
     * @return EntityAbstract
     */
    protected function getEntity()
    {
        return new TodoTask();
    }
}