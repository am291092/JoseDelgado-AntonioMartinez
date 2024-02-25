package Jose_Antonio.transversal.domain.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "ULTNUM")
public class UltNumEntity implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	
	@GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "secuencia")
	@SequenceGenerator(name = "secuencia",allocationSize = 1,sequenceName = "SEQ_ULTNUM")
	@Id
	@Column(name="ID")
	private Integer id;

	@Column(name="NUMERO")
	private String numero;

	public UltNumEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UltNumEntity(Integer id, String numero) {
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
