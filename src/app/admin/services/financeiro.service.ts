import { Inject, Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import axios from "axios";
import { Authentication } from "src/app/home/models/authentication.model";
 
@Injectable({
    providedIn: 'root'
})
export class FinanceiroService {
 
    endpoint: string = environment.apiDashboard + '/movimentacaofinanceira/';
 
    //POST
    postMovimentacao(data: any) {
        return axios.post(this.endpoint, data)
            .then(resp => { return resp.data });
    }
 
    //PUT
    putMovimentacao(data: any) {
        return axios.put(this.endpoint, data)
            .then(resp => { return resp.data });
    }
 
    //DELETE
    deleteMovimentacao(id: string) {
        return axios.delete(this.endpoint + id)
            .then(resp => { return resp.data });
    }
 
    //GET
    getMovimentacoes() {
        return axios.get(this.endpoint)
            .then(resp => { return resp.data });
    }
 
    //GET
    getMovimentacao(id: string) {
        return axios.get(this.endpoint + id)
            .then(resp => { return resp.data });
    }
 
    //GET
    getTiposMovimentacao() {
        return axios.get(this.endpoint + "tipos")
            .then(resp => { return resp.data });
    }
 
    //GET
    getPeriodoMovimentacao() {
        return axios.get(this.endpoint + "periodo")
            .then(resp => { return resp.data });
    }
}
 
//INTERCEPTADOR DE REQUISIÇÕES
axios.interceptors.request.use(
    config => {
       
        if (config.url != null) {
            if (config.url.includes('/movimentacaofinanceira/')) {
 
                let storage = localStorage.getItem('AUTHENTICATION_USER');
 
                if (config.headers != null && storage != null) {
                    let auth = JSON.parse(storage) as Authentication;
                    config.headers['Authorization'] = `Bearer ${auth.accessToken}`;
                }
            }
        }
 
        return config;
    },
    error => {
        Promise.reject(error);
    }
)



