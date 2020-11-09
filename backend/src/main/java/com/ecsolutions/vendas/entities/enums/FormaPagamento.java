package com.ecsolutions.vendas.entities.enums;

public enum FormaPagamento {

	DINHEIRO(1),
	MULTIBANCO(2);
	
	private int code;
	
	private FormaPagamento(int code) {
		this.code = code;
	}
	
	public int getCode() {
		return code;
	}
	
	public static FormaPagamento valueOf(int code) {
		for (FormaPagamento value : FormaPagamento.values()) {
			if (value.getCode() == code) {
				return value;
			}
		}
		throw new IllegalArgumentException("Pagamento inválido");
	}
}
