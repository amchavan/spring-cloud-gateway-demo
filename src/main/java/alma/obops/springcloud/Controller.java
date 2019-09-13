package alma.obops.springcloud;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.mvc.ProxyExchange;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    public static final String REMOTE_BOOK_SERVICE_URL = "http://gen.lib.rus.ec/json.php?fields=title,author,id,lcc,city,publisher,year&ids=";

    @Autowired
    private BookDao bookDao;

    @GetMapping( "/book/{id}" )
    public Object remoteFindBookById( @PathVariable Long id, ProxyExchange<byte[]> proxy ) {
        Book found = bookDao.findOne( id );
        if( found != null ) {
            return found;
        }
        return proxy.uri( REMOTE_BOOK_SERVICE_URL + id ).get();
    }
}
