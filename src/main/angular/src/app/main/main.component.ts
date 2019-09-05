import { Component, OnInit } from '@angular/core';
import { BookService } from "../book.service";
import { Book } from "../book.model";

@Component({
    selector: 'app-add',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    providers: [BookService]
})
export class MainComponent implements OnInit {

    userID: any;
    private currentUser: Book;

    constructor( private userService: BookService ) {
    }

    ngOnInit() {
    }

    search() {
        if( this.userID === undefined ) {
            return;
        }
        console.log( this.userID );
        this.userService.findUser( this.userID ).subscribe(data => {
            console.log( JSON.stringify( data ));
            if( data instanceof Array) {
                data = data[0];
            }
            this.currentUser = data;
        });
    }
}
