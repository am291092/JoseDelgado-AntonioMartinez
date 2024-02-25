package Jose_Antonio.transversal.dao;

import org.springframework.data.repository.CrudRepository;

import Jose_Antonio.transversal.domain.entity.UsuarioEntity;

public interface IDAOUsuario extends CrudRepository<UsuarioEntity, String> {

}
