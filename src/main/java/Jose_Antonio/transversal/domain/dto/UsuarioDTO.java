package Jose_Antonio.transversal.domain.dto;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;


public class UsuarioDTO implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@NotEmpty(message="El email debe estar rellenado")
	@Email
	private String correo;
	
	private String nombre_usuario;
	@NotEmpty (message="Debes incluir una contraseña")
	private String contrasena;
	
	
	private String nombre_real;
	
	
	private String apellido1;
	
	
	private String apellido2;
	
	
	private Integer saldo;

	public UsuarioDTO() {
		super();
	}

	public UsuarioDTO(String correo, String nombre_usuario, String contrasena, String nombre_real, String apellido1,
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
