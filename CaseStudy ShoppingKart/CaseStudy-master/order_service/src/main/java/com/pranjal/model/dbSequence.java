package com.pranjal.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class dbSequence {
    @Transient // ignoring the field ( only work & doesnt save)
	public static final String SEQUENCE_NAME = "orders_sequence";

	@Id
	private String id;
	private int seq;

	public dbSequence() {
		super();
	}

	public dbSequence(int seq) {
		super();
		this.seq = seq;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getSeq() {
		return seq;
	}

	public void setSeq(int seq) {
		this.seq = seq;
	}

	@Override
	public String toString() {
		return "DatabaseSequence [id=" + id + ", seq=" + seq + "]";
	}
}