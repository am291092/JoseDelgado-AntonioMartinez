package Jose_Antonio.transversal.domain.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="USUARIO")
public class UsuarioEntity implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="CORREO")
	private String correo;
	

	@Column(name="NOMBRE_USUARIO")
	private String nombre_usuario;
	
	
	@Column(name="CONTRASENA")
	private String contrasena;
	
	
	@Column(name="NOMBRE_REAL")
	private String nombre_real;
	
	
	@Column(name="APELLIDO1")
	private String apellido1;
	
	
	@Column(name="APELLIDO2")
	private String apellido2;
	
	
	@Column(name="SALDO")
	private Integer saldo;

	public UsuarioEntity() {
		super();
	}

	public UsuarioEntity(String correo, String nombre_usuario, String contrasena, String nombre_real, String apellido1,
			String apellido2, Integer saldo) {
		super();
		this.correo = correo;
		this.nombre_usuario = nombre_usuario;
		this.contrasena = contrasena;
		this.nombre_real = nombre_real;
		this.apellido1 = apellido1;
		this.apellido2 = apellido2;
		this.saldo = saldo;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getNombre_usuario() {
		return nombre_usuario;
	}

	public void setNombre_usuario(String nombre_usuario) {
		this.nombre_usuario = nombre_usuario;
	}

	public String getContrasena() {
		return contrasena;
	}

	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}

	public String getNombre_real() {
		return nombre_real;
	}

	public void setNombre_real(String nombre_real) {
		this.nombre_real = nombre_real;
	}

	public String getApellido1() {
		return apellido1;
	}

	public void setApellido1(String apellido1) {
		this.apellido1 = apellido1;
	}

	public String getApellido2() {
		return apellido2;
	}

	public void setApellido2(String apellido2) {
		this.apellido2 = apellido2;
	}

	public Integer getSaldo() {
		return saldo;
	}

	public void setSaldo(Integer saldo) {
		this.saldo = saldo;
	}
	
	
	
	

}
