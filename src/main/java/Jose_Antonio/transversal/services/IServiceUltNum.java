package Jose_Antonio.transversal.services;

import java.util.List;

import Jose_Antonio.transversal.domain.dto.UltNumDTO;
import Jose_Antonio.transversal.domain.entity.UltNumEntity;

public interface IServiceUltNum {
	
	public void save(UltNumDTO ultNum);
	public void merge(UltNumDTO ultNum);
	public List<UltNumDTO> UltNum();
	public List<UltNumDTO> masRepetidos();
	public List<UltNumDTO> menosRepetidos();
}
