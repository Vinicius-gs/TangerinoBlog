package tangerino.backend.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "tb_post")
public class Post {
	
	public Post() {
		
	}
	@Id 
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id_post;
	
	@Column(name = "titulo_post", length = 100)
	private String titulo;
		
	@Column(name = "subtitulo_post", length = 100)
	private String subTitulo;
	
	@Column(name = "conteudo_post", length = 500)
	private String conteudo;	
	
	@Column(name = "autor_post")
	private String autor;	
	
	@Column(name = "visibilidade_post")
	private Boolean visibilidade;
	
	@Column(name = "data_post")
	private String data;

	public Long getId_post() {
		return id_post;
	}

	public void setId_post(Long id_post) {
		this.id_post = id_post;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getSubTitulo() {
		return subTitulo;
	}

	public void setSubTitulo(String subTitulo) {
		this.subTitulo = subTitulo;
	}

	public String getConteudo() {
		return conteudo;
	}

	public void setConteudo(String conteudo) {
		this.conteudo = conteudo;
	}

	public String getAutor() {
		return autor;
	}

	public void setAutor(String autor) {
		this.autor = autor;
	}

	public Boolean getVisibilidade() {
		return visibilidade;
	}

	public void setVisibilidade(Boolean visibilidade) {
		this.visibilidade = visibilidade;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}
	
	
}
