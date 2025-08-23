#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' 

print_message() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_step() {
    echo -e "${BLUE}[STEP]${NC} $1"
}

command_exists() {
    command -v "$1" >/dev/null 2>&1
}

wait_for_database() {
    print_message "Aguardando banco de dados estar disponível..."
    
    local max_attempts=30
    local attempt=1
    
    while [ $attempt -le $max_attempts ]; do
        if docker exec supermarket-db pg_isready -U postgres >/dev/null 2>&1; then
            print_message "Banco de dados está disponível!"
            return 0
        fi
        
        print_warning "Tentativa $attempt/$max_attempts - Banco ainda não está disponível..."
        sleep 2
        attempt=$((attempt + 1))
    done
    
    print_error "Timeout aguardando banco de dados"
    return 1
}

run_migrations() {
    print_step "Executando migrações do banco..."
    
    if npm run migration:run; then
        print_message "Migrações executadas com sucesso"
    else
        print_error "Falha ao executar migrações"
        return 1
    fi
}

run_seeds() {
    print_step "Executando seeds para popular o banco..."
    
    if npm run seed:run; then
        print_message "Seeds executados com sucesso"
    else
        print_error "Falha ao executar seeds"
        return 1
    fi
}

check_container_running() {
    if docker ps --format "table {{.Names}}" | grep -q "supermarket-db"; then
        return 0
    else
        return 1
    fi
}

cleanup_containers() {
    print_step "Limpando containers existentes..."
    
    if docker ps -a --format "table {{.Names}}" | grep -q "supermarket-db"; then
        print_message "Parando container existente..."
        docker stop supermarket-db >/dev/null 2>&1
        
        print_message "Removendo container existente..."
        docker rm supermarket-db >/dev/null 2>&1
    fi
}

check_dependencies() {
    print_step "Verificando dependências..."
    
    if ! command_exists docker; then
        print_error "Docker não está instalado ou não está no PATH"
        exit 1
    fi
    
    if ! command_exists docker-compose; then
        print_error "Docker Compose não está instalado ou não está no PATH"
        exit 1
    fi
    
    if ! command_exists npm; then
        print_error "NPM não está instalado ou não está no PATH"
        exit 1
    fi
    
    print_message "Todas as dependências estão disponíveis"
}

install_dependencies() {
    print_step "Instalando dependências do projeto..."
    
    if [ ! -d "node_modules" ]; then
        print_message "Instalando dependências NPM..."
        if npm install; then
            print_message "Dependências instaladas com sucesso"
        else
            print_error "Falha ao instalar dependências"
            exit 1
        fi
    else
        print_message "Dependências já estão instaladas"
    fi
}

main() {
    echo -e "${BLUE} Setup do Banco de Dados - Sistema de Supermercado${NC}"
    echo "=================================================="
    
    check_dependencies
    
    install_dependencies
    
    cleanup_containers
    
    print_step "Subindo container PostgreSQL..."
    if docker-compose up -d; then
        print_message "Container PostgreSQL iniciado com sucesso"
    else
        print_error "Falha ao iniciar container PostgreSQL"
        exit 1
    fi
    
    if ! wait_for_database; then
        print_error "Falha ao aguardar banco de dados"
        exit 1
    fi
    
    if ! run_migrations; then
        print_error "Falha ao executar migrações"
        exit 1
    fi
    
    if ! run_seeds; then
        print_error "Falha ao executar seeds"
        exit 1
    fi
    
    echo ""
    echo -e "${GREEN}Setup concluído com sucesso!${NC}"
    echo "=================================================="
    echo -e "${BLUE}Banco de dados populado com:${NC}"
    echo "   • 27 estados brasileiros"
    echo "   • 6 unidades de medida"
    echo "   • 10 categorias de produtos"
    echo "   • 10 marcas"
    echo "   • 10 informações nutricionais"
    echo "   • 10 endereços"
    echo "   • 10 contatos"
    echo "   • 10 fornecedores"
    echo "   • 10 produtos"
    echo "   • 67 transações (entrada e saída)"
    echo "   • 10 prateleiras"
    echo "   • 10 corredores"
    echo "   • 10 lotes"
    echo "   • 10 localizações de estoque"
    echo ""
    echo -e "${BLUE}Acesso ao banco:${NC}"
    echo "   • Host: localhost"
    echo "   • Porta: 5433"
    echo "   • Usuário: postgres"
    echo "   • Senha: docker"
    echo "   • Banco: supermarket"
    echo ""
    echo -e "${BLUE}Para parar o container:${NC}"
    echo "   docker-compose down"
    echo ""
    echo -e "${BLUE}Para ver logs:${NC}"
    echo "   docker-compose logs -f"
}

main "$@" 