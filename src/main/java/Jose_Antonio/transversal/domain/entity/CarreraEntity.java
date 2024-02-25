package Jose_Antonio.transversal.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="CARRERAS")
public class CarreraEntity {
	
	@Id
	@Column(name="ID")
	private Integer id;

	@Column(name="CIUDAD")
	private String ciudad;

	@Column(name="HORA")
	private String hora;

	@Column(name="ESTADO")
	private String estado;

	public CarreraEntity() {
		super();
	}

	public CarreraEntity(Integer id, String ciudad, String hora, String estado) {
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
