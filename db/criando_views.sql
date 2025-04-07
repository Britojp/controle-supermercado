-- Criando Views --
-- Todos as transações de entrada --
create view dados_transacoes_entrada as
select 
	trnsc.id,
	trnsc.tipo_transacao as tipo_transacao,
	trnsc.quantidade as quantidade,
	trnsc.data_transacao as data_transacao,
	trnsc.preco as preco_unitario,
	prdt.nome as nome_produto,
	usuario.nome as nome_usuario,
	frncdr.nome as nome_fornecedor
from
	transacao as trnsc
left outer join
	produto as prdt on trnsc.idproduto = prdt.id
left outer join
	usuario on trnsc.idusuario = usuario.id
left outer join
	fornecedor as frncdr on trnsc.idfornecedor = frncdr.id
where
	tipo_transacao = 'Entrada';

-- Todos as transações de saída --
create view dados_transacoes_saida as
select 
	trnsc.id,
	trnsc.tipo_transacao as tipo_transacao,
	trnsc.data_transacao as data_transacao,
	trnsc.quantidade as quantidade,
	trnsc.preco as preco_unitario,
	prdt.nome as nome_produto,
	usuario.nome as nome_usuario
from
	transacao as trnsc
left outer join
	produto as prdt on trnsc.idproduto = prdt.id
left outer join
	usuario on trnsc.idusuario = usuario.id
where
	tipo_transacao = 'Saída'


select * from dados_transacoes_entrada