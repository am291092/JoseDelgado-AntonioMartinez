package Jose_Antonio.transversal.services.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import Jose_Antonio.transversal.dao.IDAOUsuario;
import Jose_Antonio.transversal.domain.dto.UsuarioDTO;
import Jose_Antonio.transversal.domain.entity.UsuarioEntity;
import Jose_Antonio.transversal.services.IServiceUsuario;



@Service
public class ServiceUsuarioImp implements IServiceUsuario {
	
	@Autowired
	private IDAOUsuario usuarioDao;

	@Override
	@Transactional
	public void save(UsuarioDTO usuario) {

		UsuarioEntity usuarioEntty = new UsuarioEntity();
	
		usuarioEntty.setCorreo(usuario.getCorreo());
		usuarioEntty.setNombre_usuario(usuario.getNombre_usuario());
		usuarioEntty.setNombre_real(usuario.getNombre_real());
		usuarioEntty.setApellido1(usuario.getApellido1());
		usuarioEntty.setApellido2(usuario.getApellido2());
		usuarioEntty.setContrasena(usuario.getContrasena());
		if(usuario.getSaldo()==null) {
			
			usuarioEntty.setSaldo(0);
		}else {
			
			usuarioEntty.setSaldo(usuario.getSaldo());
		}
		
		usuarioDao.save(usuarioEntty);
		
		
	}


	
	
	
	
	
	
	@Override
	@Transactional
	public void merge(UsuarioDTO usuario) {
		UsuarioEntity usuarioEntty = new UsuarioEntity();
		
		
	}

	@Override
	@Transactional
	public void remove(String email) {
	
		
	}

	@Override
	@Transactional(readOnly = true)
	public UsuarioDTO findById(String email) {
		UsuarioDTO usuarioDto= null;
		UsuarioEntity usuarioEntty=new UsuarioEntity();
		
		usuarioEntty=usuarioDao.findById(email).orElse(null);
		try {
			if(usuarioEntty!=null) {
				usuarioDto= new UsuarioDTO();
				usuarioDto.setApellido1(usuarioEntty.getApellido1());
				usuarioDto.setApellido2(usuarioEntty.getApellido2());
				usuarioDto.setContrasena(usuarioEntty.getContrasena());
				usuarioDto.setCorreo(usuarioEntty.getCorreo());
				usuarioDto.setNombre_real(usuarioEntty.getNombre_real());
				usuarioDto.setNombre_usuario(usuarioEntty.getNombre_usuario());
				usuarioDto.setSaldo(usuarioEntty.getSaldo());
			}
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
		
		
		return usuarioDto;
	}

	@Override
	@Transactional(readOnly = true)
	public List<UsuarioDTO> findAll() {
		List<UsuarioDTO> listaDto = new ArrayList<>();
	

		return listaDto;
	}

}
