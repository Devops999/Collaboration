package com.niit.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table; 

@Entity
@Table(name="Users_info")
public class Users
{
	private String firstname;
	private String lastname;
	private String email;
	@Id
	private String username;
	private String password;
	private String role;
	private boolean isonline;
	private boolean enabled;
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	/*public boolean isOnline() {
		return online;
	}
	public void setOnline(boolean online) {
		this.online = online;
	}*/
	
	
	public boolean isEnabled() {
		return enabled;
	}
	public boolean isIsonline() {
		return isonline;
	}
	public void setIsonline(boolean isonline) {
		this.isonline = isonline;
	}
	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
	
	
	

}