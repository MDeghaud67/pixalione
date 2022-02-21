import { Role } from "./role";
export class User {
    constructor(
        public username: string,
        public password: string,
        public firstName: string,
        public lastName: string,
        public birthday: string,
        public gender: string,
        public role: Role,
        public token?: string
    ){}
}
