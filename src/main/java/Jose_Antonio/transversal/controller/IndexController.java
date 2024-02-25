package Jose_Antonio.transversal.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import Jose_Antonio.transversal.domain.dto.UsuarioDTO;
import Jose_Antonio.transversal.services.IServiceUsuario;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;




@Controller
public class IndexController {
	
	@Autowired
	private IServiceUsuario servicioUsuario;
	
	
	private String registrado = null;
	@GetMapping(value= {"","/"})
	public String inicio(Model modelo) {
		modelo.addAttribute("usuario", new UsuarioDTO ());
		return "login";
	}
	
	@PostMapping(value = "/recuperarValores")
	public String recuperarValores(Model modelo,@Valid @ModelAttribute(value = "usuario") final UsuarioDTO usuario, BindingResult result) {
		
		String fordward = "";
		Map<String, String> errors = null;
		try {
			if (result.hasErrors()) {
				modelo.addAttribute("errores", errors);
				
				fordward="/login";
			}
			else {
		servicioUsuario.save(usuario);
		fordward="/login";
			}
		}catch (Exception e) {
				System.out.println(e.getMessage());
			}
		
	
		return fordward;
	}
	
	
	


	@PostMapping(value="/login")
	public String login(Model modelo,@Valid @ModelAttribute(value = "usuario") final UsuarioDTO usuario, BindingResult result) {
		String fordwar="login";
				
		String fordward = "";
		Map<String, String> errors = null;
		try {
			if (result.hasErrors()) {
				modelo.addAttribute("errores", errors);
				
				fordward="/login";
			}
			else {
					UsuarioDTO usuarioRegistrado=servicioUsuario.findById(usuario.getCorreo());
					if(null!=usuarioRegistrado) {
						if(usuarioRegistrado.getContrasena().equals(usuario.getContrasena())) {
							registrado = usuarioRegistrado.getCorreo();
							modelo.addAttribute("correo",registrado);
							modelo.addAttribute("fichitas",usuarioRegistrado.getSaldo());
							 fordwar="lobby";
						}else {
							modelo.addAttribute("error", "Usuario o contraseña incorrecto");
							System.out.println("error");
							fordwar="login";
						}
						
						
						
					}else {
						modelo.addAttribute("error", "Usuario o contraseña incorrecto");
						System.out.println("error");
						fordwar="login";
					}
			}
				} catch (Exception e) {
					System.out.println(e.getMessage());
				};
		
	
		
		
		
		
		
		
		
		
		return fordwar;
	}
	
	/*
@PostMapping(value="/llamadaAjax")
@ResponseBody
public List<String> ajax(){
	List<String> list= new ArrayList<String>();
	list.add("Dato1");
	list.add("Dato2");
	

	return list;
}

@GetMapping(value="/llamadaAjax2")

public String ajax2(Model modelo,HttpServletRequest request){
	String nombre=request.getParameter("nombre");
	System.out.println(nombre);
	modelo.addAttribute("nombre",nombre);
	
	return "index";
}
*/
	

}
