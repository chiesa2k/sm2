// APLICAÇÃO SUPPLY MARINE HVAC SYSTEM
const app = {
    equipamentos: [
        {tag: "77GB001A", tipo: "Unidade Condensadora", fabricante: "Glory Bright", modelo: "CB.CS.3521140", tr: 176.3, kw: 620.0, btu: 2115526, tipoAtiv: "Acomodações", local: "MR1", compressor: "Bitzer", condensador: "Agua", refrigerante: "R407C"},
        {tag: "77GB001B", tipo: "Unidade Condensadora", fabricante: "Glory Bright", modelo: "CB.CS.3521140", tr: 176.3, kw: 620.0, btu: 2115526, tipoAtiv: "Acomodações", local: "MR1", compressor: "Bitzer", condensador: "Agua", refrigerante: "R407C"},
        {tag: "77GB001C", tipo: "Unidade Condensadora", fabricante: "Glory Bright", modelo: "CB.CS.3521140", tr: 176.3, kw: 620.0, btu: 2115526, tipoAtiv: "Acomodações", local: "MR1", compressor: "Bitzer", condensador: "Agua", refrigerante: "R407C"},
        {tag: "77GA001A", tipo: "Unidade Evaporadora", fabricante: "Glory Bright", modelo: "AAHM47.3N", tr: 176.3, kw: 620.0, btu: 2115526, tipoAtiv: "Acomodações", local: "MR1", compressor: "N/A", condensador: "Ar", refrigerante: "R407C"},
        {tag: "77GA001B", tipo: "Unidade Evaporadora", fabricante: "Glory Bright", modelo: "AAHM47.3N", tr: 176.3, kw: 620.0, btu: 2115526, tipoAtiv: "Acomodações", local: "MR1", compressor: "N/A", condensador: "Ar", refrigerante: "R407C"},
        {tag: "77GB500A", tipo: "Rooftop", fabricante: "Cadar Marine", modelo: "CJKR-500", tr: 187.1, kw: 658.0, btu: 2245187, tipoAtiv: "E-House (Alpha)", local: "Área Externa", compressor: "Bitzer", condensador: "Ar", refrigerante: "R407C"},
        {tag: "77GB500B", tipo: "Rooftop", fabricante: "Cadar Marine", modelo: "CIKR-500", tr: 187.1, kw: 658.0, btu: 2245187, tipoAtiv: "E-House (Bravo)", local: "Área Externa", compressor: "Bitzer", condensador: "Ar", refrigerante: "R407C"},
        {tag: "77GJ500A", tipo: "Rooftop", fabricante: "Friend Thermal", modelo: "4850", tr: 137.1, kw: 482.0, btu: 1644658, tipoAtiv: "VFD (Alpha)", local: "N/I", compressor: "Bitzer", condensador: "Ar", refrigerante: "R407C"},
        {tag: "77GJ500B", tipo: "Rooftop", fabricante: "Friend Thermal", modelo: "4850", tr: 137.1, kw: 482.0, btu: 1644658, tipoAtiv: "VFD (Bravo)", local: "N/I", compressor: "Bitzer", condensador: "Ar", refrigerante: "R407C"},
        {tag: "77GB400A", tipo: "Self Contained", fabricante: "Glory Bright", modelo: "GAL 81", tr: 30.6, kw: 107.5, btu: 366799, tipoAtiv: "Laboratório (Alpha)", local: "Laboratório", compressor: "Copeland", condensador: "Ar", refrigerante: "R407C"},
        {tag: "77GB400B", tipo: "Self Contained", fabricante: "Glory Bright", modelo: "GAL 81", tr: 30.6, kw: 107.5, btu: 366799, tipoAtiv: "Laboratório (Bravo)", local: "Laboratório", compressor: "Copeland", condensador: "Ar", refrigerante: "R407C"},
        {tag: "77GB402", tipo: "Self Contained", fabricante: "Glory Bright", modelo: "GAL66", tr: 24.6, kw: 86.6, btu: 295745, tipoAtiv: "Oficina", local: "Oficina", compressor: "Copeland", condensador: "Ar", refrigerante: "R407C"},
        {tag: "77GB005A", tipo: "Self Contained", fabricante: "Glory Bright", modelo: "GAL76", tr: 29.7, kw: 104.5, btu: 356564, tipoAtiv: "Telecom (Alpha)", local: "Telecom", compressor: "Copeland", condensador: "Ar", refrigerante: "R40C"},
        {tag: "77GB005B", tipo: "Self Contained", fabricante: "Glory Bright", modelo: "GAL76", tr: 29.7, kw: 104.5, btu: 356564, tipoAtiv: "Telecom (Bravo)", local: "Telecom", compressor: "Copeland", condensador: "Ar", refrigerante: "R40C"},
        {tag: "77GB010A", tipo: "Self Contained", fabricante: "Glory Bright", modelo: "GAL69", tr: 25.1, kw: 88.4, btu: 301725, tipoAtiv: "CER (Alpha)", local: "CER", compressor: "Copeland", condensador: "Ar", refrigerante: "R407C"},
        {tag: "77GB010B", tipo: "Self Contained", fabricante: "Glory Bright", modelo: "GAL69", tr: 25.1, kw: 88.4, btu: 301725, tipoAtiv: "CER (Bravo)", local: "CER", compressor: "Copeland", condensador: "Ar", refrigerante: "R407C"},
        {tag: "77GB012", tipo: "Self Contained", fabricante: "Glory Bright", modelo: "GAL72", tr: 20.5, kw: 72.0, btu: 245674, tipoAtiv: "Switchboard", local: "Switchboard", compressor: "Copeland", condensador: "Ar", refrigerante: "R407C"},
        {tag: "77GB018", tipo: "Self Contained", fabricante: "Glory Bright", modelo: "GWL35", tr: 12.7, kw: 44.7, btu: 152626, tipoAtiv: "Engine Room", local: "Engine", compressor: "Copeland", condensador: "Agua Doce", refrigerante: "R407C"},
        {tag: "77GB009A", tipo: "Self Contained", fabricante: "Glory Bright", modelo: "GWL53", tr: 15.1, kw: 53.0, btu: 180842, tipoAtiv: "Cozinha (Alpha)", local: "Cozinha", compressor: "Copeland", condensador: "Agua Doce", refrigerante: "R407C"},
        {tag: "77GB009B", tipo: "Self Contained", fabricante: "Glory Bright", modelo: "GWL53", tr: 15.1, kw: 53.0, btu: 180842, tipoAtiv: "Cozinha (Bravo)", local: "Cozinha", compressor: "Copeland", condensador: "Agua Doce", refrigerante: "R407C"},
        {tag: "77GB003A", tipo: "Self Contained", fabricante: "Glory Bright", modelo: "GAL30", tr: 8.5, kw: 30.0, btu: 102364, tipoAtiv: "CCR (Alpha)", local: "CCR", compressor: "Copeland", condensador: "Ar", refrigerante: "R407C"},
        {tag: "77GB003B", tipo: "Self Contained", fabricante: "Glory Bright", modelo: "GAL30", tr: 8.5, kw: 30.0, btu: 102364, tipoAtiv: "CCR (Bravo)", local: "CCR", compressor: "Copeland", condensador: "Ar", refrigerante: "R407C"},
        {tag: "77GB007", tipo: "Self Contained", fabricante: "Glory Bright", modelo: "GAL32", tr: 9.1, kw: 32.0, btu: 109198, tipoAtiv: "Reunião", local: "Sala", compressor: "Copeland", condensador: "Ar", refrigerante: "R407C"},
        {tag: "77GB014", tipo: "Self Contained", fabricante: "Glory Bright", modelo: "GAL12", tr: 3.4, kw: 12.0, btu: 40945, tipoAtiv: "FWD", local: "FWD", compressor: "Copeland", condensador: "Ar", refrigerante: "R407C"},
        {tag: "77GB002A", tipo: "Self Contained", fabricante: "Glory Bright", modelo: "GAL9", tr: 2.6, kw: 9.0, btu: 30709, tipoAtiv: "Rádio (Alpha)", local: "Rádio", compressor: "Copeland", condensador: "Ar", refrigerante: "R407C"},
        {tag: "77GB002B", tipo: "Self Contained", fabricante: "Glory Bright", modelo: "GAL9", tr: 2.6, kw: 9.0, btu: 30709, tipoAtiv: "Rádio (Bravo)", local: "Rádio", compressor: "Copeland", condensador: "Ar", refrigerante: "R407C"},
        {tag: "97GB701A", tipo: "Unidade Condensadora", fabricante: "Rapid Marine", modelo: "N/I", tr: 5.1, kw: 18.0, btu: 61418, tipoAtiv: "Provisões", local: "Máquinas", compressor: "Bitzer", condensador: "Agua", refrigerante: "R404A"},
        {tag: "97GB701B", tipo: "Unidade Condensadora", fabricante: "Rapid Marine", modelo: "N/I", tr: 5.1, kw: 18.0, btu: 61418, tipoAtiv: "Provisões", local: "Máquinas", compressor: "Bitzer", condensador: "Agua", refrigerante: "R404A"},
        {tag: "97GB703", tipo: "Forçador de Ar", fabricante: "Walter Roller", modelo: "FAVT", tr: 5.1, kw: 18.0, btu: 61418, tipoAtiv: "Carnes", local: "Cozinha", compressor: "N/A", condensador: "N/A", refrigerante: "R404A"},
        {tag: "97GB704", tipo: "Forçador de Ar", fabricante: "Walter Roller", modelo: "FAVT", tr: 5.1, kw: 18.0, btu: 61418, tipoAtiv: "Peixes", local: "Cozinha", compressor: "N/A", condensador: "N/A", refrigerante: "R404A"},
        {tag: "97GB706", tipo: "Forçador de Ar", fabricante: "Walter Roller", modelo: "FAVT", tr: 5.1, kw: 18.0, btu: 61418, tipoAtiv: "Laticínios", local: "Cozinha", compressor: "N/A", condensador: "N/A", refrigerante: "R404A"},
        {tag: "97GB705", tipo: "Forçador de Ar", fabricante: "Walter Roller", modelo: "FAVT", tr: 5.1, kw: 18.0, btu: 61418, tipoAtiv: "Verduras", local: "Cozinha", compressor: "N/A", condensador: "N/A", refrigerante: "R404A"},
        {tag: "77GT701", tipo: "Split System", fabricante: "N/I", modelo: "N/I", tr: null, kw: 10.0, btu: null, tipoAtiv: "Guindaste (Alpha)", local: "N/I", compressor: "N/A", condensador: "N/A", refrigerante: "R407C"},
        {tag: "77GT702", tipo: "Split System", fabricante: "N/I", modelo: "N/I", tr: null, kw: 10.0, btu: null, tipoAtiv: "Guindaste (Bravo)", local: "N/I", compressor: "N/A", condensador: "N/A", refrigerante: "R407C"},
        {tag: "77GT703", tipo: "Split System", fabricante: "N/I", modelo: "N/I", tr: null, kw: 10.0, btu: null, tipoAtiv: "Guindaste (Charlie)", local: "N/I", compressor: "N/A", condensador: "N/A", refrigerante: "R407C"}
    ],

    servicos: [
        {id: "SRV001", nome: "Manutenção Preventiva", desc: "Inspeção visual mensal", categoria: "Manutenção", periodicidade: "Mensal", custo: 2500},
        {id: "SRV002", nome: "Limpeza Profunda", desc: "Limpeza de serpentinas", categoria: "Limpeza", periodicidade: "Trimestral", custo: 4200},
        {id: "SRV003", nome: "Substituição de Óleo", desc: "Troca de óleo do compressor", categoria: "Manutenção", periodicidade: "Anual", custo: 3500},
        {id: "SRV004", nome: "Análise de Ar", desc: "Análise da qualidade do ar", categoria: "Análise", periodicidade: "Semestral", custo: 3800},
        {id: "SRV005", nome: "Calibração", desc: "Calibração de pressostatos", categoria: "Calibração", periodicidade: "Anual", custo: 2800},
        {id: "SRV006", nome: "Revisão ATEX", desc: "Verificação de conformidade", categoria: "Conformidade", periodicidade: "Anual", custo: 5500},
        {id: "SRV007", nome: "Reparo", desc: "Detecção de vazamentos", categoria: "Reparo", periodicidade: "Conforme", custo: 4000},
        {id: "SRV008", nome: "Higienização", desc: "Higienização de dutos", categoria: "Higienização", periodicidade: "Semestral", custo: 6200}
    ],

    colaboradores: [
        {id: "COL001", nome: "Bruno de Oliveira", cargo: "Maintenance Engineer", email: "bruno@modec.com", telefone: "+55 21 98765", especialidade: "Gestão", status: "Ativo"},
        {id: "COL002", nome: "Carlos Fernando", cargo: "Técnico HVAC", email: "carlos@supplymarine.com", telefone: "+55 21 99876", especialidade: "Frigorífico", status: "Ativo"},
        {id: "COL003", nome: "Marcela Santos", cargo: "Coordenadora", email: "marcela@supplymarine.com", telefone: "+55 21 97654", especialidade: "Coordenação", status: "Ativo"},
        {id: "COL004", nome: "Roberto Martins", cargo: "Técnico Senior", email: "roberto@supplymarine.com", telefone: "+55 21 96543", especialidade: "ATEX", status: "Ativo"},
        {id: "COL005", nome: "Juliana Costa", cargo: "Engenheira", email: "juliana@supplymarine.com", telefone: "+55 21 95432", especialidade: "Engenharia", status: "Ativo"},
        {id: "COL006", nome: "Diego Ferreira", cargo: "Assistente", email: "diego@supplymarine.com", telefone: "+55 21 94321", especialidade: "Apoio", status: "Ativo"}
    ],

    rdos: [],

    init() {
        this.setupListeners();
        this.renderEquipamentos();
        this.renderServicos();
        this.renderColaboradores();
        this.updateDashboard();
    },

    setupListeners() {
        document.querySelectorAll('.nav-tab').forEach(t => {
            t.addEventListener('click', (e) => {
                document.querySelectorAll('.nav-tab').forEach(x => x.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(x => x.classList.remove('active'));
                e.target.classList.add('active');
                document.getElementById(e.target.dataset.tab).classList.add('active');
            });
        });

        document.getElementById('formToggle')?.addEventListener('click', () => {
            document.getElementById('formRDOContainer').classList.toggle('active');
        });

        document.getElementById('formColabToggle')?.addEventListener('click', () => {
            document.getElementById('formColabContainer').classList.toggle('active');
        });

        document.getElementById('formRDO')?.addEventListener('submit', (e) => this.handleRDOSubmit(e));
        document.getElementById('formColab')?.addEventListener('submit', (e) => this.handleColabSubmit(e));

        document.getElementById('filterStatus')?.addEventListener('change', () => this.renderRDOs());
        document.getElementById('filterColaborador')?.addEventListener('change', () => this.renderRDOs());
        document.getElementById('filterLocal')?.addEventListener('change', () => this.renderEquipamentos());
        document.getElementById('filterTipo')?.addEventListener('change', () => this.renderEquipamentos());

        document.getElementById('btnExportar')?.addEventListener('click', () => this.exportCSV());

        const selectEquip = document.getElementById('selectEquipamento');
        if (selectEquip) {
            this.equipamentos.forEach(e => {
                const opt = document.createElement('option');
                opt.value = e.tag;
                opt.textContent = e.tag;
                selectEquip.appendChild(opt);
            });
            
            selectEquip.addEventListener('change', (e) => {
                const equip = this.equipamentos.find(x => x.tag === e.target.value);
                if (equip) document.querySelector('[name="tipoAtividade"]').value = equip.tipoAtiv;
            });
        }

        const selectServ = document.querySelector('[name="servico"]');
        if (selectServ) {
            this.servicos.forEach(s => {
                const opt = document.createElement('option');
                opt.value = s.id;
                opt.textContent = s.nome;
                selectServ.appendChild(opt);
            });
        }

        const selectColab = document.querySelector('[name="colaborador"]');
        if (selectColab) {
            this.colaboradores.forEach(c => {
                const opt = document.createElement('option');
                opt.value = c.id;
                opt.textContent = c.nome;
                selectColab.appendChild(opt);
            });
        }

        const filterColab = document.getElementById('filterColaborador');
        if (filterColab) {
            this.colaboradores.forEach(c => {
                const opt = document.createElement('option');
                opt.value = c.id;
                opt.textContent = c.nome;
                filterColab.appendChild(opt);
            });
        }

        const filterLocal = document.getElementById('filterLocal');
        if (filterLocal) {
            const locais = [...new Set(this.equipamentos.map(e => e.local))];
            locais.forEach(l => {
                const opt = document.createElement('option');
                opt.value = l;
                opt.textContent = l;
                filterLocal.appendChild(opt);
            });
        }

        const filterTipo = document.getElementById('filterTipo');
        if (filterTipo) {
            const tipos = [...new Set(this.equipamentos.map(e => e.tipo))];
            tipos.forEach(t => {
                const opt = document.createElement('option');
                opt.value = t;
                opt.textContent = t;
                filterTipo.appendChild(opt);
            });
        }
    },

    renderRDOs() {
        const tbody = document.querySelector('#tableRDO tbody');
        tbody.innerHTML = '';

        const statusFilter = document.getElementById('filterStatus')?.value || '';
        const colabFilter = document.getElementById('filterColaborador')?.value || '';

        let filtered = this.rdos;
        if (statusFilter) filtered = filtered.filter(r => r.status === statusFilter);
        if (colabFilter) filtered = filtered.filter(r => r.colaborador === colabFilter);

        filtered.forEach(rdo => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${rdo.id}</td>
                <td>${rdo.dataAbertura}</td>
                <td>${rdo.equipamento}</td>
                <td>${rdo.servico}</td>
                <td>${rdo.colaborador}</td>
                <td><span class="badge ${this.getStatusBadgeClass(rdo.status)}">${rdo.status}</span></td>
                <td>${rdo.horas}h</td>
                <td>R$ ${rdo.custo.toFixed(2)}</td>
                <td>
                    <button class="btn-secondary" onclick="app.expandRDO('${rdo.id}')">Expandir</button>
                    <button class="btn-danger" onclick="app.deleteRDO('${rdo.id}')">Deletar</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    },

    renderEquipamentos() {
        const tbody = document.querySelector('#tableEquipamentos tbody');
        tbody.innerHTML = '';

        const localFilter = document.getElementById('filterLocal')?.value || '';
        const tipoFilter = document.getElementById('filterTipo')?.value || '';

        let filtered = this.equipamentos;
        if (localFilter) filtered = filtered.filter(e => e.local === localFilter);
        if (tipoFilter) filtered = filtered.filter(e => e.tipo === tipoFilter);

        filtered.forEach(equip => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><strong>${equip.tag}</strong></td>
                <td>${equip.tipo}</td>
                <td>${equip.fabricante}</td>
                <td>${equip.local}</td>
                <td>${equip.kw} kW</td>
                <td><span class="badge badge-success">Em Dia</span></td>
                <td>
                    <button class="btn-secondary" onclick="app.expandEquip('${equip.tag}')">Expandir</button>
                    <button class="btn-danger" onclick="app.deleteEquip('${equip.tag}')">Deletar</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    },

    renderServicos() {
        const grid = document.getElementById('servicesGrid');
        grid.innerHTML = '';

        this.servicos.forEach(serv => {
            const card = document.createElement('div');
            card.className = 'service-card';
            card.innerHTML = `
                <h3>${serv.nome}</h3>
                <p>${serv.desc}</p>
                <div style="font-size: 0.9em; margin-bottom: 15px;">
                    <strong>Categoria:</strong> ${serv.categoria}<br>
                    <strong>Periodicidade:</strong> ${serv.periodicidade}<br>
                    <strong>Custo:</strong> R$ ${serv.custo}
                </div>
                <div class="btn-group">
                    <button class="btn-secondary" onclick="app.expandServico('${serv.id}')">Expandir</button>
                    <button class="btn-danger" onclick="app.deleteServico('${serv.id}')">Deletar</button>
                </div>
            `;
            grid.appendChild(card);
        });
    },

    renderColaboradores() {
        const tbody = document.querySelector('#tableColaboradores tbody');
        tbody.innerHTML = '';

        this.colaboradores.forEach(colab => {
            const rdosCount = this.rdos.filter(r => r.colaborador === colab.id).length;
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${colab.id}</td>
                <td><strong>${colab.nome}</strong></td>
                <td>${colab.cargo}</td>
                <td>${colab.email}</td>
                <td>${colab.telefone}</td>
                <td>${rdosCount}</td>
                <td><span class="badge badge-success">${colab.status}</span></td>
                <td>
                    <button class="btn-danger" onclick="app.deleteColab('${colab.id}')">Deletar</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    },

    expandRDO(id) {
        const rdo = this.rdos.find(r => r.id === id);
        if (!rdo) return;

        const modal = document.getElementById('modalRDO');
        const body = document.getElementById('modalRDOBody');
        body.innerHTML = `
            <div class="detail-grid">
                <div class="detail-item"><div class="detail-label">ID RDO</div><div class="detail-value">${rdo.id}</div></div>
                <div class="detail-item"><div class="detail-label">Cliente</div><div class="detail-value">${rdo.cliente}</div></div>
                <div class="detail-item"><div class="detail-label">Unidade</div><div class="detail-value">${rdo.unidade}</div></div>
                <div class="detail-item"><div class="detail-label">Equipamento</div><div class="detail-value">${rdo.equipamento}</div></div>
                <div class="detail-item"><div class="detail-label">Serviço</div><div class="detail-value">${rdo.servico}</div></div>
                <div class="detail-item"><div class="detail-label">Colaborador</div><div class="detail-value">${rdo.colaborador}</div></div>
                <div class="detail-item"><div class="detail-label">Status</div><div class="detail-value">${rdo.status}</div></div>
                <div class="detail-item"><div class="detail-label">Horas</div><div class="detail-value">${rdo.horas}h</div></div>
                <div class="detail-item"><div class="detail-label">Custo</div><div class="detail-value">R$ ${rdo.custo.toFixed(2)}</div></div>
            </div>
        `;
        modal.classList.add('active');
    },

    expandEquip(tag) {
        const equip = this.equipamentos.find(e => e.tag === tag);
        if (!equip) return;

        const modal = document.getElementById('modalEquip');
        const body = document.getElementById('modalEquipBody');
        body.innerHTML = `
            <div class="detail-grid">
                <div class="detail-item"><div class="detail-label">TAG</div><div class="detail-value">${equip.tag}</div></div>
                <div class="detail-item"><div class="detail-label">Tipo</div><div class="detail-value">${equip.tipo}</div></div>
                <div class="detail-item"><div class="detail-label">Fabricante</div><div class="detail-value">${equip.fabricante}</div></div>
                <div class="detail-item"><div class="detail-label">Modelo</div><div class="detail-value">${equip.modelo}</div></div>
                <div class="detail-item"><div class="detail-label">Compressor</div><div class="detail-value">${equip.compressor}</div></div>
                <div class="detail-item"><div class="detail-label">Condensador</div><div class="detail-value">${equip.condensador}</div></div>
                <div class="detail-item"><div class="detail-label">Refrigerante</div><div class="detail-value">${equip.refrigerante}</div></div>
                <div class="detail-item"><div class="detail-label">TR</div><div class="detail-value">${equip.tr || 'N/A'}</div></div>
                <div class="detail-item"><div class="detail-label">kW</div><div class="detail-value">${equip.kw}</div></div>
                <div class="detail-item"><div class="detail-label">Local</div><div class="detail-value">${equip.local}</div></div>
            </div>
        `;
        modal.classList.add('active');
    },

    expandServico(id) {
        const serv = this.servicos.find(s => s.id === id);
        if (!serv) return;

        const modal = document.getElementById('modalServico');
        const body = document.getElementById('modalServicoBody');
        body.innerHTML = `
            <div class="detail-grid">
                <div class="detail-item" style="grid-column: 1/-1;"><div class="detail-label">Nome</div><div class="detail-value">${serv.nome}</div></div>
                <div class="detail-item" style="grid-column: 1/-1;"><div class="detail-label">Descrição</div><div class="detail-value">${serv.desc}</div></div>
                <div class="detail-item"><div class="detail-label">Categoria</div><div class="detail-value">${serv.categoria}</div></div>
                <div class="detail-item"><div class="detail-label">Periodicidade</div><div class="detail-value">${serv.periodicidade}</div></div>
                <div class="detail-item"><div class="detail-label">Custo</div><div class="detail-value">R$ ${serv.custo}</div></div>
            </div>
        `;
        modal.classList.add('active');
    },

    deleteRDO(id) {
        this.showConfirm('Tem certeza?', () => {
            this.rdos = this.rdos.filter(r => r.id !== id);
            this.renderRDOs();
            this.updateDashboard();
            this.showToast('RDO deletada!');
        });
    },

    deleteEquip(tag) {
        this.showConfirm('Tem certeza? RDOs vinculadas serão removidas.', () => {
            this.equipamentos = this.equipamentos.filter(e => e.tag !== tag);
            this.rdos = this.rdos.filter(r => r.equipamento !== tag);
            this.renderEquipamentos();
            this.renderRDOs();
            this.updateDashboard();
            this.showToast('Equipamento deletado!');
        });
    },

    deleteServico(id) {
        this.showConfirm('Tem certeza?', () => {
            this.servicos = this.servicos.filter(s => s.id !== id);
            this.renderServicos();
            this.showToast('Serviço deletado!');
        });
    },

    deleteColab(id) {
        this.showConfirm('Tem certeza?', () => {
            this.colaboradores = this.colaboradores.filter(c => c.id !== id);
            this.renderColaboradores();
            this.showToast('Colaborador deletado!');
        });
    },

    handleRDOSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const dados = new FormData(form);
        
        const novaRDO = {
            id: 'RDO' + (this.rdos.length + 1).toString().padStart(7, '0'),
            dataAbertura: new Date().toISOString().split('T')[0],
            cliente: dados.get('cliente'),
            unidade: dados.get('unidade'),
            equipamento: dados.get('equipamento'),
            tipoAtividade: dados.get('tipoAtividade'),
            servico: dados.get('servico'),
            colaborador: dados.get('colaborador'),
            status: dados.get('status'),
            horas: parseFloat(dados.get('horas')),
            custo: parseFloat(dados.get('custo')),
            observacoes: dados.get('observacoes')
        };

        this.rdos.push(novaRDO);
        this.renderRDOs();
        this.updateDashboard();
        form.reset();
        this.showToast('RDO criada com sucesso!');
    },

    handleColabSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const dados = new FormData(form);
        
        const novoColab = {
            id: 'COL' + (this.colaboradores.length + 1).toString().padStart(3, '0'),
            nome: dados.get('nome'),
            cargo: dados.get('cargo'),
            email: dados.get('email'),
            telefone: dados.get('telefone'),
            especialidade: dados.get('especialidade'),
            status: dados.get('status')
        };

        this.colaboradores.push(novoColab);
        this.renderColaboradores();
        form.reset();
        this.showToast('Colaborador adicionado!');
    },

    updateDashboard() {
        document.getElementById('kpi-equipamentos').textContent = this.equipamentos.length;
        document.getElementById('kpi-rdos').textContent = this.rdos.length;
        document.getElementById('kpi-horas').textContent = this.rdos.reduce((sum, r) => sum + r.horas, 0).toFixed(1) + 'h';
        document.getElementById('kpi-custo').textContent = 'R$ ' + this.rdos.reduce((sum, r) => sum + r.custo, 0).toFixed(2);

        document.getElementById('stat-equip').textContent = this.equipamentos.length;
        document.getElementById('stat-colab').textContent = this.colaboradores.length;
        document.getElementById('stat-serv').textContent = this.servicos.length;
        document.getElementById('stat-rdos').textContent = this.rdos.length;

        this.drawCharts();
    },

    drawCharts() {
        const ctx1 = document.getElementById('chartStatus');
        const ctx2 = document.getElementById('chartRDO');

        if (ctx1) {
            ctx1.width = ctx1.offsetWidth;
            ctx1.height = 300;
            const c1 = ctx1.getContext('2d');
            this.drawDonut(c1, [28, 5, 2], ['#00AA44', '#FF9900', '#CC0000'], ['Em Dia: 28', 'Atenção: 5', 'Crítico: 2']);
        }

        if (ctx2) {
            ctx2.width = ctx2.offsetWidth;
            ctx2.height = 300;
            const c2 = ctx2.getContext('2d');
            const conclud = this.rdos.filter(r => r.status === 'Concluído').length;
            const exec = this.rdos.filter(r => r.status === 'Em Execução').length;
            const prog = this.rdos.filter(r => r.status === 'Programado').length;
            this.drawBar(c2, [conclud, exec, prog], ['#00AA44', '#3399FF', '#FF9900'], ['Concluído', 'Em Exec', 'Programado']);
        }
    },

    drawDonut(ctx, data, colors, labels) {
        const total = data.reduce((a, b) => a + b, 0);
        const centerX = ctx.canvas.width / 2;
        const centerY = ctx.canvas.height / 2;
        const radius = 80;
        const innerRadius = 50;

        let currentAngle = -Math.PI / 2;

        data.forEach((value, i) => {
            const sliceAngle = (value / total) * 2 * Math.PI;
            
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
            ctx.lineTo(centerX + Math.cos(currentAngle + sliceAngle / 2) * innerRadius, centerY + Math.sin(currentAngle + sliceAngle / 2) * innerRadius);
            ctx.arc(centerX, centerY, innerRadius, currentAngle + sliceAngle, currentAngle, true);
            ctx.closePath();
            ctx.fillStyle = colors[i];
            ctx.fill();

            const textAngle = currentAngle + sliceAngle / 2;
            const textX = centerX + Math.cos(textAngle) * (radius + innerRadius) / 2;
            const textY = centerY + Math.sin(textAngle) * (radius + innerRadius) / 2;
            ctx.fillStyle = '#FFF';
            ctx.font = 'bold 14px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(value, textX, textY);

            currentAngle += sliceAngle;
        });

        let y = 20;
        ctx.font = '12px Arial';
        labels.forEach((label, i) => {
            ctx.fillStyle = colors[i];
            ctx.fillRect(10, y, 12, 12);
            ctx.fillStyle = '#333';
            ctx.textAlign = 'left';
            ctx.fillText(label, 25, y + 6);
            y += 20;
        });
    },

    drawBar(ctx, data, colors, labels) {
        const padding = 50;
        const chartWidth = ctx.canvas.width - padding * 2;
        const chartHeight = ctx.canvas.height - padding * 2;
        const barWidth = chartWidth / (data.length * 1.5);

        const max = Math.max(...data, 1);

        data.forEach((value, i) => {
            const x = padding + i * (barWidth * 1.5) + barWidth * 0.25;
            const height = (value / max) * chartHeight;
            const y = ctx.canvas.height - padding - height;

            ctx.fillStyle = colors[i];
            ctx.fillRect(x, y, barWidth, height);

            ctx.fillStyle = '#FFF';
            ctx.font = 'bold 14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(value, x + barWidth / 2, y + height / 2);

            ctx.fillStyle = '#333';
            ctx.font = '11px Arial';
            ctx.fillText(labels[i], x + barWidth / 2, ctx.canvas.height - padding + 15);
        });
    },

    exportCSV() {
        let csv = 'ID,Data,Equipamento,Serviço,Colaborador,Status,Horas,Custo\n';
        this.rdos.forEach(rdo => {
            csv += `${rdo.id},${rdo.dataAbertura},${rdo.equipamento},${rdo.servico},${rdo.colaborador},${rdo.status},${rdo.horas},${rdo.custo}\n`;
        });

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'RDOs.csv';
        a.click();
        this.showToast('CSV exportado!');
    },

    getStatusBadgeClass(status) {
        switch(status) {
            case 'Concluído': return 'badge-success';
            case 'Em Execução': return 'badge-info';
            case 'Programado': return 'badge-warning';
            default: return 'badge-info';
        }
    },

    showConfirm(msg, cb) {
        document.getElementById('confirmMessage').textContent = msg;
        document.getElementById('modalConfirm').classList.add('active');
        document.getElementById('confirmYes').onclick = () => {
            cb();
            document.getElementById('modalConfirm').classList.remove('active');
        };
        document.getElementById('confirmNo').onclick = () => {
            document.getElementById('modalConfirm').classList.remove('active');
        };
    },

    showToast(msg) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = msg;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());