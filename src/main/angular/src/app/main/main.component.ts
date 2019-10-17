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

    bookID: any;
    private currentBook: Book;

    constructor( private bookService: BookService ) {
    }

    ngOnInit() {
    }

    search() {
        if( this.bookID === undefined ) {
            return;
        }
        console.log( this.bookID );
        this.bookService.findBook( this.bookID ).subscribe(data => {
            console.log( JSON.stringify( data ));
            if( data instanceof Array) {
                data = data[0];
            }
            this.currentBook = data;
        });
    }
}
