'use-strict';

function Tabella (colonne, dati) {
    this.colonne = colonne;
    this.dati = dati;
    this.tabella = document.createElement('table');

    this.creaTabella = () => {
        const body = document.querySelector('body');
        body.appendChild(this.tabella);
    };

    this.creaColonne = () => {
        const thead = document.createElement('thead');
        this.colonne.forEach(colonna => {
            const th = document.createElement('th');
            th.textContent = colonna;
            thead.appendChild(th);    
        });
        this.tabella.appendChild(thead);
    };

    this.creaRighe = () => {
        const tbody = document.createElement('tbody');
        this.dati.forEach(dato => {
            const tr = document.createElement('tr');
            Object.keys(dato).forEach(key => {
                const td = document.createElement('td');
                td.textContent = dato[key];
                tr.appendChild(td);
            })
        tbody.appendChild(tr);
        });
        this.tabella.appendChild(tbody);
    };
};

/** TABELLA 1 */
const dati1 = [
    {
        nome: 'Mario',
        cognome: 'Rossi',
        eta: 25,
        data_di_nascita: '25/02/1995',
        luogo_di_nascita: 'Roma',
        codice_fiscale: 'MRORSS95H25M'   
    },
    {
        nome: 'Luigi',
        cognome: 'Verdi',
        eta: 30,
        data_di_nascita: '01/01/1990',
        luogo_di_nascita: 'Milano',
        codice_fiscale: 'LGLVRD00H30M'  
    }
];
const colonne1 = Object.keys(dati1[0]); // Genero automaticamente i nomi delle colonne da dati1, ovviamente i nomi sono uguali alle key.

const tabella1 = new Tabella(colonne1, dati1);
tabella1.creaTabella();
tabella1.creaColonne();
tabella1.creaRighe();

/** TABELLA 2 */
const colonne2 = [ 'ID', 'Prodotto', 'Marca', 'Quantità', 'Prezzo' ];
const dati2 = [
    {
        id: 1,
        prodotto: 'Galaxy S20',
        marca: 'Samsung',
        quantità: 4,
        prezzo: 800
    },
    {
        id: 2,
        prodotto: 'iPhone 15',
        marca: 'Apple',
        quantità: 6,
        prezzo: 950
    }

];

const tabella2 = new Tabella(colonne2, dati2);
tabella2.creaTabella();
tabella2.creaColonne();
tabella2.creaRighe();