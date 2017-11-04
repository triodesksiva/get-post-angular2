import { Component, OnInit } from '@angular/core';
import { studentService } from './student.service';
import {  Http,Response } from '@angular/http';
@Component({
    selector: 'selector-name',
    templateUrl: 'studentpost.component.html'
})

export class NameComponent implements OnInit {
    ngOnInit() { }
    getStudent:string;
    constructor(private enterStudent:studentService){};
    putstudent(value){
        console.log(value)
       return this.enterStudent.postStudent(value)
        .subscribe(regstudent => this.getStudent=regstudent);
        
    }

}