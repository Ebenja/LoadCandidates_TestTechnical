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
        
        let data_excel = null;

        console.log(candidate)
        if (file) {
            const workbook = XLSX.read(file.buffer, { type: 'buffer' });
            const sheetName = workbook.SheetNames[0]
            const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
            console.log(sheet)

            // const firstRow = (sheet[0] as any[]).slice(0, 3);
            // if (Array.isArray(sheet[0])) {
            //     const firstRow = sheet[0].slice(0, 3);
            //   } 

            // data_excel = {
            //     columnSeniority: firstRow[0],  
            //     columnYears: firstRow[1], 
            //     columnAva: firstRow[2]
            //   };

            const firstRow = sheet[0];

            data_excel = {
                columnSeniority: firstRow['Seniority'] || '',  // Ajusta los nombres de acuerdo a las columnas reales
                columnYears: firstRow['Years of experience'] || '',
                columnAva: firstRow['Availability'] || ''
            };

            console.log(candidate)


            candidate.seniority= data_excel.columnSeniority;
            candidate.years= data_excel.columnYears;
            candidate.availability= data_excel.columnAva;

        }

        console.log(candidate)


        // console.log('Data', sheet);

        this.candidates.push(candidate);
        return {
            candidate
        }
    }

    findAll(): Candidate[] {
        return this.candidates;
    }
}
