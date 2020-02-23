export class Monument {
    ouvertMonument: number;
    nomMonument: string;
    lieuMonument: string;
    debutMonument: string;
    finMonument: string;
    coutMonument: string;
    dependanceMonument: string = null;

    constructor(
        public _ouvertMonument: number,
        public _nomMonument: string,
        public _lieuMonument: string,
        public _debutMonument: string,
        public _finMonument: string,
        public _coutMonument: string,
        public _dependanceMonument?: string
    ) {
        this.ouvertMonument = _ouvertMonument;
        this.nomMonument = _nomMonument;
        this.lieuMonument = _lieuMonument;
        this.debutMonument = _debutMonument;
        this.finMonument = _finMonument;
        this.coutMonument = _coutMonument;
        if (_dependanceMonument) {
            this.dependanceMonument = _dependanceMonument;
        }
    }

    public getOuvertMonument() {
        return this.ouvertMonument;
    }

    public getNomMonument() {
        return this.nomMonument;
    }

    public getLieuMonument() {
        return this.lieuMonument;
    }

    public getDebutMonument() {
        return this.debutMonument;
    }

    public getFinMonument() {
        return this.finMonument;
    }

    public getCoutMonument() {
        return this.coutMonument;
    }

    public getDependanceMonument() {
        return this.dependanceMonument;
    }

    public isDependant() {
        return this.getDependanceMonument() != null;
    }

    public isOpen() {
        return this.getOuvertMonument() != 0;
    }
}
