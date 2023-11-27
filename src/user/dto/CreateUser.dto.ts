import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";


export class CreateUserDTO {

    @IsString({ message: 'the name must be a string' })
    @IsNotEmpty({ message: 'name cant be empty' })
    name: string;

    @IsEmail()
    @IsNotEmpty({ message: "o email nao pode ser vazio baby" })
    email: string; 
    
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}