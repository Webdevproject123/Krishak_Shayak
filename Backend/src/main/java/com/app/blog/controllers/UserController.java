package com.app.blog.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.blog.entities.User;
import com.app.blog.payloads.ApiResponse;
import com.app.blog.payloads.UserDto;
import com.app.blog.repositories.UserRepo;
import com.app.blog.services.UserService;

import jakarta.validation.Valid;
@CrossOrigin(origins="http://localhost:3000/")
@RestController
@RequestMapping("/api/users")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private UserRepo userRepo;
	
	//post - create user
	@PostMapping("/")
	public ResponseEntity<?> createUser(@Valid @RequestBody UserDto userDto){
//		return new  ResponseEntity<>(true,HttpStatus.ACCEPTED);
		User isExist=this.userRepo.findByEmail(userDto.getEmail());
		if(isExist!=null) {
			return new ResponseEntity<>("user already eixsts",HttpStatus.BAD_REQUEST);
		}
		UserDto createUserDto = this.userService.createUser(userDto);
		return new ResponseEntity<>(createUserDto,HttpStatus.CREATED);
//		return new ResponseEntity<>(isExist,HttpStatus.ACCEPTED);
		
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@RequestBody AuthData authdata ) {
		User savedUser=this.userRepo.findByEmailAndPassword(authdata.getEmail(),authdata.getPassword());
		if(savedUser==null){
			return new ResponseEntity<>(true,HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(true,HttpStatus.ACCEPTED);
	}
	
	//put - update user
	@PutMapping("/{userId}")
	public ResponseEntity<UserDto> updateUser(@Valid @RequestBody UserDto userDto,@PathVariable Integer userId)
	{
		UserDto updatedUser = this.userService.updateUser(userDto, userId);
		return ResponseEntity.ok(updatedUser);
	}
	
	//delete - delete user
	@DeleteMapping("/{userId}")
	public ResponseEntity<ApiResponse> deleteUser(@PathVariable("userId") Integer uid){
		this.userService.deleteUser(uid);
		return new ResponseEntity<ApiResponse>(new ApiResponse("User Deleted Successfully",true),HttpStatus.OK);
		
	}
	//get - user get
	@GetMapping("/")
	public ResponseEntity<List<UserDto>> getAllUsers()
	{
	   return ResponseEntity.ok(this.userService.getAllUsers());	
	}
	
	//get - user get
		@GetMapping("/{userId}")
		public ResponseEntity<UserDto> getSingleUser(@PathVariable Integer userId)
		{
		   return ResponseEntity.ok(this.userService.getUserById(userId));	
		}
}

class AuthData{
	private String email;
	private String password;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}