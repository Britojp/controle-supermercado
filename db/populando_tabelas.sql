

-- Estados --

Insert into Estado (id, Nome, Uf) values (12, 'Acre', 'AC');
Insert into Estado (id, Nome, Uf) values (27, 'Alagoas', 'AL');
Insert into Estado (id, Nome, Uf) values (16, 'Amapá', 'AP');
Insert into Estado (id, Nome, Uf) values (13, 'Amazonas', 'AM');
Insert into Estado (id, Nome, Uf) values (29, 'Bahia', 'BA');
Insert into Estado (id, Nome, Uf) values (23, 'Ceará', 'CE');
Insert into Estado (id, Nome, Uf) values (53, 'Distrito Federal', 'DF');
Insert into Estado (id, Nome, Uf) values (32, 'Espírito Santo', 'ES');
Insert into Estado (id, Nome, Uf) values (52, 'Goiás', 'GO');
Insert into Estado (id, Nome, Uf) values (21, 'Maranhão', 'MA');
Insert into Estado (id, Nome, Uf) values (51, 'Mato Grosso', 'MT');
Insert into Estado (id, Nome, Uf) values (50, 'Mato Grosso do Sul', 'MS');
Insert into Estado (id, Nome, Uf) values (31, 'Minas Gerais', 'MG');
Insert into Estado (id, Nome, Uf) values (15, 'Pará', 'PA');
Insert into Estado (id, Nome, Uf) values (25, 'Paraíba', 'PB');
Insert into Estado (id, Nome, Uf) values (41, 'Paraná', 'PR');
Insert into Estado (id, Nome, Uf) values (26, 'Pernambuco', 'PE');
Insert into Estado (id, Nome, Uf) values (22, 'Piauí', 'PI');
Insert into Estado (id, Nome, Uf) values (33, 'Rio de Janeiro', 'RJ');
Insert into Estado (id, Nome, Uf) values (24, 'Rio Grande do Norte', 'RN');
Insert into Estado (id, Nome, Uf) values (43, 'Rio Grande do Sul', 'RS');
Insert into Estado (id, Nome, Uf) values (11, 'Rondônia', 'RO');
Insert into Estado (id, Nome, Uf) values (14, 'Roraima', 'RR');
Insert into Estado (id, Nome, Uf) values (42, 'Santa Catarina', 'SC');
Insert into Estado (id, Nome, Uf) values (35, 'São Paulo', 'SP');
Insert into Estado (id, Nome, Uf) values (28, 'Sergipe', 'SE');
Insert into Estado (id, Nome, Uf) values (17, 'Tocantins', 'TO');

-- Unidades de medida --
INSERT INTO unidade_medida (nome, sigla) VALUES
('Grama', 'g');
INSERT INTO unidade_medida (nome, sigla) VALUES
('Mililitro', 'ml');
INSERT INTO unidade_medida (nome, sigla) VALUES
('Unidade', 'un');
INSERT INTO unidade_medida (nome, sigla) VALUES
('Litro', 'L');
INSERT INTO unidade_medida (nome, sigla) VALUES
('Quilograma', 'kg');
INSERT INTO unidade_medida (nome, sigla) VALUES
('Pacote', 'pc');
INSERT INTO unidade_medida (nome, sigla) VALUES
('Caixa', 'cx');
INSERT INTO unidade_medida (nome, sigla) VALUES
('Dúzia', 'dz');

