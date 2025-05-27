Insert into states (name, uf) values ('Acre', 'AC');
Insert into states (name, uf) values ('Alagoas', 'AL');
Insert into states (name, uf) values ('Amapá', 'AP');
Insert into states (name, uf) values ('Amazonas', 'AM');
Insert into states (name, uf) values ('Bahia', 'BA');
Insert into states (name, uf) values ('Ceará', 'CE');
Insert into states (name, uf) values ('Distrito Federal', 'DF');
Insert into states (name, uf) values ('Espírito Santo', 'ES');
Insert into states (name, uf) values ('Goiás', 'GO');
Insert into states (name, uf) values ('Maranhão', 'MA');
Insert into states (name, uf) values ('Mato Grosso', 'MT');
Insert into states (name, uf) values ('Mato Grosso do Sul', 'MS');
Insert into states (name, uf) values ('Minas Gerais', 'MG');
Insert into states (name, uf) values ('Pará', 'PA');
Insert into states (name, uf) values ('Paraíba', 'PB');
Insert into states (name, uf) values ('Paraná', 'PR');
Insert into states (name, uf) values ('Pernambuco', 'PE');
Insert into states (name, uf) values ('Piauí', 'PI');
Insert into states (name, uf) values ('Rio de Janeiro', 'RJ');
Insert into states (name, uf) values ('Rio Grande do Norte', 'RN');
Insert into states (name, uf) values ('Rio Grande do Sul', 'RS');
Insert into states (name, uf) values ('Rondônia', 'RO');
Insert into states (name, uf) values ('Roraima', 'RR');
Insert into states (name, uf) values ('Santa Catarina', 'SC');
Insert into states (name, uf) values ('São Paulo', 'SP');
Insert into states (name, uf) values ('Sergipe', 'SE');
Insert into states (name, uf) values ('Tocantins', 'TO');

-- Unidades de medida --
INSERT INTO measurements (name, initials) VALUES
('Unidade', 'un');
INSERT INTO measurements (name, initials) VALUES
('Litro', 'L');
INSERT INTO measurements (name, initials) VALUES
('Quilograma', 'kg');
INSERT INTO measurements (name, initials) VALUES
('Pacote', 'pc');
INSERT INTO measurements (name, initials) VALUES
('Caixa', 'cx');
INSERT INTO measurements (name, initials) VALUES
('Dúzia', 'dz');

INSERT INTO categories (name) VALUES
('Alimentos');
INSERT INTO categories (name) VALUES
('Bebidas');
INSERT INTO categories (name) VALUES
( 'Laticínios');
INSERT INTO categories (name) VALUES
( 'Cafés e chás');
INSERT INTO categories (name) VALUES
( 'Massas');
INSERT INTO categories (name) VALUES
( 'Padaria');
INSERT INTO categories (name) VALUES
( 'Higiene pessoal');
INSERT INTO categories (name) VALUES
( 'Limpeza');
INSERT INTO categories (name) VALUES
( 'Congelados');
INSERT INTO categories (name) VALUES
( 'Pet Shop');

-- Marca --
INSERT INTO brands (name) VALUES
('Tio João');
INSERT INTO brands (name) VALUES
( 'Kicaldo');
INSERT INTO brands (name) VALUES
( 'Soya');
INSERT INTO brands (name) VALUES
( 'União');
INSERT INTO brands (name) VALUES
( 'Parmalat');
INSERT INTO brands (name) VALUES
( 'Pilão');
INSERT INTO brands (name) VALUES
( 'Renata');
INSERT INTO brands (name) VALUES
( 'Dona Benta');
INSERT INTO brands (name) VALUES
( 'Palmolive');
INSERT INTO brands (name) VALUES
('Ypê');



