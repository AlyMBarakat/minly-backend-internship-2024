import { Body, Controller, Post } from '@nestjs/common';
import CreateMovieDto from './dtos/createMovieDto';
import { MoviesService } from './movies.service';
import { Movie } from 'src/entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Post()
  async createMovie(@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.moviesService.createMovie(createMovieDto);
  }
}
