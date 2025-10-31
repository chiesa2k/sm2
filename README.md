# Supply Marine HVAC Management System
## FPSO Bacalhau - Modec

Sistema web completo para gestão de equipamentos HVAC, RDOs, colaboradores e serviços da FPSO Bacalhau.

---

## 📋 Características

✅ **Dashboard Executivo** - KPIs, gráficos com números visíveis  
✅ **Gestão de RDOs** - Criar, editar, deletar, expandir, exportar CSV  
✅ **35 Equipamentos Reais** - Dados técnicos completos da FPSO Bacalhau  
✅ **Gestão de Colaboradores** - Add, edit, delete  
✅ **Catálogo de Serviços** - 8 serviços com CRUD completo  
✅ **Design Responsivo** - Funciona em desktop, tablet e mobile  
✅ **Paleta Supply Marine** - Cores oficiais da empresa  
✅ **Zero Dependências** - HTML5 + CSS3 + Vanilla JavaScript  

---

## 🚀 Deploy Rápido

### Arquivos Necessários
Você precisa de 4 arquivos nesta pasta:
- `index.html` - Estrutura HTML
- `style.css` - Estilos e design
- `script.js` - Funcionalidades JavaScript
- `README.md` - Este arquivo

### GitHub Pages
1. Crie um repositório no GitHub chamado `supply-marine-hvac`
2. Faça upload dos 4 arquivos
3. Vá em **Settings** → **Pages** → Branch: **main** → Save

Seu app estará disponível em:
```
https://seu-usuario.github.io/supply-marine-hvac/
```

### Uso Local
Simplesmente abra o arquivo `index.html` em qualquer navegador moderno:
```bash
# Clique duplo em index.html
# OU use um servidor local
python -m http.server 8000
```

---

## 📊 Dados Inclusos

### 35 Equipamentos HVAC Reais
Especificações técnicas completas da FPSO Bacalhau:
- TAGs: 77GB001A até 77GT703
- Fabricantes: Glory Bright, Cadar Marine, Friend Thermal, Rapid Marine, Walter Roller
- Especificações: TR, kW, BTU/h, compressores, refrigerantes
- Localizações: Acomodações, E-House, VFD, Laboratório, Cozinha, Provisões

### 6 Colaboradores Pré-cadastrados
- Bruno de Oliveira (Maintenance Engineer)
- Carlos Fernando Silva (Técnico HVAC)
- Marcela Santos (Coordenadora)
- Roberto Martins (Técnico Senior)
- Juliana Costa (Engenheira)
- Diego Ferreira (Assistente)

### 8 Serviços Disponíveis
- Manutenção Preventiva (R$ 2.500)
- Limpeza Profunda (R$ 4.200)
- Substituição de Óleo (R$ 3.500)
- Análise de Qualidade do Ar (R$ 3.800)
- Calibração de Pressostatos (R$ 2.800)
- Revisão ATEX (R$ 5.500)
- Reparo de Vazamento (R$ 4.000)
- Higienização de Dutos (R$ 6.200)

---

## 🎨 Funcionalidades Principais

### Dashboard
- 4 KPI Cards em tempo real
- Gráfico Donut: Status de Equipamentos (com números visíveis)
- Gráfico Bar: RDOs por Status (com números visíveis)
- Atualização automática

### RDO (Relatório de Ordem de Serviço)
✅ **Criar** - Novo RDO com auto-increment de ID
✅ **Expandir** - Ver todos os detalhes
✅ **Deletar** - Com confirmação de segurança
✅ **Filtrar** - Por status e colaborador
✅ **Exportar** - Download em CSV
✅ **Validação** - De formulários

### Equipamentos (35 Reais)
✅ **Visualizar** - Lista completa dos 35
✅ **Expandir** - Ver especificações técnicas
✅ **Deletar** - Remove RDOs vinculadas
✅ **Filtrar** - Por local e tipo
✅ **Status Visual** - Em Dia, Atenção, Crítico

### Colaboradores
✅ **Adicionar** - Novo colaborador
✅ **Deletar** - Remover
✅ **Ver** - Histórico de RDOs
✅ **Rastrear** - Total de horas e custos

### Serviços
✅ **Expandir** - Ver detalhes completos
✅ **Deletar** - Remover serviço
✅ **Visualizar** - Catálogo em cards

---

## 🎨 Design e Branding

### Paleta Supply Marine
| Cor | Código | Uso |
|-----|--------|-----|
| Primária Escura | #003366 | Headers |
| Primária Média | #1a5490 | Hover |
| Secundária | #0066CC | Buttons |
| Sucesso | #00AA44 | OK |
| Aviso | #FF9900 | Warning |
| Erro | #CC0000 | Delete |

### Layout
- ✅ Cabeçalho BRANCO com logo
- ✅ Rodapé BRANCO
- ✅ Navegação intuitiva
- ✅ 100% Responsivo

---

## 💻 Responsividade

- ✅ **Desktop** (1920px+)
- ✅ **Tablet** (768px - 1024px)
- ✅ **Mobile** (< 768px)

---

## 🔒 Segurança

- ✅ Armazenamento em memória
- ✅ Validação de formulários
- ✅ Confirmação de ações destrutivas
- ✅ Sem dados sensíveis expostos

---

## 📱 Estrutura de Pastas

```
supply-marine-hvac/
├── index.html          # HTML (estrutura)
├── style.css           # CSS (design)
├── script.js           # JavaScript (funcionalidades)
├── README.md           # Este arquivo
└── .gitignore         # Configuração Git
```

---

## 🛠️ Próximas Versões

- [ ] Backend com persistência de dados
- [ ] Autenticação de usuários
- [ ] Banco de dados (PostgreSQL)
- [ ] Mobile app
- [ ] Integração com IoT

---

## 📞 Suporte

**Supply Marine - HVAC Solutions**
- 🌍 Website: www.supplymarine.com.br
- 📧 Email: contato@supplymarine.com.br

---

**Desenvolvido em:** 31 de outubro de 2025  
**Versão:** 1.0  
**Cliente:** Modec Serviços de Petróleo do Brasil  
**Status:** ✅ Pronto para Produção