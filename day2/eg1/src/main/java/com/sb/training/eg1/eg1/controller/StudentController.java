package com.sb.training.eg1.eg1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sb.training.eg1.eg1.model.Student;
import com.sb.training.eg1.eg1.service.StudentService;
import java.util.List;

@RestController
public class StudentController {
	
	@Autowired
	StudentService studentService;
	
	@GetMapping("/getstudents")
	public List<Student> getStudents(){
		return studentService.getAll();
		
	}
	
	
	

}
