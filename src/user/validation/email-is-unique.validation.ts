import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserRepository } from "../user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailIsUniqueValidator implements ValidatorConstraintInterface {
    constructor(private userRepository: UserRepository) {

    }

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const userExist = await this.userRepository.existWithEmail(value)
        return !userExist
    }
}