-- Usuarios --
INSERT INTO usuario ( nome, email, senha) VALUES
('Ana Paula', 'ana.paula@mercado.com', 'senha123');
INSERT INTO usuario ( nome, email, senha) VALUES
('Carlos Silva', 'carlos.silva@mercado.com', 'senha123');
INSERT INTO usuario ( nome, email, senha) VALUES
('Juliana Souza', 'juliana.souza@mercado.com', 'senha123');
INSERT INTO usuario ( nome, email, senha) VALUES
('Rafael Lima', 'rafael.lima@mercado.com', 'senha123');
INSERT INTO usuario ( nome, email, senha) VALUES
('Mariana Costa', 'mariana.costa@mercado.com', 'senha123');
INSERT INTO usuario ( nome, email, senha) VALUES
( 'Thiago Rocha', 'thiago.rocha@mercado.com', 'senha123');
INSERT INTO usuario ( nome, email, senha) VALUES
( 'Fernanda Alves', 'fernanda.alves@mercado.com', 'senha123');
INSERT INTO usuario ( nome, email, senha) VALUES
( 'Lucas Pereira', 'lucas.pereira@mercado.com', 'senha123');
INSERT INTO usuario ( nome, email, senha) VALUES
( 'Beatriz Gomes', 'beatriz.gomes@mercado.com', 'senha123');
INSERT INTO usuario ( nome, email, senha) VALUES
('João Vitor', 'joao.vitor@mercado.com', 'senha123');

-- Categorias --
INSERT INTO categoria (nome) VALUES
('Alimentos');
INSERT INTO categoria (nome) VALUES
('Bebidas');
INSERT INTO categoria (nome) VALUES
( 'Laticínios');
INSERT INTO categoria (nome) VALUES
( 'Cafés e chás');
INSERT INTO categoria (nome) VALUES
( 'Massas');
INSERT INTO categoria (nome) VALUES
( 'Padaria');
INSERT INTO categoria (nome) VALUES
( 'Higiene pessoal');
INSERT INTO categoria (nome) VALUES
( 'Limpeza');
INSERT INTO categoria (nome) VALUES
( 'Congelados');
INSERT INTO categoria (nome) VALUES
( 'Pet Shop');

INSERT INTO marca (nome) VALUES
('Tio João');
INSERT INTO marca (nome) VALUES
( 'Kicaldo');
INSERT INTO marca ( nome) VALUES
( 'Soya');
INSERT INTO marca (nome) VALUES
( 'União');
INSERT INTO marca (nome) VALUES
( 'Parmalat');
INSERT INTO marca (nome) VALUES
( 'Pilão');
INSERT INTO marca (nome) VALUES
( 'Renata');
INSERT INTO marca (nome) VALUES
( 'Dona Benta');
INSERT INTO marca (nome) VALUES
( 'Palmolive');
INSERT INTO marca (nome) VALUES
('Ypê');



-- Nutricao Produtos --
INSERT INTO nutricao (porcao, quantidade_proteina, quantidade_gordura, quantidade_carboidratos, idunidademedida) VALUES
( 50.0, 4, 1, 35, 1);
INSERT INTO nutricao ( porcao, quantidade_proteina, quantidade_gordura, quantidade_carboidratos, idunidademedida) VALUES
( 50.0, 7, 0, 30, 1);
INSERT INTO nutricao ( porcao, quantidade_proteina, quantidade_gordura, quantidade_carboidratos, idunidademedida) VALUES
( 13.0, 0, 9, 0, 2);
INSERT INTO nutricao ( porcao, quantidade_proteina, quantidade_gordura, quantidade_carboidratos, idunidademedida) VALUES
( 5.0, 0, 0, 5, 1);
INSERT INTO nutricao ( porcao, quantidade_proteina, quantidade_gordura, quantidade_carboidratos, idunidademedida) VALUES
( 200.0, 6, 6, 10, 4);
INSERT INTO nutricao ( porcao, quantidade_proteina, quantidade_gordura, quantidade_carboidratos, idunidademedida) VALUES
( 40.0, 1, 3, 5, 1);
INSERT INTO nutricao ( porcao, quantidade_proteina, quantidade_gordura, quantidade_carboidratos, idunidademedida) VALUES
( 80.0, 2, 1, 65, 1);
INSERT INTO nutricao ( porcao, quantidade_proteina, quantidade_gordura, quantidade_carboidratos, idunidademedida) VALUES
( 60.0, 2, 1, 45, 1);
INSERT INTO nutricao ( porcao, quantidade_proteina, quantidade_gordura, quantidade_carboidratos, idunidademedida) VALUES
( 85.0, 0, 1, 0, 3);
INSERT INTO nutricao ( porcao, quantidade_proteina, quantidade_gordura, quantidade_carboidratos, idunidademedida) VALUES
(15.0, 0, 0, 0, 2);

