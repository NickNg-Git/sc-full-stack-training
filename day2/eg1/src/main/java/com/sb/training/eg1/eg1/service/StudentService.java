package com.sb.training.eg1.eg1.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.sb.training.eg1.eg1.model.Student;

@Service
public class StudentService {

	public List<Student> getAll() {
		
		List<Student> students = new ArrayList();
		for (int i = 0; i < 11; i++) {
			students.add(new Student(i, "Student name " + i));
		}

		return students;
	}

}
