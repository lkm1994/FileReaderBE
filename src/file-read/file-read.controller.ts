import { Controller, Post, UseInterceptors, UploadedFile } from "@nestjs/common";
import { FileInterceptor } from '@nestjs/platform-express';
import { FileReadService } from "src/file-read/file-read.service";
import { diskStorage } from 'multer'
import { extname } from 'path'
@Controller('file')
export class FileReadController {
    constructor(
        private fileReadService: FileReadService
    ) { }
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: any) {
        const fileData = this.fileReadService.fileUpload(file)
        return fileData
    }
}