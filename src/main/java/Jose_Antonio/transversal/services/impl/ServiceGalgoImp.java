package Jose_Antonio.transversal.services.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Jose_Antonio.transversal.dao.IDAOGalgos;
import Jose_Antonio.transversal.domain.dto.GalgoDTO;
import Jose_Antonio.transversal.domain.entity.GalgoEntity;
import Jose_Antonio.transversal.services.IServiceGalgo;



@Service
public class ServiceGalgoImp implements IServiceGalgo {
	
	@Autowired
	private IDAOGalgos galgoDao;

	@Override
	public void save(GalgoDTO galgo) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void merge(GalgoDTO galgo) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<GalgoDTO> TodosGalgos() {
		List<GalgoDTO> lstGalgos = null;
		Iterable<GalgoEntity> lstEntty = null;
		
		try {
			lstGalgos = new ArrayList<>();
			lstEntty = galgoDao.findAll();
			
			
			for (Iterator<GalgoEntity> iterator = lstEntty.iterator(); iterator.hasNext();) {
				GalgoEntity galgosEntity = (GalgoEntity) iterator.next();
				GalgoDTO galgo = new GalgoDTO();
				
				
				
				galgo.setNombre(galgosEntity.getNombre());
				galgo.setColor(galgosEntity.getColor());
				galgo.setNumero(galgosEntity.getNumero());
				galgo.setExperiencia(galgosEntity.getExperiencia());
				galgo.setAceleracion(galgosEntity.getAceleracion());
				galgo.setVelocidad(galgosEntity.getVelocidad());
				galgo.setCuota(galgosEntity.getCuota());
				galgo.setApostado(galgosEntity.getApostado());
				galgo.setFinCarrera(galgosEntity.getFinCarrera());
				
				
				lstGalgos.add(galgo);
			}
			
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
		return lstGalgos;
	}

	

}
