import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tb_postagem' }) // cria tabela
export class Postagem {
  @PrimaryGeneratedColumn() // criar PK
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  title: string;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  texto: string;

  @UpdateDateColumn()
  data: Date;
}
