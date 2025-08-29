import { IsString, IsIn } from 'class-validator';

export class AvaliarPaisDto {
  @IsString()
  countryCode: string;

  @IsString()
  @IsIn(['like', 'dislike'])
  vote: 'like' | 'dislike';
}
