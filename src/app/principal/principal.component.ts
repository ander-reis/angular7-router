import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-principal',
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

    post: string;

    constructor() {
    }

    ngOnInit() {
        this.post = 'schoolofnet';
    }

}
