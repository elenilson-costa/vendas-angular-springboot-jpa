package com.ecsolutions.vendas.entities;

import java.io.Serializable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.ecsolutions.vendas.entities.pk.ItemPedidoPK;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "item_pedido")
public class ItemPedido implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@EmbeddedId
	private ItemPedidoPK id = new ItemPedidoPK();
	
	@ManyToOne
	@JoinColumn(name = "produto_id")
	private Produto produto;
	
	private Integer quantidade;
	private Double preco;
	
	public ItemPedido() {
		
	}
	
	public ItemPedido(Pedido pedido, Integer itemId, Produto produto, Integer quantidade, Double preco) {
		super();
		this.id.setPedido(pedido);
		this.id.setItemId(itemId);
		this.produto = produto;
		this.quantidade = quantidade;
		this.preco = preco;
	}

	@JsonIgnore
	public Pedido getPedido() {
		return this.id.getPedido();
	}
	public void setPedido(Pedido pedido) {
		this.id.setPedido(pedido);
	}

	public Integer getItemId() {
		return this.id.getItemId();
	}
	public void setItemId(Integer ItemId) {
		this.id.setItemId(ItemId);
	}

	
	public Produto getProduto() {
		return produto;
	}

	public void setProduto(Produto produto) {
		this.produto = produto;
	}

	
	public Integer getQuantidade() {
		return quantidade;
	}
	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}
	public Double getPreco() {
		return preco;
	}
	public void setPreco(Double preco) {
		this.preco = preco;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ItemPedido other = (ItemPedido) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	

	
	
}
