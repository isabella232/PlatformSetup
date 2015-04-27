<?php
namespace Apps\Todo\Common\Php\Entities;

use Webiny\Component\Mongo\MongoTrait;
use Webiny\Platform\Entity\EntityAbstract;

class City extends EntityAbstract
{
    use MongoTrait;

    protected static $entityCollection = 'City';

    protected static $entityMask = '{name} ({zip})';

    /**
     * This method is called during instantiation to build entity structure
     * @return void
     */
    protected function entityStructure()
    {
        $this->attr('zip')->char()->attr('name')->char();
    }
}