<?php
namespace App\Tests\unit;

use Domain\Entity\User;
use PHPUnit\Framework\TestCase;

class UserTest extends TestCase
{
    protected $user;

    public function setUp() : void
    {
        parent::setUp();
        $this->user = new User;
    }

    public function test_that_we_can_create_user_with_correct_name_setted()
    {
        $name = 'testName';
        $this->user->setName($name);
        $this->assertEquals($name , $this->user->getName());
    }

    public function test_that_we_can_create_user_with_correct_phone_setted()
    {
        $phone = '01222222222';
        $this->user->setPhone($phone);
        $this->assertEquals($phone , $this->user->getPhone());
    }

    public function test_that_we_can_create_user_with_correct_email_setted()
    {
        $email = 'user@domain.com';
        $this->user->setEmail($email);
        $this->assertEquals($email , $this->user->getEmail());
    }
}

