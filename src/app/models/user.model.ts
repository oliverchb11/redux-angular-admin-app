export class User{

    static formFireStore({uid, name, email}: any){
        return new User(uid, name, email)
    }
    constructor(
        public uid: string,
        public name: string,
        public email: string
        ){}
}