import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService{
    endpoint: string = environment.apiDashboard + "/login/";

    postLogin(data : any){
        return axios.post(this.endpoint, data)
        .then(resp => {return resp.data});
    }
}

