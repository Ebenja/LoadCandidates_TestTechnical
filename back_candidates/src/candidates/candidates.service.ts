import { Injectable } from '@nestjs/common';
import { Candidate } from './candidate.entity';
import * as XLSX from 'xlsx';

@Injectable()
export class CandidatesService {

    private candidates: Candidate[] = [];

    create(candidate: Candidate) {
        this.candidates.push(candidate);
    }


    createWithExcel(candidate: Candidate, file: Express.Multer.File) {
        const workbook = XLSX.read(file.buffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0]
        const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);


        console.log('Data', sheet);

        this.candidates.push(candidate);
    }

    findAll(): Candidate[] {
        return this.candidates;
    }
}
