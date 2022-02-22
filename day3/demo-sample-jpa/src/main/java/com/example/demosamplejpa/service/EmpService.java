package com.example.demosamplejpa.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demosamplejpa.dto.EmpDto;
import com.example.demosamplejpa.entity.EmpEntity;
import com.example.demosamplejpa.repository.EmpEntityRepository;

@Service
public class EmpService {

	@Autowired
	EmpEntityRepository empEntityRepository;

	// method 1
	public boolean create(EmpDto empDto) {
		try {
			EmpEntity empEntity = new EmpEntity();
			empEntity.setEmpId(empDto.getEmpId());
			empEntity.setAge(empDto.getAge());
			empEntity.setName(empDto.getName());
			empEntity.setSalary(empDto.getSalary());
			empEntity.setDeptName(empDto.getDeptName());
			empEntityRepository.save(empEntity);
		} catch (Exception e) {
			return false;
		}
		return true;

	}

	// method 2
	public EmpDto getEmpById(Long id) {
		EmpDto empDto = null;

		try {

			EmpEntity empEntity = empEntityRepository.getById(id);
			if (empEntity != null) {
				empDto = new EmpDto();
				empDto.setAge(empEntity.getAge());
				empDto.setDeptName(empEntity.getDeptName());
				empDto.setEmpId(empEntity.getEmpId());
				empDto.setName(empEntity.getName());
				empDto.setSalary(empEntity.getSalary());
			}

		} catch (Exception e) {

		}
		return empDto;
	}

	// method 3
	public List<EmpDto> getAll() {

		List<EmpDto> res = new ArrayList();

		List<EmpEntity> all = empEntityRepository.findAll();
		if (all != null) {
			for (EmpEntity empEntity : all) {
				EmpDto empDto = new EmpDto();
				empDto.setAge(empEntity.getAge());
				empDto.setDeptName(empEntity.getDeptName());
				empDto.setEmpId(empEntity.getEmpId());
				empDto.setName(empEntity.getName());
				empDto.setSalary(empEntity.getSalary());
				res.add(empDto);
			}
		}
		return res;
	}
	
	
	//method 4
	public List<EmpDto> getEmpByName(String name) {

		List<EmpDto> res = new ArrayList();

		List<EmpEntity> all = empEntityRepository.getEmpByName(name + "%");
		if (all != null) {
			for (EmpEntity empEntity : all) {
				EmpDto empDto = new EmpDto();
				empDto.setAge(empEntity.getAge());
				empDto.setDeptName(empEntity.getDeptName());
				empDto.setEmpId(empEntity.getEmpId());
				empDto.setName(empEntity.getName());
				empDto.setSalary(empEntity.getSalary());
				res.add(empDto);
			}
		}

		return res;

	}

}
