export class Monument {
    private ouvertMonument: number;
    private nomMonument: string;
    private lieuMonument: string;
    private debutMonument: string;
    private finMonument: string;
    private coutMonument: string;
    private dependanceMonument: string = null;

    constructor(
        ouvertMonument: number,
        nomMonument: string,
        lieuMonument: string,
        debutMonument: string,
        finMonument: string,
        coutMonument: string,
        dependanceMonument?: string
    ) {
        this.ouvertMonument = ouvertMonument;
        this.nomMonument = nomMonument;
        this.lieuMonument = lieuMonument;
        this.debutMonument = debutMonument;
        this.finMonument = finMonument;
        this.coutMonument = coutMonument;
        if (dependanceMonument) {
            this.dependanceMonument = dependanceMonument;
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
        return this.getDependanceMonument() !== null;
    }

    public isOpen() {
        return this.getOuvertMonument() !== 0;
    }
}
