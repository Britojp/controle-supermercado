-- 1 Relatório de Produtos Próximos do Vencimento --
-- Data de validade até 30 dias a partir da data atual.--

select 
	prdt.nome as nome_produto,
	sum(lt.quantidade) as quantidade,
	lt.data_validade as data_validade
from
	lote as lt
left join
	produto as prdt on lt.id = prdt.id
where
	lt.data_validade between NOW() and lt.data_validade + INTERVAL '30 days'
group by
	prdt.nome, lt.data_validade, lt.quantidade
order by 
	lt.data_validade, lt.quantidade asc;


-- 2 Relatório de Produtos com Estoque Crítico --
-- Quantidade em estoque < valor limite --

select 
	prdt.nome as nome_produto, 
	sum(trnsc.quantidade) as quantidade
from
	transacao as trnsc
left join
	produto as prdt on trnsc.idproduto = prdt.id
group by 
	prdt.nome
having 
	sum(trnsc.quantidade) < 10000


-- 3 Relatório de Entrada de Produtos por Período --
-- Intervalo de datas --

select 
	prdt.nome as nome_produto,
	trsnc.data_transacao as data_transacao
from
	transacao as trsnc
join
	produto as prdt on trsnc.id = prdt.id
where
	trsnc.tipo_transacao like 'Entrada'
	and 
	(trsnc.data_transacao between '2024-01-01'
	and '2025-05-01')
order by 
	trsnc.data_transacao asc;

select * from transacao



-- 4 Relatório de Lucro Total por Mês -- 
-- quanto a empresa lucrou mês a mês, considerando o valor de venda dos produtos que saíram do estoque menos o custo de aquisição deles.--

select 
	extract(month from data_transacao) || '/' || extract(year from data_transacao) as ano_mes,
	prdt.nome,
	'R$ ' || + round(sum(case when tipo_transacao like 'Entrada' then quantidade * preco else 0 end)) as total_entradas,
	'R$ ' || + round(sum(case when tipo_transacao like 'Saída' then quantidade * preco else  0 end)) as total_saidas,
	'R$ ' || + round(sum(case when tipo_transacao like 'Saída' then quantidade * preco else  0 end) - sum(case when tipo_transacao like 'Entrada' then quantidade * preco else 0 end)) as total
from
	transacao as trnsc
left join
	produto as prdt on trnsc.idproduto = prdt.id
group by (ano_mes, prdt.nome)
order by
	ano_mes, nome desc;

	
-- 5 Relatório de Rentabilidade por Fornecedor ---
-- mostrar quais fornecedores trazem os produtos com melhor margem de lucro para a empresa. --
-- o preço de custo, o preço de venda, e a quantidade vendida de cada produto por fornecedor --
		
with
entradas_totais as (
  select
    trnsc.idproduto,
    frncdr.nome,
    AVG(trnsc.preco) as preco_custo
  from transacao trnsc
  left join fornecedor as frncdr on trnsc.idfornecedor = frncdr.id
  where trnsc.tipo_transacao = 'Entrada'
  group by trnsc.idproduto, frncdr.nome
),
vendas_totais as (
  select
    trnsc.idproduto,
    SUM(trnsc.quantidade) as quantidade_vendida,
    AVG(trnsc.preco) as preco_venda
  from transacao trnsc
  where trnsc.tipo_transacao = 'Saída'
  group by trnsc.idproduto
)
select
  et.nome,
  prdt.nome as produto,
  'R$ ' || ROUND(et.preco_custo) as preco_custo,
  'R$ ' || ROUND(vt.preco_venda) as preco_venda,
  vt.quantidade_vendida,
  'R$ ' || ROUND((vt.preco_venda - et.preco_custo) * vt.quantidade_vendida) AS lucro_bruto
from vendas_totais vt
join entradas_totais et on et.idproduto = vt.idproduto
join produto prdt on prdt.id = vt.idproduto
order by lucro_bruto asc;



-- 6. Relatório de Histórico de Compras e Custos por Fornecedor --
-- mostra a evolução dos preços de compra ao longo do tempo para cada fornecedor --

select
	frncdr.nome as nome_fornecedor,
	extract(month from trnsc.data_transacao) || '\'|| extract(year from trnsc.data_transacao) as mes_ano,
	prdt.nome as nome_produto,
	sum(trnsc.quantidade) as quantidade,
	'R$' || + trnsc.preco as preco_produto,
	'R$' || + round(trnsc.quantidade * trnsc.preco) as valor_total
from
	transacao as trnsc
left join 
	produto as prdt on trnsc.idproduto = prdt.id
left join 
	fornecedor as frncdr on trnsc.idfornecedor = frncdr.id
where 
	frncdr.nome is not null
group by
	frncdr.nome, mes_ano, nome_produto, quantidade, trnsc.preco
order by 
	nome_fornecedor, mes_ano, nome_produto asc

