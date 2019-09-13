package alma.obops.springcloud;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.mvc.ProxyExchange;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.ThreadLocalRandom;

@RestController
public class Controller {

    @Autowired
    private BookDao bookDao;

    @GetMapping( "/book/{id}" )
    public Book findById( @PathVariable Long id ) {
        return bookDao.findOne( id );
    }
}
