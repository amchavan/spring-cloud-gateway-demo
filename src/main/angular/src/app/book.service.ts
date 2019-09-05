import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Book} from './book.model';


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class BookService {

    constructor(private http: HttpClient) {
        this.http = http;
    }

    private bookServiceUrl = 'book/';

    // public findUser(userID: number) {
    //     const url = this.bookServiceUrl + '/' + userID;
    //     return this.http.get<Book>(url);
    // }

    // private otherUserUrl = 'http://gen.lib.rus.ec/json.php?fields=title,author,id,lcc,city,publisher,year&ids=';
    private otherUserUrl = 'rbook/';

    public findUser(bookID: number) {
        const url = (bookID < 1000) ? this.bookServiceUrl : this.otherUserUrl;
        return this.http.get<Book>(url + bookID);
    }
}
