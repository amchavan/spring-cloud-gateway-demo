import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from './book.model';

const bookServiceUrl = 'book/';

@Injectable()
export class BookService {

    constructor(private http: HttpClient) {
        this.http = http;
    }

    public findUser(bookID: number) {
        return this.http.get<Book>( bookServiceUrl + bookID );
    }
}
