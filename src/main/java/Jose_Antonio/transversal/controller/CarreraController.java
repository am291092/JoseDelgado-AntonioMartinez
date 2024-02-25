package Jose_Antonio.transversal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import Jose_Antonio.transversal.domain.dto.CarreraDTO;
import Jose_Antonio.transversal.domain.dto.UsuarioDTO;
import Jose_Antonio.transversal.services.IServiceCarrera;

@Controller
public class CarreraController {
	
	@Autowired 
	private IServiceCarrera servicioCarrera;
	
	
	@GetMapping(value="/obtenerCarreras")
	@ResponseBody
	public List<CarreraDTO> obtenerCarreras() {
		List<CarreraDTO> listaCarreras= servicioCarrera.EncontarTodasCarreras();
		
		System.out.println(listaCarreras.size()+listaCarreras.toString());
			
		return listaCarreras;
	}
	
	@PostMapping(value="/finCarrera")
	@ResponseBody
	public String finCarrera(@RequestBody CarreraDTO carrera) {
		System.out.println("en fincarrera"+ carrera.getId()+carrera.getEstado());
		CarreraDTO carrer =servicioCarrera.findById(carrera.getId());
		String estado=carrera.getEstado();
		carrer.setEstado(estado);
		System.out.println(carrer.getId()+carrer.getEstado());
		
		servicioCarrera.merge(carrer);
		
		
		
		return estado;
	}

	
	
	
	
}
