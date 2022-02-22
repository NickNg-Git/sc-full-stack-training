package com.example.demosamplejpa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demosamplejpa.entity.EmpEntity;

@Repository
public interface EmpEntityRepository extends JpaRepository<EmpEntity,Long> {
	
	@Query(value="select * from emp where emp_name like :name",nativeQuery=true)
	List<EmpEntity> getEmpByName(@Param("name") String name);

}