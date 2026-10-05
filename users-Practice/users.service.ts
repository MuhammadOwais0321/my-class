import { Injectable } from '@nestjs/common';
import { UsersDbService } from './users.db.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(private readonly usersDbService: UsersDbService) { }

    async createUser(createUserDto: CreateUserDto) {
        return this.usersDbService.createUser(createUserDto);
    }
}
