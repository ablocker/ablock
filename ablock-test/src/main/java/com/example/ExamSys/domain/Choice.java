package com.example.ExamSys.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "choice")
public class Choice implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	/*
	 * optional = false 表示QuestionChoice不可为空
	 */
	@JsonBackReference
	@ManyToOne(optional=true, fetch = FetchType.EAGER, cascade=CascadeType.REMOVE)
	private QuestionChoice questionChoice;

//    @ManyToOne(optional=true, fetch = FetchType.LAZY)
//    private QuestionChoice_multi questionChoice_multi;

	@Column(name = "content")
	private String content = null;
	
	@Column(name = "image_url")
	private String imageUrl = null;

	@Column(name = "choiceindex")
    private int index;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    public QuestionChoice getQuestionChoice() {
		return questionChoice;
	}

	public void setQuestionChoice(QuestionChoice questionChoice) {
		this.questionChoice = questionChoice;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

}
