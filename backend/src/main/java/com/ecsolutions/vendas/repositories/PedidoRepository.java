package com.ecsolutions.vendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecsolutions.vendas.entities.Pedido;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {

}
