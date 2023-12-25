import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailIsUnique } from "../validation/email-is-unique.validation";


export class UpdateUserDTO {

    @IsString({ message: 'the name must be a string' })
    @IsNotEmpty({ message: 'name cant be empty' })
    @IsOptional()
    name: string;

    @IsEmail()
    @EmailIsUnique({ message: 'Já existe um usuário cadastrado com esse email' })
    @IsNotEmpty({ message: "o email nao pode ser vazio baby" })
    @IsOptional()
    email: string; 
    
    @IsNotEmpty()
    @MinLength(6, { message: 'O tamanho minimo é de 6 caracteres' })
    @IsOptional()
    password: string;
}