import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from './book.model';

@Injectable()
export class BookService {

    constructor(private http: HttpClient) {
        this.http = http;
    }

    private bookServiceUrl = 'book/';
    private otherServiceUrl = 'http://gen.lib.rus.ec/json.php?fields=title,author,id,lcc,city,publisher,year&ids=';

    public findUser(bookID: number) {
        const url = (bookID < 1000) ? this.bookServiceUrl : this.otherServiceUrl;
        return this.http.get<Book>(url + bookID);
    }
}
