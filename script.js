// Mappa delle traduzioni tecniche per l'origine
const traduzioniTecniche = {
    'it': 'PRODOTTO IN ITALIA',
    'en': 'PRODUCT OF ITALY',
    'fr': 'PRODUIT D\'ITALIE',
    'es': 'PRODUCTO DE ITALIA',
    'de': 'ERZEUGNIS AUS ITALIEN',
    'nl': 'PRODUCT UIT ITALIË',
    'sv': 'PRODUKT FRÅN ITALIEN',
    'pt': 'PRODUTO DA ITÁLIA',
    'pl': 'PRODUKT WŁOCH',
    'ro': 'PRODUS DIN ITALIA',
    'hu': 'OLASZORSZÁGI TERMÉK',
    'el': 'ΠΡΟΪΟΝ ΙΤΑΛΙΑΣ',
    'da': 'PRODUKT AF ITALIEN',
    'fi': 'ITALIAN TUOTE',
    'cs': 'PRODUKT ITÁLIE',
    'sk': 'PRODUKT TALIANSKA',
    'sl': 'PROIZVOD ITALIJE',
    'hr': 'PROIZVOD ITALIJE',
    'bg': 'ПΡΟΔΥΚΤ ΟΤ ΙΤΑΛΙЯ',
    'ee': 'ITAALIA TOODE',
    'lv': 'ITĀLIJAS PRODUKTS',
    'lt': 'ITALIJOS PRODUKTAS',
    'mt': 'PRODOTT TAL-ITALJA',
    'ga': 'TÁRGE NA hIODÁILE'
};

// Mappa delle bandiere
const languageFlags = {
    'it': 'flags/it.png',
    'en': 'flags/en.png',
    'fr': 'flags/fr.png',
    'es': 'flags/es.png',
    'de': 'flags/de.png',
    'nl': 'flags/nl.png',
    'sv': 'flags/se.png',
    'pt': 'flags/pt.png',
    'pl': 'flags/pl.png',
    'da': 'flags/da.png',
    'fi': 'flags/fi.png',
    'el': 'flags/el.png',
    'hu': 'flags/hu.png',
    'ro': 'flags/ro.png',
    'sl': 'flags/sl.png',
    'bg': 'flags/bg.png',
    'lv': 'flags/lv.png',
    'lt': 'flags/lt.png',
    'ee': 'flags/ee.png',
    'hr': 'flags/hr.png',
    'sk': 'flags/sk.png',
    'cs': 'flags/cs.png',
    'mt': 'flags/mt.png',
    'ga': 'flags/ga.png'
};

// Inizializza Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'it' }, 'google_translate_element');
}

// Funzione per aprire/chiudere il menu a tendina
function toggleLanguageDropdown() {
    const dropdown = document.getElementById('language-dropdown');
    if (dropdown) {
        dropdown.classList.toggle('hidden');
    }
}

// Cambia lingua, aggiorna interfaccia e CHIUDE il menu
function changeLanguage(lang) {
    const googleTranslateCombo = document.querySelector('.goog-te-combo');
    
    if (googleTranslateCombo) {
        // 1. Attiva la traduzione di Google
        googleTranslateCombo.value = lang;
        googleTranslateCombo.dispatchEvent(new Event('change'));
        
        // 2. AGGIORNA LA BANDIERA SUL PULSANTE PRINCIPALE
        // Cerchiamo l'immagine dentro il pulsante che si trova nel div .flags
        const flagButtonImg = document.querySelector('.flags button img');
        
        if (flagButtonImg && languageFlags[lang]) {
            // Cambia l'attributo src con il percorso salvato nella mappa languageFlags
            flagButtonImg.src = languageFlags[lang]; 
            // Opzionale: aggiorna anche l'alt per l'accessibilità
            flagButtonImg.alt = "Lingua: " + lang.toUpperCase();
        }

        // 3. Aggiorna la scritta tecnica "Prodotto in Italia"
        const labelProdotto = document.getElementById('label-prodotto');
        if (labelProdotto) {
            labelProdotto.innerText = traduzioniTecniche[lang] || traduzioniTecniche['it'];
        }
    }

    // 4. Chiude il menu delle bandierine
    const dropdown = document.getElementById('language-dropdown');
    if (dropdown) {
        dropdown.classList.add('hidden');
    }
}