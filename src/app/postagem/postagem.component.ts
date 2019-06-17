import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-postagem',
    templateUrl: './postagem.component.html',
    styleUrls: ['./postagem.component.scss']
})
export class PostagemComponent implements OnInit {

    valor: string;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.valor = params.get('id');
            console.log(this.valor);
        });
    }

}
