package Jose_Antonio.transversal.domain.dto;

import java.util.List;


public class CarreraDTO {
	
	
	private Integer id;

	
	private String ciudad;

	
	private String hora;

	
	private String estado;
	
	
	public CarreraDTO() {
		super();
	}

	




	public CarreraDTO(Integer id, String ciudad, String hora, String estado) {
		super();
		this.id = id;
		this.ciudad = ciudad;
		this.hora = hora;
		this.estado = estado;
		
	}






	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCiudad() {
		return ciudad;
	}

	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}

	public String getHora() {
		return hora;
	}

	public void setHora(String hora) {
		this.hora = hora;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}



	




	
	

}
