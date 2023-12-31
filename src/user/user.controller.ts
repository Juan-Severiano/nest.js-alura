import { Controller, Post, Body, Get, Put, Param, Delete } from "@nestjs/common";
import { UserRepository } from './user.repository';
import { CreateUserDTO } from "./dto/CreateUser.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid } from 'uuid'
import { ListUserDTO } from "./dto/ListUser.dto";
import { UpdateUserDTO } from "./dto/UpdateUser.dto";

@Controller("/users")
export class UserController {
    constructor(private userRepository: UserRepository) {}

    @Post()
    async createUser(@Body() userData: CreateUserDTO) {
        const userEntity = new UserEntity();
        userEntity.name = userData.name
        userEntity.email = userData.email
        userEntity.password = userData.password
        userEntity.id = uuid()
        this.userRepository.save(userEntity)

        return { user: new ListUserDTO(userEntity.id, userEntity.name), message: 'Usuário criado com sucesso !!!' }
    }

    @Get()
    async listUsers() {
        const usersSaved = await this.userRepository.list()
        const listUsers = usersSaved.map(
            user => new ListUserDTO(
                user.id, user.name
            )
        )
        return listUsers
    }


    @Put('/:id')
    async userUpdate( @Param('id') id: string, @Body() newData: UpdateUserDTO ) {
        const userUpdated = await this.userRepository.update(id, newData)

        return {
            user: userUpdated,
              message: 'Usuário atualizado com sucesso'
        }
    }

    @Delete('/:id')
    async deleteUser(@Param('id') id: string, ) {
        const userDeleted = await this.userRepository.remove(id)

        return {
            user: this.deleteUser,
            message: 'Usuário deletado com sucesso  '
        }
    }
}