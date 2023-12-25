import { Injectable } from '@nestjs/common'
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
    private users: UserEntity[] = [];

    async save(user: UserEntity) {
        this.users.push(user)
    }

    async list() {
        return this.users
    }

    async existWithEmail(email: string) {
        const possibleUser = this.users.find(
            user => user.email === email
        );

        return possibleUser !== undefined
    }

    private searchById(id: string) {
        const possibleUser = this.users.find(userSave => userSave.id === id)

        if (!possibleUser) { throw new Error('Usuário não existe') }

        return possibleUser
    }

    async update(id: string, dataToUpdate: Partial<UserEntity>) {
        const user = this.searchById(id)

        Object.entries(dataToUpdate).forEach(([key, value]) => {
            if (key === 'id') return

            user[key] = value
        })

        return user
    }

    async remove(id: string) {
        const user = this.searchById(id)
        this.users = this.users.filter(
            userSave => userSave.id !== id
        )

        return user
    }
}