<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210211151138 extends AbstractMigration
{
    public function getDescription() : string
    {
        return 'generate users table';
    }

    public function up(Schema $schema) : void
    {
        $table = $schema->createTable('user');
        $table->addColumn('id', 'integer', array(
            'autoincrement' => true,
        ));
        $table->addColumn('name','string');
        $table->setPrimaryKey(array('id'));
        $table->addColumn('phone','string');
        $table->addColumn('email','string');
    }

    public function down(Schema $schema) : void
    {
        $schema->dropTable('user');
    }
}
