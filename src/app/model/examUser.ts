export class ExamUser {

    country:string = ''
    email:string = ''
    examsTaken = []
    name:string = ""
    roles:string = ""
    jwt:string = ''
    exp?:number
    iat?:number

    constructor(name?:string, country?:string, email?:string){}
}