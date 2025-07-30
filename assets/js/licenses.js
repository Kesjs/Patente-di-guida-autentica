// Données des permis
const licenses = [
    // ===== MOTO E CICLOMOTORI =====
    {
        id: 'am',
        title: 'Patente AM',
        subtitle: 'Ciclomotori e quad',
        category: 'moto',
        icon: 'fa-motorcycle',
        popular: true,
        price: 499,
        oldPrice: 699,
        image: 'https://images.lanouvellerepublique.fr/image/upload/f_auto,c_limit,w_2048,q_auto/5ce919da7a20f7777f8b45fb.jpg',
        description: 'La patente AM è necessaria per guidare ciclomotori a due o tre ruote e quadricicli leggeri.',
        details: {
            'Età minima': '14 anni',
            'Validità': '10 anni',
            'Velocità max': '45 km/h',
            'Cilindrata': '50cc (4 tempi) o 50cc (2 tempi)',
            'Potenza': '4 kW massimi'
        },
        requirements: [
            'Documento di identità valido',
            'Codice fiscale',
            'Certificato medico',
            '2 foto tessera'
        ]
    },
    {
        id: 'a1',
        title: 'Patente A1',
        subtitle: 'Moto leggere',
        category: 'moto',
        icon: 'fa-motorcycle',
        price: 699,
        oldPrice: 899,
        image: 'https://www.autoscuolamarchetti.info/wp-content/uploads/2022/10/patente-B-autoscuola-marchetti.jpg',
        description: 'Per moto di cilindrata massima di 125 cm³ e potenza massima di 11 kW.',
        details: {
            'Età minima': '16 anni',
            'Validità': '10 anni',
            'Cilindrata': '125cc massimi',
            'Potenza': '11 kW massimi',
            'Rapporto potenza/peso': '0,1 kW/kg massimo'
        }
    },
    {
        id: 'a2',
        title: 'Patente A2',
        subtitle: 'Moto medie',
        category: 'moto',
        icon: 'fa-motorcycle',
        price: 899,
        oldPrice: 1099,
        image: 'https://tse2.mm.bing.net/th/id/OIP.xrSha2cAgCxnzsihavdCWQHaEc?r=0&w=1000&h=600&rs=1&pid=ImgDetMain&o=7&rm=3',
        description: 'Per moto con potenza massima di 35 kW e rapporto potenza/peso non superiore a 0,2 kW/kg.',
        details: {
            'Età minima': '18 anni',
            'Validità': '10 anni',
            'Potenza massima': '35 kW',
            'Rapporto potenza/peso': '0,2 kW/kg massimo',
            'Accesso alla A': 'Dopo 2 anni senza incidenti'
        }
    },
    {
        id: 'a',
        title: 'Patente A',
        subtitle: 'Moto senza limiti',
        category: 'moto',
        icon: 'fa-motorcycle',
        price: 1199,
        oldPrice: 1499,
        image: 'https://kraemer-fahrschule.de/wp-content/uploads/2019/07/Fahrschule-Odenwald.jpg',
        description: 'Per la guida di motocicli di qualsiasi potenza e cilindrata, senza limitazioni.',
        details: {
            'Età minima': '24 anni (o 20 con A2 da 2 anni)',
            'Validità': '10 anni',
            'Accesso diretto': 'Dai 24 anni',
            'Accesso progressivo': 'Dai 20 anni con A2',
            'Esame pratico': 'Prove su strada e pista'
        }
    },
    
    // ===== AUTOVETTURE E VEICOLI LEGGERI =====
    {
        id: 'b1',
        title: 'Patente B1',
        subtitle: 'Quadricicli pesanti',
        category: 'auto',
        icon: 'fa-car-side',
        price: 849,
        oldPrice: 999,
        image: 'https://www.autoscuolaviolaciampino.it/wp-content/uploads/2023/02/PATENTE-B1-MOB-2.jpg',
        description: 'Per la guida di quadricicli pesanti con massa a vuoto fino a 400 kg (550 kg per uso merci).',
        details: {
            'Età minima': '16 anni',
            'Validità': '10 anni',
            'Peso a vuoto': 'Fino a 400 kg',
            'Velocità max': 'Oltre 45 km/h',
            'Motore': 'Elettrico o termico'
        }
    },
    {
        id: 'b',
        title: 'Patente B',
        subtitle: 'Autovetture',
        category: 'auto',
        icon: 'fa-car',
        popular: true,
        price: 999,
        oldPrice: 1299,
        image: 'https://www.pleinair.it/wp-content/uploads/2025/04/20250401_Patente_B_B-MC_T_680.jpg',
        description: 'Per la guida di autovetture e autocarri fino a 3,5 tonnellate.',
        details: {
            'Età minima': '18 anni',
            'Validità': '10 anni',
            'Peso massimo': '3,5 tonnellate',
            'Posti a sedere': 'Massimo 8 + conducente',
            'Rimorchio': 'Fino a 750 kg'
        }
    },
    {
        id: 'be',
        title: 'Patente BE',
        subtitle: 'Rimorchi pesanti',
        category: 'auto',
        icon: 'fa-trailer',
        price: 1299,
        oldPrice: 1599,
        image: 'https://www.autogiove.it/images/patente-BE-rimorchio.jpg',
        description: 'Per il traino di rimorchi pesanti con autovetture (combinazione oltre 3,5 t e fino a 4,25 t).',
        details: {
            'Età minima': '18 anni',
            'Validità': '10 anni',
            'Massa complessiva': 'Fino a 4,25 t',
            'Richiede': 'Patente B',
            'Esame': 'Prova pratica con rimorchio'
        }
    },
    
    // ===== VEICOLI PESANTI =====
    {
        id: 'c1',
        title: 'Patente C1',
        subtitle: 'Veicoli medi',
        category: 'pesanti',
        icon: 'fa-truck-pickup',
        price: 1399,
        oldPrice: 1699,
        image: 'https://tse3.mm.bing.net/th/id/OIP.JtWaqc7n8DXl9LfsXQ2vvwHaFj?r=0&pid=ImgDet&w=189&h=141&c=7&dpr=1.4&o=7&rm=3',
        description: 'Per la guida di autocarri di massa compresa tra 3,5 e 7,5 tonnellate.',
        details: {
            'Età minima': '18 anni',
            'Validità': '5 anni',
            'Peso': '3,5 - 7,5 t',
            'Richiede': 'Patente B',
            'Esame': 'Teorico e pratico'
        }
    },
    {
        id: 'c1e',
        title: 'Patente C1E',
        subtitle: 'Rimorchi medi',
        category: 'pesanti',
        icon: 'fa-truck-ramp-box',
        price: 1599,
        oldPrice: 1899,
        image: 'https://tse3.mm.bing.net/th/id/OIP.JtWaqc7n8DXl9LfsXQ2vvwHaFj?r=0&pid=ImgDet&w=189&h=141&c=7&dpr=1.4&o=7&rm=3',
        description: 'Per il traino di rimorchi pesanti con veicoli della categoria C1.',
        details: {
            'Età minima': '18 anni',
            'Validità': '5 anni',
            'Richiede': 'Patente C1',
            'Massa complessiva': 'Fino a 12 t',
            'Esame': 'Prova pratica con rimorchio'
        }
    },
    {
        id: 'c',
        title: 'Patente C',
        subtitle: 'Autocarri',
        category: 'pesanti',
        icon: 'fa-truck',
        price: 1799,
        oldPrice: 2099,
        image: 'https://www.motorimagazine.it/wp-content/uploads/2015/07/la-patente-C.jpg',
        description: 'Per la guida di autocarri di massa superiore a 3,5 tonnellate.',
        details: {
            'Età minima': '21 anni',
            'Validità': '5 anni',
            'Peso': 'Oltre 3,5 t',
            'CQC': 'Richiesto per uso professionale',
            'Revisione medica': 'Ogni 5 anni'
        }
    },
    {
        id: 'ce',
        title: 'Patente CE',
        subtitle: 'Autoarticolati',
        category: 'pesanti',
        icon: 'fa-truck-moving',
        price: 1999,
        oldPrice: 2399,
        image: 'https://www.motorimagazine.it/wp-content/uploads/2015/07/la-patente-C.jpg',
        description: 'Per la guida di complessi veicolari per trasporto merci con massa superiore a 3,5 t.',
        details: {
            'Età minima': '21 anni',
            'Validità': '5 anni',
            'Richiede': 'Patente C',
            'CQC merci': 'Obbligatorio',
            'Formazione': '140 ore per neopatentati'
        }
    },
    
    // ===== TRASPORTO PASSEGGERI =====
    {
        id: 'd1',
        title: 'Patente D1',
        subtitle: 'Minibus',
        category: 'passeggeri',
        icon: 'fa-shuttle-van',
        price: 1899,
        oldPrice: 2199,
        image: 'https://www.autoscuolaviolaciampino.it/wp-content/uploads/2023/02/PATENTE-D1-MOB-1.jpg',
        description: 'Per la guida di minibus con non più di 16 posti oltre al conducente.',
        details: {
            'Età minima': '21 anni',
            'Validità': '5 anni',
            'Posti': 'Fino a 16 + conducente',
            'Lunghezza': 'Fino a 8 metri',
            'Richiede': 'Patente B da 2 anni'
        }
    },
    {
        id: 'd1e',
        title: 'Patente D1E',
        subtitle: 'Minibus con rimorchio',
        category: 'passeggeri',
        icon: 'fa-bus-alt',
        price: 2099,
        oldPrice: 2499,
        image: 'https://www.autoscuolaviolaciampino.it/wp-content/uploads/2023/02/PATENTE-D1E-MOB-1.jpg',
        description: 'Per il traino di rimorchi con minibus della categoria D1.',
        details: {
            'Età minima': '21 anni',
            'Validità': '5 anni',
            'Richiede': 'Patente D1',
            'Massa rimorchio': 'Oltre 750 kg',
            'Formazione': 'Corsi specifici obbligatori'
        }
    },
    {
        id: 'd',
        title: 'Patente D',
        subtitle: 'Autobus',
        category: 'passeggeri',
        icon: 'fa-bus',
        price: 2299,
        oldPrice: 2699,
        image: 'https://www.autoscuolaviolaciampino.it/wp-content/uploads/2023/02/PATENTE-D-MOB-1.jpg',
        description: 'Per la guida di autobus con più di 8 posti.',
        details: {
            'Età minima': '24 anni',
            'Validità': '5 anni',
            'Posti': 'Oltre 8 passeggeri',
            'CQC passeggeri': 'Richiesto',
            'Formazione': 'Oltre 21 anni e patente B da 2 anni'
        }
    },
    {
        id: 'de',
        title: 'Patente DE',
        subtitle: 'Autobus con rimorchio',
        category: 'passeggeri',
        icon: 'fa-bus-alt',
        price: 2499,
        oldPrice: 2999,
        image: 'https://www.autoscuolaviolaciampino.it/wp-content/uploads/2023/02/PATENTE-DE-MOB-1.jpg',
        description: 'Per il traino di rimorchi con autobus della categoria D.',
        details: {
            'Età minima': '24 anni',
            'Validità': '5 anni',
            'Richiede': 'Patente D',
            'Massa rimorchio': 'Oltre 750 kg',
            'Formazione': 'Corsi specifici e CQC'
        }
    },
    
    // ===== SPECIALI E ABILITAZIONI =====
    {
        id: 'cqc-merci',
        title: 'CQC Merci',
        subtitle: 'Certificato Qualificazione Conducenti',
        category: 'speciali',
        icon: 'fa-file-certificate',
        price: 799,
        oldPrice: 999,
        image: 'https://www.autoscuolaaldogottardello.it/wp-content/uploads/2023/06/patenteCQCmerci_banner-18.jpg',
        description: 'Obbligatorio per i conducenti professionali di veicoli merci con patente C/CE.',
        details: {
            'Requisiti': 'Patente C o CE',
            'Validità': '5 anni',
            'Formazione': '35 ore obbligatorie',
            'Rinnovo': '35 ore ogni 5 anni',
            'Esame': 'Test a risposta multipla'
        }
    },
    {
        id: 'cqc-passeggeri',
        title: 'CQC Passeggeri',
        subtitle: 'Certificato per Trasporto Persone',
        category: 'speciali',
        icon: 'fa-users',
        price: 899,
        oldPrice: 1099,
        image: 'https://th.bing.com/th/id/R.70f2210ee422e5af3d41c0410c79c4eb?rik=iejhd8zsgmmEIg&pid=ImgRaw&r=0',
        description: 'Obbligatorio per i conducenti professionali di autobus con patente D/DE.',
        details: {
            'Requisiti': 'Patente D o DE',
            'Validità': '5 anni',
            'Formazione': '35 ore obbligatorie',
            'Rinnovo': '35 ore ogni 5 anni',
            'Esame': 'Test a risposta multipla'
        }
    },
    {
        id: 'nautica',
        title: 'Patente Nautica',
        subtitle: 'Nautica da diporto',
        category: 'speciali',
        icon: 'fa-ship',
        price: 1299,
        oldPrice: 1599,
        image: 'https://cdn.motor1.com/images/mgl/01jkm/s1/patente-giusta.jpg',
        description: 'Per la conduzione di imbarcazioni da diporto entro e oltre le 12 miglia dalla costa.',
        details: {
            'Età minima': '18 anni',
            'Validità': '10 anni',
            'Categorie': 'Entro 12 miglia e senza limiti',
            'Esame': 'Teorico e pratico',
            'Riconoscimento': 'Valida in tutta UE'
        }
    },
    {
        id: 'patentino',
        title: 'Patentino',
        subtitle: 'Ciclomotori 50cc',
        category: 'speciali',
        icon: 'fa-id-card',
        price: 299,
        oldPrice: 399,
        image: 'https://cdn.motor1.com/images/mgl/01jkm/s1/patente-giusta.jpg',
        description: 'Per la guida di ciclomotori fino a 50cc per minori di 18 anni.',
        details: {
            'Età minima': '14 anni',
            'Validità': '10 anni',
            'Velocità max': '45 km/h',
            'Cilindrata': 'Fino a 50cc',
            'Esame': 'Teorico obbligatorio'
        }
    },
    {
        id: 'carta-qualita',
        title: 'Carta di Qualità',
        subtitle: 'Documento professionale',
        category: 'speciali',
        icon: 'fa-award',
        price: 199,
        oldPrice: 299,
        image: 'https://cdn.motor1.com/images/mgl/01jkm/s1/patente-giusta.jpg',
        description: 'Documento che attesta la qualificazione professionale del conducente.',
        details: {
            'Requisiti': 'Patente C/D + CQC',
            'Validità': '5 anni',
            'Riconoscimento': 'Nazionale',
            'Aggiornamenti': 'Formazione continua',
            'Vantaggi': 'Maggiori opportunità lavorative'
        }
    },
    {
        id: 'estensione-cqc',
        title: 'Estensione CQC',
        subtitle: 'Ampliamento qualifiche',
        category: 'speciali',
        icon: 'fa-expand-alt',
        price: 599,
        oldPrice: 799,
        image: 'https://cdn.motor1.com/images/mgl/01jkm/s1/patente-giusta.jpg',
        description: 'Per estendere la qualifica CQC da merci a passeggeri o viceversa.',
        details: {
            'Requisiti': 'CQC merci o passeggeri',
            'Validità': '5 anni',
            'Formazione': '35 ore specifiche',
            'Esame': 'Teorico',
            'Vantaggi': 'Doppia qualifica'
        }
    }
];

