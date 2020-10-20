import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCountryTable1601453182418 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'country',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
        },
        {
          name: 'name',
          type: 'text',
          isUnique: true,
          isNullable: false,
        },
        {
          name: 'description',
          type: 'text',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('country');
  }
}
