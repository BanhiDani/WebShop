export default class Termek {
    #obj = {};
    #index = 0;
    constructor(obj = { kep, nev, leiras, ar }, index, szuloElem) {
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.#index = index;
        this.megjelenit();
        this.esemenykezelo();
    }

    megjelenit(){
        let kod = `
        <tr>
            <td><img src="${this.#obj.kep}" alt="${this.#obj.nev}"></td>
        </tr>
        `
    }
}