package com.ecsolutions.vendas.config;

import java.time.Instant;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.ecsolutions.vendas.entities.Cliente;
import com.ecsolutions.vendas.entities.ItemPedido;
import com.ecsolutions.vendas.entities.PagamentoPedido;
import com.ecsolutions.vendas.entities.Pedido;
import com.ecsolutions.vendas.entities.Produto;
import com.ecsolutions.vendas.repositories.ItemPedidoRepository;
import com.ecsolutions.vendas.repositories.PedidoRepository;
import com.ecsolutions.vendas.services.ClienteService;
import com.ecsolutions.vendas.services.PedidoService;
import com.ecsolutions.vendas.services.ProdutoService;

@Configuration
@Profile("dev")
public class TesteOps implements CommandLineRunner {

	@Autowired
	private ClienteService clienteService;
	
	@Autowired
	private PedidoService pedidoService;
	
	@Autowired
	private PedidoRepository PedidoRepository;
	
	@Autowired
	private ProdutoService produtoService;
	
	@Autowired
	private ItemPedidoRepository itemPedidoRepository;
	
	@Override
	public void run(String... args) throws Exception {
		
		/*
		Cliente cliente = clienteService.insert(new Cliente(1L, "Francisco Coimbra", "Av. do Descobrimento"));
		Cliente cliente = clienteService.findById(1L);
		Instant instant = Instant.parse("2020-10-22T11:00:00Z"); 
		Pedido pedido = pedidoService.insert(new Pedido(null, cliente, instant));
		Produto produto = produtoService.findById(1L);
		
		ItemPedido item1 = new ItemPedido(pedido, produto, 7, 7.62);
		ItemPedido item2 = new ItemPedido(pedido, produto, 10, 10.5);
		
		itemPedidoRepository.saveAll(Arrays.asList(item1, item2));
		
		PagamentoPedido pagamentoPedido = new PagamentoPedido(null, pedido, Instant.parse("2020-10-22T13:00:00Z"));
		
		pedido.setPagamentoPedido(pagamentoPedido);
		PedidoRepository.save(pedido);
		*/

	}
	
}
