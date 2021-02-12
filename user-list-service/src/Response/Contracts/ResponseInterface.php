<?php
namespace App\Response\Contracts;

interface ResponseInterface{
    public function send($output);
    public function expectJson();
}
