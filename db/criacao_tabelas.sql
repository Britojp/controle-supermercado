-- Criação das tabelas --

create table unidade_medida (
	id serial not null,
	nome varchar(10) not null unique,
	sigla char(2) not null unique,

	constraint pk_unidade_medida_id 	primary key (id)
);

create table usuario (
	id serial not null,
	nome varchar(30) not null,
	email varchar(30) not null unique,
	senha varchar(30) not null,

	constraint pk_usuario_id primary key (id)
);

create table estado (
	id integer not null,
	nome varchar(30) not null unique,
	uf char(2) not null unique,

	constraint pk_estado_id primary key(id)
);

create table categoria(
	id serial not null,
	nome varchar(30) unique,

	constraint pk_categoria_id primary key(id)
);

create table marca(
	id serial not null,
	nome varchar(30),

	constraint pk_marca_id primary key (id)
);

create table prateleira (
	id serial not null,
	numero varchar(5) not null,

	constraint pk_prateleira_id primary key (id)
);

create table contato (
	id serial not null,
	telefone varchar(11) not null unique,

	constraint pk_contato_id primary key (id)
);

create table nutricao(
	id serial not null,
	porcao float not null,
	quantidade_proteina integer not null,
	quantidade_gordura integer not null,
	quantidade_carboidratos integer not null,
	idunidademedida integer not null,

	constraint pk_nutricao_id primary key (id),
	constraint fk_nutricao_idunidademedida foreign key (idunidademedida) references unidade_medida (id)
);

create table produto (
	id serial not null,
	nome varchar(30) not null,
	preco_venda float not null,
	idnutricao integer,
	idcategoria integer not null,
	idmarca integer not null,

	constraint pk_produto_id primary key (id),
	constraint fk_produto_idnutricao foreign key (idnutricao) references nutricao (id),
	constraint fk_produto_idcategoria foreign key (idcategoria) references categoria (id),
	constraint fk_produto_idmarca foreign key (idmarca) references marca (id)
	
);

create table endereco (
	id serial not null,
	cep varchar(8) not null unique,
	complemento varchar(15) not null,
	idestado integer not null,

	constraint pk_endereco_id primary key (id),
	constraint fk_endereco_idestado foreign key (idestado) references estado (id)
	
);

create table fornecedor(
	id serial not null,
	nome varchar(30) not null,
	cnpj varchar(14) not null unique,
	idendereco integer,
	idcontato integer,

	constraint pk_fornecedor_id primary key (id),
	constraint fk_fornecedor_idenedereco foreign key (idendereco) references endereco (id),
	constraint fk_fornecedor_idcontato foreign key (idcontato) references contato (id)
);


create table transacao (
	id serial not null,
	tipo_transacao varchar(30) not null,
	quantidade integer not null,
	data_transacao date not null,
	preco float not null,
	idusuario integer not null,
	idfornecedor integer,
	idproduto integer not null,

	constraint pk_transacao_id primary key (id),
	constraint fk_transacao_idusuario foreign key (idusuario) references usuario (id),
	constraint fk_transacao_idfornecedor foreign key (idfornecedor) references fornecedor (id),
	constraint fk_transacao_idproduto foreign key (idproduto) references produto (id),
	constraint tipo_transacao_check CHECK (tipo_transacao IN ('Entrada', 'Saída'))	
);

create table lote (
	id serial not null,
	numero varchar(5) not null,
	data_validade date not null,
	quantidade integer not null,
	idtransacao integer not null,
	idproduto integer not null,

	constraint pk_lote_id primary key (id),
	constraint fk_lote_idtransacao foreign key (idtransacao) references transacao (id),
	constraint fk_lote_idproduto foreign key (idproduto) references produto (id)
);

create table corredor(
	id serial not null,
	numero varchar(5) not null,

	constraint pk_corredor_id primary key (id)
);

create table localizacao_estoque(
	id serial not null,
	idlote integer not null,
	idprateleira integer not null,
	idcorredor integer not null,

	constraint pk_localizacao_estoque_id primary key (id),
	constraint fk_localizacao_estoque_idlote foreign key (idlote) references lote(id),
	constraint fk_localizacao_estoque_idcorredor foreign key (idcorredor) references corredor (id)
	
);
