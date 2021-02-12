<?php

namespace App\Controller;

use App\Repository\Contracts\UserRepositoryInterface;
use App\Presentation\Contracts\UserPresenterInterface;

class UserController
{
    protected $response;
    protected $users;

    public function __construct(UserRepositoryInterface $users)
    {
        $this->users = $users;
    }

    public function index(UserPresenterInterface $presenter)
    {
        return $presenter->render(
                $this->users->getAll()
        );
    }
}
