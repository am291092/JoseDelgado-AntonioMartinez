package Jose_Antonio.transversal.services;

import java.util.List;

import Jose_Antonio.transversal.domain.dto.UsuarioDTO;

public interface IServiceUsuario {
	
	public void save(UsuarioDTO usuario);
	public void merge(UsuarioDTO usuario);
	public void remove(String email);
	public UsuarioDTO findById(String email);
	public List<UsuarioDTO> findAll();

}
