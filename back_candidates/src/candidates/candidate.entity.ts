export class Candidate {
    id: number;
    name: string;
    surname: string;
    seniority: string;
    years: number;
    availability: boolean;
    file:Express.Multer.File;
}