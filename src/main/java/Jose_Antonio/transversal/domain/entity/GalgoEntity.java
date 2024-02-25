package Jose_Antonio.transversal.domain.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="GALGOS")
public class GalgoEntity implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="NOMBRE")
	private String nombre;

	@Column(name="COLOR")
	private String color;

	@Column(name="NUMERO")
	private Integer numero;

	@Column(name="EXPERIENCIA")
	private Integer experiencia;

	@Column(name="ACELERACION")
	private Integer aceleracion;

	@Column(name="VELOCIDAD")
	private Integer velocidad;

	@Column(name="CUOTA")
	private Double cuota;

	@Column(name="APOSTADO")
	private Double apostado;

	@Column(name="FINCARRERA")
	private Boolean finCarrera;

	public GalgoEntity() {
		super();
	}

	public GalgoEntity(String nombre, String color, Integer numero, Integer experiencia, Integer aceleracion, Integer velocidad, Double cuota, Double apostado, Boolean finCarrera) {
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
