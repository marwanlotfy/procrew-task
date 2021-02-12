<?php
namespace App\Presentation;

use App\Response\Contracts\ResponseInterface;
use App\Presentation\Contracts\UserPresenterInterface;


class JSONUserPresenter implements UserPresenterInterface
{
    private $response;

    public function __construct(ResponseInterface $response)
    {
        $this->response = $response;
        $this->response->expectJson();
    }

    public function render($users)
    {
        $data = [];

        foreach ($users as $user) {
             $data[] = [
                 'id' => $user->getId(),
                 'name' => $user->getName(),
                 'email' => $user->getEmail(),
                 'phone' => $user->getPhone()
             ];
        }

        return $this->response->send(
            json_encode($data)
        );
    }
}
