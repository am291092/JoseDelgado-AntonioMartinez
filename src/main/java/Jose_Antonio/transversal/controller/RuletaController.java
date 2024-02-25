package Jose_Antonio.transversal.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import Jose_Antonio.transversal.dao.IDAOUltNum;
import Jose_Antonio.transversal.domain.dto.UltNumDTO;
import Jose_Antonio.transversal.services.IServiceUltNum;

@Controller
@RequestMapping(value="/ruleta")
public class RuletaController {

	@Autowired
	private IServiceUltNum servicio;
	

	

	@GetMapping(value="/ultimos")
	@ResponseBody
	public List<UltNumDTO> ultimos(){
		List<UltNumDTO> lista = new ArrayList<>();
		try {
            lista = servicio.UltNum();
            
            // Ordena la lista de mayor a menor por el ID
            Collections.sort(lista, new Comparator<UltNumDTO>() {
                @Override
                public int compare(UltNumDTO o1, UltNumDTO o2) {
                    // Compara los IDs, de o2 a o1 para orden descendente
                	//EL RETURN NO ES DEL "METODO ULTIMOS" SI NO DEL COMPARATOR
                    return o2.getId().compareTo(o1.getId());
                }
            });
            
            
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return lista;
	}
	
	@PostMapping(value="/guardarBola")
	@ResponseBody
	public void guardarBola(@RequestBody UltNumDTO bola){
		try {
			System.out.println(bola.getNumero());
			servicio.save(bola);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	@GetMapping(value="/hot")
	@ResponseBody
	public List<UltNumDTO> hot(){
		List<UltNumDTO> lista = new ArrayList<>();
		try {
			System.out.println("controller hot");
            lista = servicio.masRepetidos();
            System.out.println("controller"+lista.get(0).getNumero());
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return lista;
	}
	
	@GetMapping(value="/cold")
	@ResponseBody
	public List<UltNumDTO> cold(){
		List<UltNumDTO> lista = new ArrayList<>();
		try {
            lista = servicio.menosRepetidos();
                 
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return lista;
	}
}
