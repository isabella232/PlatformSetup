<?php
namespace Apps\Todo\Common\Php\Entities;


use Webiny\Component\Mongo\MongoTrait;
use Webiny\Platform\Entity\EntityAbstract;

class TodoTask extends EntityAbstract
{
    use MongoTrait;

    protected static $entityCollection = 'TodoTasks';

    /**
     * This method is called during instantiation to build entity structure
     * @return void
     */
    protected function entityStructure()
    {
        $this->attr('task')
             ->char()
             ->attr('email')
             ->char()
             ->attr('completed')
             ->boolean()
             ->setDefaultValue(false)
             ->attr('important')
             ->boolean()
             ->setDefaultValue(false)
             ->attr('settings')
             ->arr()
             ->setDefaultValue([]);
    }

    public static function emailExists($email, $skipId){
        return TodoTask::count(['email' => $email, 'id' => ['$ne' => $skipId]]);
    }
}