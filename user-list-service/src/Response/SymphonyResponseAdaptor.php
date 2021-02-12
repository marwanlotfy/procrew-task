<?php
namespace App\Response;


use App\Response\Contracts\ResponseInterface;
use Symfony\Component\HttpFoundation\Response;

class SymphonyResponseAdaptor implements ResponseInterface
{
    private $response;

    public function __construct()
    {
        $this->response = new Response();
    }

    public function expectJson()
    {
        $this->response->headers->set('Content-Type', 'application/json');
    }

    public function send($output)
    {
        return $this->response->setContent($output);
    }
}
