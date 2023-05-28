import { IsString } from 'class-validator';

export class AddNodeDTO {
  @IsString()
  id: string;

  @IsString()
  label: string;
}
