package Jose_Antonio.transversal.dao.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import Jose_Antonio.transversal.dao.IDAOCarreras;
import Jose_Antonio.transversal.domain.entity.CarreraEntity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

@Service
public class CarreraDaoImpl implements IDAOCarreras{
	
	@PersistenceContext
	private EntityManager em;
	
	@Override
	public void merge(CarreraEntity carrera) {
		try {
			em.merge(carrera);
		} catch (Exception e) {
			// TODO: handle exception
		}
	}

	@Override
	public CarreraEntity findById(Integer id) {
		
		CarreraEntity carreraEntty = null;
		
		try {
			carreraEntty = em.find(CarreraEntity.class, id);
		} catch (Exception e) {
			// TODO: handle exception
		}
		return carreraEntty;
		
	
	}

	@Override
	public List<CarreraEntity> findAll() {
		List<CarreraEntity> lstCarrera= null;
		TypedQuery<CarreraEntity> query = null;
		
		try {
			query = em.createQuery(" select d from CarreraEntity d ", CarreraEntity.class);
			lstCarrera = query.getResultList();
		
		} catch (Exception e) {
			
		}
		return lstCarrera;
	}

	

	

	
	

}
