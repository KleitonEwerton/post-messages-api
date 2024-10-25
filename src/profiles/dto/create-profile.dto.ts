import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProfileDto {

    /**
     *  model Profile {
            id     Int     @id @default(autoincrement())
            bio    String?
            user   User    @relation(fields: [userId], references: [id])
            userId Int     @unique
        }

     */

    @IsString()
    @ApiProperty({ name: "bio", type: String, description: "The user's biography" })
    bio: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ name: "userId", type: Number, description: "The id of the user" })
    userId: number;


}
