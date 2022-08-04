export class UpdateExamUser {

        name: string;
        country: string;
        email: string;
        password: string;
        roles:string;

        constructor(email:string, name?:string, country?:string, roles?: string){
            this.email = email;
            this.country = country;
            this.name = name;
            this.roles = roles;
        }
    
}