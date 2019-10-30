import { Injectable, EventEmitter, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class routerEmitter implements OnInit {
    public routerArry: any;
    public supervisor: any;

    constructor() {
        this.routerArry = new EventEmitter();
        this.supervisor = new EventEmitter();
    }
    ngOnInit() {

    }
}