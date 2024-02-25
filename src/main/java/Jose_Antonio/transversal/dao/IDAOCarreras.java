package Jose_Antonio.transversal.dao;

import java.util.List;

import Jose_Antonio.transversal.domain.entity.CarreraEntity;


public interface IDAOCarreras{

	public void merge(CarreraEntity carrera);
	public CarreraEntity findById(Integer id);
	public List<CarreraEntity> findAll();
	
	
}
