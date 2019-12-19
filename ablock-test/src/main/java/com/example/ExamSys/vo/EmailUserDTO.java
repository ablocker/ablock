package com.example.ExamSys.vo;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Email;

import com.example.ExamSys.config.Constants;
import com.example.ExamSys.domain.enumeration.UserType;

public class EmailUserDTO {

	public static final int PASSWORD_MIN_LENGTH = 6;
	
	public static final int PASSWORD_MAX_LENGTH = 100;
	
	@Pattern(regexp = Constants.LOGIN_REGEX)
	@Size(min = 1, max = 50)
	private String login;
	
	@Size(min = PASSWORD_MIN_LENGTH, max = PASSWORD_MAX_LENGTH)
	private String password;
	
	@Email
	@Size(min = 5, max = 100)
	private String email;
	
	@Enumerated(EnumType.STRING)
	private UserType userType;

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public UserType getUserType() {
		return userType;
	}

	public void setUserType(UserType userType) {
		this.userType = userType;
	}
	
	
}
