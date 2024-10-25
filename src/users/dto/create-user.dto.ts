import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

    /** 
    * model User {
        id      Int      @id @default(autoincrement())
        email   String   @unique
        name    String?
        posts   Post[]
        Profile Profile?
    } 
    */

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({ name: "email", description: "The email of the user", example: "email@example.com" })
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ name: "name", description: "The name of the user", example: "John Doe" })
    name: string;


}
