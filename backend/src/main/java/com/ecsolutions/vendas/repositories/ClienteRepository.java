package com.ecsolutions.vendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecsolutions.vendas.entities.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {

}
