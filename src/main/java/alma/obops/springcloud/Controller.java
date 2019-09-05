package alma.obops.springcloud;

import org.springframework.cloud.gateway.mvc.ProxyExchange;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.ThreadLocalRandom;

@RestController
public class Controller {

    @GetMapping( "/book/{id}" )
    public Book findById(@PathVariable String id ) {
        Book u = new Book();
        u.id = id;
        u.title = "This is book " + id;
        u.author = "A. U. Thor (" + id + ")";

        int year = ThreadLocalRandom.current().nextInt( 1900, 2019 );
        u.year = Integer.toString( year );
        return u;
    }

    // This API is "documented" at http://garbage.world/posts/libgen/
    private String remoteServiceUrl = "http://gen.lib.rus.ec/json.php?fields=title,author,id,lcc,city,publisher,year&ids=";

    @GetMapping( "/rbook/{id}" )
    public ResponseEntity<?> proxy(@PathVariable Long id, ProxyExchange<byte[]> proxy) {
        return proxy.uri( remoteServiceUrl + id ).get();
    }
}
