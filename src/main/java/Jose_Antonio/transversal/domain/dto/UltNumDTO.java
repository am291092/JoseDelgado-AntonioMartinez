package Jose_Antonio.transversal.domain.dto;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

public class UltNumDTO{


	private Integer id;

	private String numero;

	public UltNumDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UltNumDTO(Integer id, String numero) {
		super();
		this.id = id;
		this.numero = numero;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}
}
