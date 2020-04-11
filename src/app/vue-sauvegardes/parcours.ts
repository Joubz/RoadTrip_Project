export class Parcours {
    city: string;
    startDate: string;
    endDate: string;
    iteration: string;


    constructor(city: string, startDate: string, endDate: string, iteration: string) {
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
