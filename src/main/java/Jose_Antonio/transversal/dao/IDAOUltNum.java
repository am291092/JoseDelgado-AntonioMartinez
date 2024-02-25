package Jose_Antonio.transversal.dao;

import java.util.List;

import Jose_Antonio.transversal.domain.entity.UltNumEntity;

public interface IDAOUltNum{

	public void save(UltNumEntity numero);
	public void remove(UltNumEntity numero);
	public List<UltNumEntity> findAll();
	public List<String> masRepetidos();
	public List<String> menosRepetidos();
	
}
