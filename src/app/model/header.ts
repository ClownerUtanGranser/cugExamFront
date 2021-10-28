import { HttpHeaders } from "@angular/common/http";

export class HttpHeader{

    httpHeader:HttpHeaders

    jwt:string = ''

    constructor(jwt:string){
        
        this.httpHeader = new HttpHeaders({
            'content-type' : 'application/json',
            'Authorization': 'Bearer '+ jwt
          });

    }

    getHeader()
    {
        return {headers: this.httpHeader}
    }

}