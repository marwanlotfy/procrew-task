<?php
namespace App\Repository;


use App\Entity\User as UserModel;
use Doctrine\Persistence\ManagerRegistry;
use App\Repository\Contracts\UserRepositoryInterface;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Domain\Entity\User;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository implements UserRepositoryInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserModel::class);
    }

    public function getAll()
    {
        $usersModels = parent::findAll();
        $users = [];
        foreach($usersModels as $userModel){
            $user = new User;
            $user->setId($userModel->id);
            $user->setName($userModel->name);
            $user->setEmail($userModel->email);
            $user->setPhone($userModel->phone);
            $users[] = $user;
        }
        return $users;
    }

}