-- Endereco --
INSERT INTO endereco (cep, complemento, idestado) VALUES
( '01001000', 'Galpão 1', 12);
INSERT INTO endereco ( cep, complemento, idestado) VALUES
( '30140071', 'Bloco B', 17);
INSERT INTO endereco ( cep, complemento, idestado) VALUES
( '20040002', 'Anexo 3', 35);
INSERT INTO endereco ( cep, complemento, idestado) VALUES
( '40015970', 'Centro', 52);
INSERT INTO endereco ( cep, complemento, idestado) VALUES
( '80010000', 'Depósito', 21);
INSERT INTO endereco ( cep, complemento, idestado) VALUES
( '88010020', 'Setor C', 42);
INSERT INTO endereco ( cep, complemento, idestado) VALUES
( '90010000', 'Área 5', 29);
INSERT INTO endereco ( cep, complemento, idestado) VALUES
( '50010000', 'Galpão Recife', 23);
INSERT INTO endereco ( cep, complemento, idestado) VALUES
( '60010000', 'Zona 2', 53);
INSERT INTO endereco ( cep, complemento, idestado) VALUES
( '74000000', 'Bloco Comercial', 15);

-- Contato --
INSERT INTO contato (telefone) VALUES
( '11999990000');
INSERT INTO contato ( telefone) VALUES
( '31999990001');
INSERT INTO contato ( telefone) VALUES
( '21999990002');
INSERT INTO contato ( telefone) VALUES
( '71999990003');
INSERT INTO contato ( telefone) VALUES
( '41999990004');
INSERT INTO contato ( telefone) VALUES
('48999990005');
INSERT INTO contato ( telefone) VALUES
( '51999990006');
INSERT INTO contato ( telefone) VALUES
( '81999990007');
INSERT INTO contato ( telefone) VALUES
( '85999990008');
INSERT INTO contato ( telefone) VALUES
('62999990009');

-- Fornecedor --
INSERT INTO fornecedor (nome, cnpj, idendereco, idcontato) VALUES
('Distribuidora Alimentos SP', '12345678000100', 2, 1);
INSERT INTO fornecedor ( nome, cnpj, idendereco, idcontato) VALUES
( 'Atacado Nacional MG', '12345678000200', 2, 2);
INSERT INTO fornecedor ( nome, cnpj, idendereco, idcontato) VALUES
( 'Comercial Soya Ltda', '12345678000300', 3, 3);
INSERT INTO fornecedor ( nome, cnpj, idendereco, idcontato) VALUES
( 'Distribuidora União', '12345678000400', 4, 4);
INSERT INTO fornecedor ( nome, cnpj, idendereco, idcontato) VALUES
( 'Laticínios Parmalat', '12345678000500', 5, 5);
INSERT INTO fornecedor ( nome, cnpj, idendereco, idcontato) VALUES
( 'Café Pilão Indústrias', '12345678000600', 6, 6);
INSERT INTO fornecedor ( nome, cnpj, idendereco, idcontato) VALUES
( 'Massas Renata SA', '12345678000700', 7, 7);
INSERT INTO fornecedor ( nome, cnpj, idendereco, idcontato) VALUES
( 'Dona Benta Alimentos', '12345678000800', 8, 8);
INSERT INTO fornecedor ( nome, cnpj, idendereco, idcontato) VALUES
( 'Colgate-Palmolive', '12345678000900', 9, 9);
INSERT INTO fornecedor ( nome, cnpj, idendereco, idcontato) VALUES
( 'Química Ypê', '12345678001000', 10, 10);

