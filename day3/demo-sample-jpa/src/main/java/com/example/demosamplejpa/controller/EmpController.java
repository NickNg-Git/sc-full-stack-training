package com.example.demosamplejpa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demosamplejpa.dto.EmpDto;
import com.example.demosamplejpa.service.EmpService;
import java.util.*;

@CrossOrigin
@RestController
public class EmpController {
	
	@Autowired
	EmpService empService;
	
	
	@GetMapping("/getallemp")
	public List<EmpDto> getAll(){
		return empService.getAll();
	}
	
	
	@GetMapping("/getempbyid")
	public EmpDto getEmpById(@RequestParam(name = "empId") Long id) {
		return empService.getEmpById(id);
		
	}
	
	@PostMapping("/addemp")
	public boolean addEmp(@RequestBody EmpDto empDto) {
		return empService.create(empDto);
	}
	
	@GetMapping("/getempbyname")
	public List<EmpDto> getEmpByName(@RequestParam(name="name")String name){
		return empService.getEmpByName(name);
	}

	
	

}