-- Nutricao Produtos --
INSERT INTO nutritions (portion, protein_quantity, fatness_quantity, carbohydrate_quantity, id_measurements) VALUES
( 50.0, 4, 1, 35, 1);
INSERT INTO nutritions ( portion, protein_quantity, fatness_quantity, carbohydrate_quantity, id_measurements) VALUES
( 50.0, 7, 0, 30, 1);
INSERT INTO nutritions ( portion, protein_quantity, fatness_quantity, carbohydrate_quantity, id_measurements) VALUES
( 13.0, 0, 9, 0, 2);
INSERT INTO nutritions ( portion, protein_quantity, fatness_quantity, carbohydrate_quantity, id_measurements) VALUES
( 5.0, 0, 0, 5, 1);
INSERT INTO nutritions ( portion, protein_quantity, fatness_quantity, carbohydrate_quantity, id_measurements) VALUES
( 200.0, 6, 6, 10, 4);
INSERT INTO nutritions ( portion, protein_quantity, fatness_quantity, carbohydrate_quantity, id_measurements) VALUES
( 40.0, 1, 3, 5, 1);
INSERT INTO nutritions ( portion, protein_quantity, fatness_quantity, carbohydrate_quantity, id_measurements) VALUES
( 80.0, 2, 1, 65, 1);
INSERT INTO nutritions ( portion, protein_quantity, fatness_quantity, carbohydrate_quantity, id_measurements) VALUES
( 60.0, 2, 1, 45, 1);
INSERT INTO nutritions ( portion, protein_quantity, fatness_quantity, carbohydrate_quantity, id_measurements) VALUES
( 85.0, 0, 1, 0, 3);
INSERT INTO nutritions ( portion, protein_quantity, fatness_quantity, carbohydrate_quantity, id_measurements) VALUES
(15.0, 0, 0, 0, 2);

-- Endereco --
INSERT INTO address (cep, complement, id_states) VALUES
( '01001000', 'Galpão 1', 12);
INSERT INTO address ( cep, complement, id_states) VALUES
( '30140071', 'Bloco B', 17);
INSERT INTO address ( cep, complement, id_states) VALUES
( '20040002', 'Anexo 3', 35);
INSERT INTO address ( cep, complement, id_states) VALUES
( '40015970', 'Centro', 52);
INSERT INTO address ( cep, complement, id_states) VALUES
( '80010000', 'Depósito', 21);
INSERT INTO address ( cep, complement, id_states) VALUES
( '88010020', 'Setor C', 42);
INSERT INTO address ( cep, complement, id_states) VALUES
( '90010000', 'Área 5', 29);
INSERT INTO address ( cep, complement, id_states) VALUES
( '50010000', 'Galpão Recife', 23);
INSERT INTO address ( cep, complement, id_states) VALUES
( '60010000', 'Zona 2', 53);
INSERT INTO address ( cep, complement, id_states) VALUES
( '74000000', 'Bloco Comercial', 15);

-- Contato --
INSERT INTO contacts (tel_number) VALUES
( '11999990000');
INSERT INTO contacts (tel_number) VALUES
( '31999990001');
INSERT INTO contacts (tel_number) VALUES
( '21999990002');
INSERT INTO contacts (tel_number) VALUES
( '71999990003');
INSERT INTO contacts (tel_number) VALUES
( '41999990004');
INSERT INTO contacts (tel_number) VALUES
('48999990005');
INSERT INTO contacts (tel_number) VALUES
( '51999990006');
INSERT INTO contacts (tel_number) VALUES
( '81999990007');
INSERT INTO contacts (tel_number) VALUES
( '85999990008');
INSERT INTO contacts (tel_number) VALUES
('62999990009');

