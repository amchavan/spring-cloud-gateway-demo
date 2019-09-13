package alma.obops.springcloud;

import org.springframework.stereotype.Component;

import java.util.concurrent.ThreadLocalRandom;

@Component
public class BookDao {

    /**
     * Book database search
     * @return A Book instance, or <code>null</code> if id doesn't match any
     *         books in the database
     */
    // Bogus implementation, creates a book with every call
    public Book findOne(long id) {

        if( id < 1 || id > 1000 ) {
            return null;
        }

        int year = ThreadLocalRandom.current().nextInt( 1900, 2019 );

        Book u = new Book();
        u.id = Long.toString( id );
        u.title = "This is book " + id;
        u.author = "A. U. Thor (" + id + ")";
        u.year = Integer.toString( year );
        return u;
    }
}
