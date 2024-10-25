import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePostDto {

  /**model Post {
      id        Int      @id @default(autoincrement())
      title     String
      content   String?
      published Boolean? @default(false)
      author    User?    @relation(fields: [authorId], references: [id])
      authorId  Int?
  } 
*/

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Post title', name: 'title', description: 'The title of the post' })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Post content', description: 'The content of the post', title: 'The content of the post'
  })
  content: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1, description: 'The author of the post', title: 'The author of the post' })
  authorId: number;

}
