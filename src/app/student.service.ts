import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {  Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable() 
export class studentService{
    private studentUrl:string = 'http://59fd66fb1c06d100120cd187.mockapi.io/createEmployee';
    constructor(private http: Http){}
    getStudent() {
        return this.http.get(this.studentUrl)
        .map((response:Response) => response.json())
    }
    postStudent(value){
        return this.http.post(this.studentUrl,value).map((response:Response) => response.json().data);
    }
}
