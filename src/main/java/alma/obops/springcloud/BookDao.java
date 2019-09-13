package alma.obops.springcloud;

import org.springframework.stereotype.Component;

import java.util.concurrent.ThreadLocalRandom;

@Component
public class BookDao {

    // Bogus book database "search" -- in fact it creates a book with every call
    public Book findOne(long id) {
        Book u = new Book();
        u.id = Long.toString( id );
        u.title = "This is book " + id;
        u.author = "A. U. Thor (" + id + ")";

        int year = ThreadLocalRandom.current().nextInt( 1900, 2019 );
        u.year = Integer.toString( year );
        return u;
    }
}
