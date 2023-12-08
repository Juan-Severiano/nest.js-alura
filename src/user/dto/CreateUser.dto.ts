import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";


export class CreateUserDTO {

    @IsString({ message: 'the name must be a string' })
    @IsNotEmpty({ message: 'name cant be empty' })
    name: string;

    @IsEmail()
    @EmailIsUnique()
    @IsNotEmpty({ message: "o email nao pode ser vazio baby" })
    email: string; 
    
    @IsNotEmpty()
    @MinLength(6, { message: 'O tamanho minimo é de 6 caracteres' })
    password: string;
}