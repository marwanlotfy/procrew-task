<?php
namespace App\Presentation\Contracts;


interface UserPresenterInterface{
    /*
        we hope that PHP use Genirecs one day to Specify The Kind of Collection
        Like Saying UserPresenterInterface extends DomainPresenterInterface<User>
        and Method stringfy will be signed by stringfy(array<User> $userCollection);
        and i think its have been added to PHP V.8
     */

    public function render($userCollection);
}