// Variables globales
let currentPage = 1;
const itemsPerPage = 6;
let filteredLicenses = [...licenses];
let activeCategory = 'all';

// Fonction pour créer une carte de permis
function createLicenseCard(license) {
    const discountBadge = license.popular ? 
        `<span class="inline-block bg-yellow-400 text-blue-900 text-xs font-semibold px-3 py-1 rounded-full mb-2">POPOLARE</span>` : '';
    
    const priceHtml = license.oldPrice ? 
        `<span class="text-2xl font-bold text-gray-900">Da €${license.price}</span>
         <span class="text-sm text-gray-500 line-through ml-2">€${license.oldPrice}</span>` :
        `<span class="text-2xl font-bold text-gray-900">Da €${license.price}</span>`;
    
    // Créer la liste des détails
    const detailsList = Object.entries(license.details)
        .slice(0, 3) // Afficher seulement les 3 premiers détails
        .map(([key, value]) => `
            <li class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 text-blue-600">
                        <i class="fas fa-check text-xs"></i>
                    </div>
                </div>
                <span class="ml-3 text-gray-600">${key}: <strong>${value}</strong></span>
            </li>
        `).join('');

    return `
        <div class="license-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1" data-category="${license.category}" data-title="${license.title.toLowerCase()}">
            <div class="relative h-52 overflow-hidden group">
                <img src="${license.image}" alt="${license.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-6 w-full">
                    ${discountBadge}
                    <h3 class="text-2xl font-bold text-white">${license.title}</h3>
                    <p class="text-blue-100 text-sm">${license.subtitle}</p>
                </div>
                <div class="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 group-hover:bg-blue-600 transition-colors duration-300">
                    <i class="fas ${license.icon} text-white text-xl"></i>
                </div>
            </div>
            <div class="p-6">
                <p class="text-gray-600 mb-4">${license.description}</p>
                <ul class="space-y-2.5 mb-6">
                    ${detailsList}
                </ul>
                <div class="flex items-center justify-between">
                    <div>
                        ${priceHtml}
                    </div>
                    <button class="view-details inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2.5 px-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg" data-license-id="${license.id}">
                        Dettagli
                        <i class="fas fa-arrow-right ml-2 text-sm"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Fonction pour afficher les cartes
function displayLicenses(page = 1) {
    const container = document.getElementById('licenses-container');
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const licensesToShow = filteredLicenses.slice(0, end);
    
    container.innerHTML = licensesToShow.map(createLicenseCard).join('');
    
    // Afficher/masquer le bouton "Carica altre"
    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = end >= filteredLicenses.length ? 'none' : 'inline-flex';
    }
    
    // Ajouter les écouteurs d'événements aux boutons de détails
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const licenseId = button.getAttribute('data-license-id');
            showLicenseDetails(licenseId);
        });
    });
}

// Fonction pour afficher les détails d'un permis dans une modale
function showLicenseDetails(licenseId) {
    const license = licenses.find(l => l.id === licenseId);
    if (!license) return;
    
    const modal = document.getElementById('license-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    
    // Créer le contenu de la modale
    const detailsList = Object.entries(license.details)
        .map(([key, value]) => `
            <div class="py-2 border-b border-gray-100">
                <div class="flex justify-between">
                    <span class="font-medium text-gray-700">${key}:</span>
                    <span class="text-gray-900">${value}</span>
                </div>
            </div>
        `).join('');
    
    const requirementsList = license.requirements ? 
        license.requirements.map(req => `<li class="flex items-center py-1">
            <i class="fas fa-check-circle text-green-500 mr-2"></i>
            <span>${req}</span>
        </li>`).join('') : '';
    
    modalTitle.textContent = `${license.title} - ${license.subtitle}`;
    modalContent.innerHTML = `
        <div class="grid md:grid-cols-2 gap-6">
            <div>
                <img src="${license.image}" alt="${license.title}" class="w-full h-48 object-cover rounded-lg mb-4">
                <p class="text-gray-700 mb-4">${license.description}</p>
                <div class="bg-blue-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-blue-800 mb-2">Perché scegliere questa patente?</h4>
                    <p class="text-sm text-blue-700">La ${license.title} ti permette di guidare ${license.subtitle.toLowerCase()} in tutta Italia e nell'Unione Europea, con un documento ufficiale e riconosciuto.</p>
                </div>
            </div>
            <div>
                <h4 class="font-semibold text-gray-800 mb-3">Dettagli del permesso</h4>
                <div class="bg-gray-50 rounded-lg p-4 mb-4">
                    ${detailsList}
                </div>
                ${requirementsList ? `
                <h4 class="font-semibold text-gray-800 mb-3">Documenti richiesti</h4>
                <ul class="bg-gray-50 rounded-lg p-4 mb-4">
                    ${requirementsList}
                </ul>` : ''}
                <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <i class="fas fa-info-circle text-yellow-400 text-xl"></i>
                        </div>
                        <div class="ml-3">
                            <p class="text-sm text-yellow-700">
                                <strong>Importante:</strong> Tutti i prezzi includono l'iscrizione, la pratica e la consegna a domicilio. Nessun costo aggiuntivo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Afficher la modale
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Fonction pour filtrer les cartes
function filterLicenses(searchTerm = '', category = 'all') {
    activeCategory = category;
    
    filteredLicenses = licenses.filter(license => {
        const matchesSearch = license.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            license.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            license.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesCategory = category === 'all' || license.category === category;
        
        return matchesSearch && matchesCategory;
    });
    
    currentPage = 1;
    displayLicenses(currentPage);
}

// Initialisation
function init() {
    // Afficher les premières cartes
    displayLicenses(currentPage);
    
    // Gérer le clic sur le bouton "Carica altre"
    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            currentPage++;
            displayLicenses(currentPage);
        });
    }
    
    // Gérer la recherche
    const searchInput = document.getElementById('search-license');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            filterLicenses(e.target.value, activeCategory);
        });
    }
    
    // Gérer le filtre par catégorie
    const categoryFilter = document.getElementById('filter-category');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', (e) => {
            filterLicenses('', e.target.value);
        });
    }
    
    // Gérer les onglets de catégorie
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', () => {
            // Mettre à jour les onglets actifs
            document.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('bg-blue-600', 'text-white');
                btn.classList.add('bg-white', 'text-gray-700', 'hover:bg-gray-100');
            });
            
            button.classList.remove('bg-white', 'text-gray-700', 'hover:bg-gray-100');
            button.classList.add('bg-blue-600', 'text-white');
            
            // Filtrer les cartes
            const category = button.getAttribute('data-category');
            filterLicenses('', category);
            
            // Mettre à jour le sélecteur de catégorie
            if (categoryFilter) {
                categoryFilter.value = category;
            }
        });
    });
    
    // Gérer la fermeture de la modale
    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', () => {
            document.getElementById('license-modal').classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Fermer la modale en cliquant en dehors
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('license-modal');
        if (e.target === modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
}

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', init);
