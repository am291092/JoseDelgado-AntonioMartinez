package Jose_Antonio.transversal.services.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import Jose_Antonio.transversal.dao.IDAOUltNum;
import Jose_Antonio.transversal.domain.dto.UltNumDTO;
import Jose_Antonio.transversal.domain.entity.UltNumEntity;
import Jose_Antonio.transversal.services.IServiceUltNum;

@Service
public class ServiceUltNumImp implements IServiceUltNum{
	
	@Autowired
	private IDAOUltNum dao;

	@Override
	@Transactional
	public void save(UltNumDTO ultNum) {
		UltNumEntity entidad = new UltNumEntity();

		try {
			entidad.setNumero(ultNum.getNumero());
			dao.save(entidad);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
		
	}

	@Override
	@Transactional
	public void merge(UltNumDTO ultNum) {
		try {
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
	}

	@Override
	@Transactional(readOnly = true)
	public List<UltNumDTO> UltNum() {
		List<UltNumDTO> lista = new ArrayList<>();
		Iterable<UltNumEntity> listaE = null;
		
		try {
			listaE = dao.findAll();
			for(Iterator<UltNumEntity> iterator = listaE.iterator(); iterator.hasNext(); ) {
				UltNumEntity entidad = (UltNumEntity) iterator.next();
				UltNumDTO ult = new UltNumDTO();
				ult.setId(entidad.getId());
				ult.setNumero(entidad.getNumero());
				lista.add(ult);
			}
			System.out.println(lista.size());
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return lista;
	}

	@Override
	public List<UltNumDTO> masRepetidos() {
		List<UltNumDTO> lista = new ArrayList<>();
		List<String> listaE = null;
		
		try {
			listaE = dao.masRepetidos();
			for(int i = 0;i<listaE.size();i++){			
				UltNumDTO ult= new UltNumDTO();
				ult.setNumero(listaE.get(i));
				lista.add(ult);
				
				
				}
			

			System.out.println("mas repes servicio"+lista.size());
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return lista;
	}

	@Override
	public List<UltNumDTO> menosRepetidos() {
		List<UltNumDTO> lista = new ArrayList<>();
		List<String> listaE = null;
		
		try {
			listaE = dao.menosRepetidos();
			for(int i = 0;i<listaE.size();i++){			
				UltNumDTO ult= new UltNumDTO();
				ult.setNumero(listaE.get(i));
				lista.add(ult);
				
				
				}
			

			System.out.println("mas repes servicio"+lista.size());
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return lista;
	}

}