-- Fornecedor --
INSERT INTO suppliers (name, cnpj, id_address, id_contacts) VALUES
('Distribuidora Alimentos SP', '12345678000100', 2, 1);
INSERT INTO suppliers ( name, cnpj, id_address, id_contacts) VALUES
( 'Atacado Nacional MG', '12345678000200', 2, 2);
INSERT INTO suppliers ( name, cnpj, id_address, id_contacts) VALUES
( 'Comercial Soya Ltda', '12345678000300', 3, 3);
INSERT INTO suppliers ( name, cnpj, id_address, id_contacts) VALUES
( 'Distribuidora União', '12345678000400', 4, 4);
INSERT INTO suppliers ( name, cnpj, id_address, id_contacts) VALUES
( 'Laticínios Parmalat', '12345678000500', 5, 5);
INSERT INTO suppliers ( name, cnpj, id_address, id_contacts) VALUES
( 'Café Pilão Indústrias', '12345678000600', 6, 6);
INSERT INTO suppliers ( name, cnpj, id_address, id_contacts) VALUES
( 'Massas Renata SA', '12345678000700', 7, 7);
INSERT INTO suppliers ( name, cnpj, id_address, id_contacts) VALUES
( 'Dona Benta Alimentos', '12345678000800', 8, 8);
INSERT INTO suppliers ( name, cnpj, id_address, id_contacts) VALUES
( 'Colgate-Palmolive', '12345678000900', 9, 9);
INSERT INTO suppliers ( name, cnpj, id_address, id_contacts) VALUES
( 'Química Ypê', '12345678001000', 10, 10);

-- Produtos --
INSERT INTO products (nome, preco_venda, idnutricao, idcategoria, idmarca) VALUES
( 'Arroz', 22.90, 1, 1, 1);
INSERT INTO products ( nome, preco_venda, idnutricao, idcategoria, idmarca) VALUES
( 'Feijão Carioca', 7.49, 2, 1, 2);
INSERT INTO products ( nome, preco_venda, idnutricao, idcategoria, idmarca) VALUES
( 'Óleo de Soja', 6.79, 3, 2, 3);
INSERT INTO products ( nome, preco_venda, idnutricao, idcategoria, idmarca) VALUES
( 'Açúcar', 4.29, 4, 1, 4);
INSERT INTO products ( nome, preco_venda, idnutricao, idcategoria, idmarca) VALUES
( 'Leite', 4.89, 5, 3, 5);
INSERT INTO products ( nome, preco_venda, idnutricao, idcategoria, idmarca) VALUES
( 'Café', 14.99, 6, 4, 6);
INSERT INTO products ( nome, preco_venda, idnutricao, idcategoria, idmarca) VALUES
( 'Macarrão Espaguete', 3.49, 7, 5, 7);
INSERT INTO products ( nome, preco_venda, idnutricao, idcategoria, idmarca) VALUES
( 'Farinha de Trigo', 5.59, 8, 6, 8);
INSERT INTO products ( nome, preco_venda, idnutricao, idcategoria, idmarca) VALUES
( 'Sabonete Neutro', 1.99, 9, 7, 9);
INSERT INTO products ( nome, preco_venda, idnutricao, idcategoria, idmarca) VALUES
( 'Detergente', 2.89, 10, 8, 10);

