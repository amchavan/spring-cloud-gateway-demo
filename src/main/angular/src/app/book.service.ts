import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from './book.model';

@Injectable()
export class BookService {

    constructor(private http: HttpClient) {
        this.http = http;
    }

    private bookServiceUrl = 'book/';

    public findUser(bookID: number) {
        return this.http.get<Book>(this.bookServiceUrl + bookID);
    }
}
