import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserTable1601481298933 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'user',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true
        },
        {
          name: 'name',
          type: 'varchar(64)',
          isUnique: true,
          isNullable: false
        },
        {
          name: 'login',
          type: 'varchar(64)',
          isUnique: true,
          isNullable: false
        },
        {
          name: 'password_hash',
          type: 'text'
        },
        {
          name: 'img',
          type: 'text'

        },
        {
          name: 'is_admin',
          type: 'boolean'
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }

}