-- Produtos --
INSERT INTO produto (nome, preco_venda, idnutricao, idcategoria, idmarca) VALUES
( 'Arroz', 22.90, 1, 1, 1);
INSERT INTO produto ( nome, preco_venda, idnutricao, idcategoria, idmarca) VALUES
( 'Feijão Carioca', 7.49, 2, 1, 2);
INSERT INTO produto ( nome, preco_venda, idnutricao, idcategoria, idmarca) VALUES
( 'Óleo de Soja', 6.79, 3, 2, 3);
INSERT INTO produto ( nome, preco_venda, idnutricao, idcategoria, idmarca) VALUES
( 'Açúcar', 4.29, 4, 1, 4);
INSERT INTO produto ( nome, preco_venda, idnutricao, idcategoria, idmarca) VALUES
( 'Leite', 4.89, 5, 3, 5);
INSERT INTO produto ( nome, preco_venda, idnutricao, idcategoria, idmarca) VALUES
( 'Café', 14.99, 6, 4, 6);
INSERT INTO produto ( nome, preco_venda, idnutricao, idcategoria, idmarca) VALUES
( 'Macarrão Espaguete', 3.49, 7, 5, 7);
INSERT INTO produto ( nome, preco_venda, idnutricao, idcategoria, idmarca) VALUES
( 'Farinha de Trigo', 5.59, 8, 6, 8);
INSERT INTO produto ( nome, preco_venda, idnutricao, idcategoria, idmarca) VALUES
( 'Sabonete Neutro', 1.99, 9, 7, 9);
INSERT INTO produto ( nome, preco_venda, idnutricao, idcategoria, idmarca) VALUES
( 'Detergente', 2.89, 10, 8, 10);

