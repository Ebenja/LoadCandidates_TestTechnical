import { Controller, Post, Get, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CandidatesService } from './candidates.service';
import { Candidate } from './candidate.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import * as XLSX from 'xlsx';


@Controller('candidates')
export class CandidatesController {
    constructor(private readonly candidatesService: CandidatesService) {}

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    create(@Body() candidate: Candidate, @UploadedFile() file: Express.Multer.File) {
        return this.candidatesService.createWithExcel(candidate, file);
    }

    @Get()
    findAll(): Candidate[] {
        return this.candidatesService.findAll();
    }
}
