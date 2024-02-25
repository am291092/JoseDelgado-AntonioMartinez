package Jose_Antonio.transversal.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import Jose_Antonio.transversal.domain.dto.GalgoDTO;
import Jose_Antonio.transversal.services.IServiceGalgo;

@Controller
public class GalgoController {
	
	@Autowired 
	private IServiceGalgo serviciogalgo;
	
	
	@GetMapping(value="/obtenerGalgos")
	@ResponseBody
	public List<GalgoDTO> ruleta() {
		List<GalgoDTO> listaGalgos= serviciogalgo.TodosGalgos();
		
	
			
		return listaGalgos;
	}

}
