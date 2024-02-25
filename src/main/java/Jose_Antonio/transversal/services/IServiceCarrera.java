package Jose_Antonio.transversal.services;

import java.util.List;

import Jose_Antonio.transversal.domain.dto.CarreraDTO;

public interface IServiceCarrera {
	
	public void merge(CarreraDTO carrera);
	public CarreraDTO findById(int id);
	public List<CarreraDTO> EncontarTodasCarreras();
	
}
