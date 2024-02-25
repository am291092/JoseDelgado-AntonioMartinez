package Jose_Antonio.transversal.domain.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Id;

public class GalgoDTO {

	
	private String nombre;

	
	private String color;

	
	private Integer numero;

	
	private Integer experiencia;

	
	private Integer aceleracion;

	
	private Integer velocidad;


	private Double cuota;

	
	private Double apostado;

	
	private Boolean finCarrera;

	

	public GalgoDTO() {
		super();
	}
	
	

	public GalgoDTO(String nombre, String color, Integer numero, Integer experiencia, Integer aceleracion,
			Integer velocidad, Double cuota, Double apostado, Boolean finCarrera) {
		super();
		this.nombre = nombre;
		this.color = color;
		this.numero = numero;
		this.experiencia = experiencia;
		this.aceleracion = aceleracion;
		this.velocidad = velocidad;
		this.cuota = cuota;
		this.apostado = apostado;
		this.finCarrera = finCarrera;
	}



	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public Integer getNumero() {
		return numero;
	}

	public void setNumero(Integer numero) {
		this.numero = numero;
	}

	public Integer getExperiencia() {
		return experiencia;
	}

	public void setExperiencia(Integer experiencia) {
		this.experiencia = experiencia;
	}

	public Integer getAceleracion() {
		return aceleracion;
	}

	public void setAceleracion(Integer aceleracion) {
		this.aceleracion = aceleracion;
	}

	public Integer getVelocidad() {
		return velocidad;
	}

	public void setVelocidad(Integer velocidad) {
		this.velocidad = velocidad;
	}

	public Double getCuota() {
		return cuota;
	}

	public void setCuota(Double cuota) {
		this.cuota = cuota;
	}

	public Double getApostado() {
		return apostado;
	}

	public void setApostado(Double apostado) {
		this.apostado = apostado;
	}

	public Boolean getFinCarrera() {
		return finCarrera;
	}

	public void setFinCarrera(Boolean finCarrera) {
		this.finCarrera = finCarrera;
	}
}
