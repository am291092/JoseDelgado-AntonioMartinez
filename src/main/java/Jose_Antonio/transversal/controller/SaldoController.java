package Jose_Antonio.transversal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import Jose_Antonio.transversal.domain.dto.UsuarioDTO;
import Jose_Antonio.transversal.services.IServiceUsuario;

@Controller
@RequestMapping(value="/dinero")
public class SaldoController {
	
	@Autowired
	private IServiceUsuario servicioUsuario;
	
	@PostMapping(value="/ingresar")
	@ResponseBody
	public Integer ingresar(@RequestBody UsuarioDTO cliente) {
		
		UsuarioDTO user =servicioUsuario.findById(cliente.getCorreo());
		int saldoNuevo=cliente.getSaldo();
		user.setSaldo(saldoNuevo);
		System.out.println("saldonuevo"+saldoNuevo+cliente.getCorreo());
		
		servicioUsuario.save(user);
		
		
		
		return saldoNuevo;
	}
	
	@PostMapping(value="/retirar")
	@ResponseBody
	public Integer retirar(@RequestBody UsuarioDTO cliente) {
		
		UsuarioDTO user =servicioUsuario.findById(cliente.getCorreo());
		int saldoNuevo=0;
		user.setSaldo(saldoNuevo);
		
		
		servicioUsuario.save(user);
		
		
		
		return saldoNuevo;
	}

}
