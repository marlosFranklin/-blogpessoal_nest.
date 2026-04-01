import {
  Controller,
  Get,
  Post,
  Put,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Body,
  Delete,
} from '@nestjs/common';
import { Postagem } from '../entities/postagem.entity';
import { PostagemService } from '../service/postagem.service';

@Controller('/postagens')
export class PostagemController {
  constructor(private readonly postagemService: PostagemService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Postagem[]> {
    return this.postagemService.findAll();
  }

  @Get('/:id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.postagemService.findById(id);
  }

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() postagem: Postagem): Promise<Postagem> {
    return this.postagemService.create(postagem);
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.postagemService.delete(id);
  }

  @Get('/titulo/:titulo')
  @HttpCode(HttpStatus.OK)
  findAllByTitle(@Param('titulo') titulo: string): Promise<Postagem[]> {
    return this.postagemService.findAllByTitle(titulo);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() postagem: Postagem): Promise<Postagem> {
    return this.postagemService.update(postagem);
  }
}