-- Transações --
INSERT INTO transacao ( tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
( 'Entrada', 500, '2024-01-01', 17.00, 1, 1, 1);
INSERT INTO transacao ( tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
( 'Entrada', 300, '2024-02-01', 5.50, 2, 2, 2);
INSERT INTO transacao ( tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
( 'Entrada', 350, '2024-03-01', 5.50, 2, 2, 2);
INSERT INTO transacao ( tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
( 'Entrada', 300, '2024-04-01', 5.00, 2, 2, 2);
INSERT INTO transacao ( tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
( 'Entrada', 150, '2024-03-01', 4.90, 3, 3, 3);
INSERT INTO transacao ( tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
( 'Entrada', 100, '2024-04-01', 3.20, 4, 4, 4);
INSERT INTO transacao ( tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
( 'Entrada', 100, '2024-05-01', 5.20, 4, 4, 4);
INSERT INTO transacao ( tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
( 'Entrada', 250, '2024-05-01', 3.89, 5, 5, 5);
INSERT INTO transacao ( tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
( 'Entrada', 180, '2024-06-01', 12.00, 6, 6, 6);
INSERT INTO transacao ( tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
( 'Entrada', 220, '2024-07-01', 2.50, 4, 7, 7);
INSERT INTO transacao ( tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
( 'Entrada', 200, '2024-08-01', 4.70, 3, 8, 8);
INSERT INTO transacao ( tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
( 'Entrada', 300, '2024-09-01', 1.20, 2, 9, 9);
INSERT INTO transacao ( tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
('Entrada', 400, '2024-10-01', 1.99, 1, 10, 10);


INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
('Saída', 10, '2024-04-01', 22.90, 1, NULL, 1);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
('Saída', 20, '2024-04-02', 7.49, 2, NULL, 2);  
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
('Saída', 31, '2024-04-03', 7.49, 3, NULL, 2);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
('Saída', 32, '2024-04-04', 14.99, 1, NULL, 6);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES
('Saída', 15, '2024-04-05', 3.49, 2, NULL, 7); 

INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 6, '2024-07-16', 3.49, 10, NULL, 7);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 6, '2024-09-14', 1.99, 3, NULL, 9);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 9, '2024-02-15', 14.99, 6, NULL, 2);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 2, '2024-01-05', 22.9, 2, NULL, 1);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 9, '2024-02-09', 22.9, 8, NULL, 1);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 6, '2024-03-21', 22.9, 6, NULL, 1);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 10, '2024-04-02', 22.9, 4, NULL, 1);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 5, '2024-05-01', 22.9, 3, NULL, 1);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 2, '2024-06-09', 22.9, 2, NULL, 1);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 4, '2024-09-11', 1.99, 6, NULL, 9);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 5, '2024-07-21', 22.9, 9, NULL, 1);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 45, '2024-08-30', 5.59, 5, NULL, 8);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 36, '2024-09-09', 1.99, 8, NULL, 9);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 27, '2024-06-25', 14.99, 5, NULL, 6);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 19, '2024-07-27', 3.49, 1, NULL, 7);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 36, '2024-02-09', 7.49, 5, NULL, 2);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 25, '2024-03-25', 7.49, 4, NULL, 2);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 18, '2024-01-17', 22.9, 5, NULL, 1);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 38, '2024-02-23', 7.49, 3, NULL, 2);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 25, '2024-03-11', 7.49, 2, NULL, 2);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 61, '2024-07-16', 3.49, 1, NULL, 7);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 16, '2024-09-14', 1.99, 3, NULL, 9);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 19, '2024-02-15', 3.49, 6, NULL, 2);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 12, '2024-01-05', 22.9, 2, NULL, 1);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 19, '2024-02-09', 22.9, 8, NULL, 1);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 11, '2024-03-21', 22.9, 6, NULL, 1);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 20, '2024-04-02', 22.9, 4, NULL, 1);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 61, '2024-05-01', 22.9, 3, NULL, 1);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 12, '2024-06-09', 22.9, 2, NULL, 1);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 54, '2024-09-11', 1.99, 6, NULL, 9);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 54, '2024-02-21', 7.49, 9, NULL, 2);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 25, '2024-08-30', 5.59, 5, NULL, 8);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 16, '2024-09-09', 1.99, 8, NULL, 9);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 27, '2024-06-25', 14.99, 5, NULL, 6);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 69, '2024-07-27', 3.49, 1, NULL, 7);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 56, '2024-02-09', 7.49, 5, NULL, 2);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 51, '2024-03-25', 7.49, 4, NULL, 2);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 38, '2024-04-17', 7.49, 5, NULL, 2);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 38, '2024-05-23', 7.49, 3, NULL, 2);
INSERT INTO transacao (tipo_transacao, quantidade, data_transacao, preco, idusuario, idfornecedor, idproduto) VALUES ('Saída', 35, '2024-06-11', 7.49, 2, NULL, 2);
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

