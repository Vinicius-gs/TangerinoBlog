package tangerino.backend.rest;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import tangerino.backend.entities.Post;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
@RepositoryRestResource(collectionResourceRel = "Post", path = "Post")
public interface PostCRUD extends CrudRepository <Post,Long>  {

}
