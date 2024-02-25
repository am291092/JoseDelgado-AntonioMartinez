package Jose_Antonio.transversal.services;

import java.util.List;

import Jose_Antonio.transversal.domain.dto.GalgoDTO;

public interface IServiceGalgo {
	
	public void save(GalgoDTO galgo);
	public void merge(GalgoDTO galgo);	
	public List<GalgoDTO> TodosGalgos();

}