-- Transações --
INSERT INTO transacao ( tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
( 'Entrada', 100, '2024-04-01', 17.00, 1, 1, 1);
INSERT INTO transacao ( tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
( 'Entrada', 200, '2024-04-02', 5.50, 2, 2, 2);
INSERT INTO transacao ( tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
( 'Entrada', 150, '2024-04-03', 4.90, 3, 3, 3);
INSERT INTO transacao ( tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
( 'Entrada', 100, '2024-04-04', 3.20, 4, 4, 4);
INSERT INTO transacao ( tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
( 'Entrada', 250, '2024-04-05', 3.89, 5, 5, 5);
INSERT INTO transacao ( tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
( 'Entrada', 180, '2024-04-06', 12.00, 6, 6, 6);
INSERT INTO transacao ( tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
( 'Entrada', 220, '2024-04-06', 2.50, 7, 7, 7);
INSERT INTO transacao ( tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
( 'Entrada', 200, '2024-04-06', 4.70, 8, 8, 8);
INSERT INTO transacao ( tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
( 'Entrada', 300, '2024-04-06', 1.20, 9, 9, 9);
INSERT INTO transacao ( tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
('Entrada', 400, '2024-04-06', 1.99, 10, 10, 10);

INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
('Saída', 5, '2025-04-01', 4.50, 1, NULL, 1);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
('Saída', 2, '2025-04-02', 3.20, 2, NULL, 3);  
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
('Saída', 1, '2025-04-03', 10.99, 3, NULL, 4);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
('Saída', 3, '2025-04-04', 2.49, 1, NULL, 6);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
('Saída', 1, '2025-04-05', 5.90, 2, NULL, 7); 


-- Prateleira --
INSERT INTO prateleira ( numero) VALUES
('P01');
INSERT INTO prateleira ( numero) VALUES
( 'P02'); 
INSERT INTO prateleira ( numero) VALUES
( 'P03'); 
INSERT INTO prateleira ( numero) VALUES
( 'P04'); 
INSERT INTO prateleira ( numero) VALUES
( 'P05');
INSERT INTO prateleira ( numero) VALUES
( 'P06');
INSERT INTO prateleira ( numero) VALUES
( 'P07'); 
INSERT INTO prateleira ( numero) VALUES
( 'P08'); 
INSERT INTO prateleira ( numero) VALUES
( 'P09');
INSERT INTO prateleira ( numero) VALUES
( 'P10');

-- Corredor --
INSERT INTO corredor (numero) VALUES
( 'C01');
INSERT INTO corredor ( numero) VALUES
( 'C02'); 
INSERT INTO corredor ( numero) VALUES
( 'C03'); 
INSERT INTO corredor ( numero) VALUES
( 'C04'); 
INSERT INTO corredor ( numero) VALUES
( 'C05');
INSERT INTO corredor ( numero) VALUES
( 'C06'); 
INSERT INTO corredor ( numero) VALUES
( 'C07');
INSERT INTO corredor ( numero) VALUES
( 'C08');
INSERT INTO corredor ( numero) VALUES
( 'C09');
INSERT INTO corredor ( numero) VALUES
('C10');

-- Lote --
INSERT INTO lote ( numero, data_validade, quantidade, idtransacao, idproduto) VALUES
( 'L001', '2025-04-01', 100, 1, 1);
INSERT INTO lote ( numero, data_validade, quantidade, idtransacao, idproduto) VALUES
( 'L002', '2025-06-15', 200, 2, 2);
INSERT INTO lote ( numero, data_validade, quantidade, idtransacao, idproduto) VALUES
( 'L003', '2025-05-10', 150, 3, 3);
INSERT INTO lote ( numero, data_validade, quantidade, idtransacao, idproduto) VALUES
( 'L004', '2025-04-20', 100, 4, 4);
INSERT INTO lote ( numero, data_validade, quantidade, idtransacao, idproduto) VALUES
( 'L005', '2025-08-01', 250, 5, 5);
INSERT INTO lote ( numero, data_validade, quantidade, idtransacao, idproduto) VALUES
( 'L006', '2025-04-10', 180, 6, 6);
INSERT INTO lote ( numero, data_validade, quantidade, idtransacao, idproduto) VALUES
( 'L007', '2025-07-05', 220, 7, 7);
INSERT INTO lote ( numero, data_validade, quantidade, idtransacao, idproduto) VALUES
( 'L008', '2025-06-30', 200, 8, 8);
INSERT INTO lote ( numero, data_validade, quantidade, idtransacao, idproduto) VALUES
( 'L009', '2025-09-01', 300, 9, 9);
INSERT INTO lote ( numero, data_validade, quantidade, idtransacao, idproduto) VALUES
('L010', '2025-07-15', 400, 10, 10);

-- Localização no Estoque --
INSERT INTO localizacao_estoque ( idlote, idprateleira, idcorredor) VALUES
(1, 1, 1);
INSERT INTO localizacao_estoque ( idlote, idprateleira, idcorredor) VALUES
( 2, 2, 2);
INSERT INTO localizacao_estoque ( idlote, idprateleira, idcorredor) VALUES
( 3, 3, 3);
INSERT INTO localizacao_estoque ( idlote, idprateleira, idcorredor) VALUES
( 4, 4, 4);
INSERT INTO localizacao_estoque ( idlote, idprateleira, idcorredor) VALUES
( 5, 5, 5);
INSERT INTO localizacao_estoque ( idlote, idprateleira, idcorredor) VALUES
( 6, 6, 6);
INSERT INTO localizacao_estoque ( idlote, idprateleira, idcorredor) VALUES
( 7, 7, 7);
INSERT INTO localizacao_estoque ( idlote, idprateleira, idcorredor) VALUES
( 8, 8, 8);
INSERT INTO localizacao_estoque ( idlote, idprateleira, idcorredor) VALUES
( 9, 9, 9);
INSERT INTO localizacao_estoque (idlote, idprateleira, idcorredor) VALUES
( 10, 10, 10);


