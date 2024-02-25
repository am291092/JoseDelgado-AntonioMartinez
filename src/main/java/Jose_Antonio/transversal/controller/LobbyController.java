package Jose_Antonio.transversal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import Jose_Antonio.transversal.domain.dto.UsuarioDTO;
import Jose_Antonio.transversal.services.IServiceUsuario;
import jakarta.servlet.http.HttpServletRequest;

@Controller
@RequestMapping(value="/lobby")
public class LobbyController {
	
	@Autowired
	private IServiceUsuario servicioUsuario;
	private String registrado = "";
	
	@GetMapping(value="")
    public String volver(HttpServletRequest request, Model modelo) {
        System.out.println(registrado);
        UsuarioDTO usuarioRegistrado=servicioUsuario.findById(registrado);
        modelo.addAttribute("correo",registrado);
        modelo.addAttribute("fichitas",usuarioRegistrado.getSaldo());

        return "lobby";
    }
	
	@GetMapping(value="ruleta")
	public String ruleta(HttpServletRequest request, Model modelo) {
		registrado = request.getParameter("correo");
		System.out.println(registrado);
		UsuarioDTO usuarioRegistrado=servicioUsuario.findById(registrado);
		modelo.addAttribute("correo",registrado);
		modelo.addAttribute("fichitas",usuarioRegistrado.getSaldo());
		
		return "lobby/ruleta";
	}
	
	@GetMapping(value="galgos")
	public String galgo(HttpServletRequest request, Model modelo) {
		registrado = request.getParameter("correo");
		System.out.println(registrado);
		UsuarioDTO usuarioRegistrado=servicioUsuario.findById(registrado);
		modelo.addAttribute("correo",registrado);
		modelo.addAttribute("fichitas",usuarioRegistrado.getSaldo());
		
		return "lobby/galgos";
	}
}
