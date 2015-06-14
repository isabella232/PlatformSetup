<?php

namespace Apps\Todo\Backend\Todo\Php\Services;

use Apps\Todo\Common\Php\Entities\TodoTask;
use Webiny\Component\Http\Response\JsonResponse;
use Webiny\Component\Rest\RestErrorException;
use Webiny\Platform\Services\AbstractEntityService;

class Item extends AbstractEntityService
{

    /**
     * Get entity instance
     * @return TodoTask
     */
    protected function getEntity()
    {
        return new TodoTask();
    }

    /**
     * Validate email address
     *
     * @rest.method GET
     *
     * @return bool
     * @throws RestErrorException
     */
    public function validateEmail($id, $email)
    {
        return !$this->getEntity()->emailExists($email, $id);
    }

    /**
     * @rest.method GET
     * @rest.url {id}/settings/{settingsId}
     */
    public function taskSettings($id, $settingsId){
        return func_get_args();
        $task = $this->crudGet($id);
        return $task['settings'];
    }
}