export class Parcours {
    id: number;
    city: string;
    startDate: string;
    endDate: string;
    iteration: string;


    constructor(id: number, city: string, startDate: string, endDate: string, iteration: string) {
        this.id = id;
        this.city = city;
        this.startDate = startDate;
        this.endDate = endDate;
        this.iteration = iteration;
    }

    public toString(): string {
        return ('Ville : ' + this.city + ', Date de début : ' + this.startDate +
            ', Date de fin : ' + this.endDate + ' & nombre : ' + this.iteration);
    }
}
