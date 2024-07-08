import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeTitleAndAddRating1720430532385
  implements MigrationInterface
{
  name = 'ChangeTitleAndAddRating1720430532385';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "movie" ADD "rating" integer NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "releaseDate"`);
    await queryRunner.query(
      `ALTER TABLE "movie" ADD "releaseDate" integer NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "releaseDate"`);
    await queryRunner.query(
      `ALTER TABLE "movie" ADD "releaseDate" character varying NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "rating"`);
  }
}
