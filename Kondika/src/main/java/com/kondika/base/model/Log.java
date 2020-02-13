package com.kondika.base.model;

public class Log {
	private String cardId;
	private String readerId;
	
	public Log() {
		
	}

	public Log(String cardId, String readerId) {
		super();
		this.cardId = cardId;
		this.readerId = readerId;
	}

	public String getCardId() {
		return cardId;
	}

	public void setCardId(String cardId) {
		this.cardId = cardId;
	}

	public String getReaderId() {
		return readerId;
	}

	public void setReaderId(String readerId) {
		this.readerId = readerId;
	}
	
	
}
