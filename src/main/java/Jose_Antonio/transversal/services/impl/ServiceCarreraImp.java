package Jose_Antonio.transversal.services.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import Jose_Antonio.transversal.dao.IDAOCarreras;
import Jose_Antonio.transversal.domain.dto.CarreraDTO;
import Jose_Antonio.transversal.domain.entity.CarreraEntity;
import Jose_Antonio.transversal.services.IServiceCarrera;

@Service
public class ServiceCarreraImp implements IServiceCarrera{
	
	@Autowired
	private IDAOCarreras dao;
	
	@Override
	@Transactional
	public void merge(CarreraDTO carrera) {
		CarreraEntity carreraEntty = new CarreraEntity();
		
		
		try {
			carreraEntty.setId(carrera.getId());
			carreraEntty.setCiudad(carrera.getCiudad());
			carreraEntty.setEstado(carrera.getEstado());
			carreraEntty.setHora(carrera.getHora());
		
			
		

			dao.merge(carreraEntty);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
	}


	@Override
	public CarreraDTO findById(int id) {
		CarreraDTO carreraDto= null;
		CarreraEntity carreraEntty=new CarreraEntity();
		try {
			carreraEntty=	dao.findById(id);
			System.out.println("En service carrera"+carreraEntty.getId());
			if(carreraEntty!=null) {
				carreraDto= new CarreraDTO();
				
				carreraDto.setId(carreraEntty.getId());
				carreraDto.setCiudad(carreraEntty.getCiudad());
				carreraDto.setEstado(carreraEntty.getEstado());
				carreraDto.setHora(carreraEntty.getHora());	
			}
			

			
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}


		return carreraDto;
	}
	
	


	@Override
	@Transactional(readOnly = true)
	public List<CarreraDTO> EncontarTodasCarreras() {
		List<CarreraDTO> lista = new ArrayList<>();
		Iterable<CarreraEntity> listaE = null;
	
		try {
			listaE = dao.findAll();
			for(Iterator<CarreraEntity> iterator = listaE.iterator(); iterator.hasNext(); ) {
				CarreraEntity entidad = (CarreraEntity) iterator.next();
				CarreraDTO carrera = new CarreraDTO();
				carrera.setId(entidad.getId());
				carrera.setCiudad(entidad.getCiudad());
				carrera.setHora(entidad.getHora());
				carrera.setEstado(entidad.getEstado());
				lista.add(carrera);
			}
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return lista;
	}


	



}
