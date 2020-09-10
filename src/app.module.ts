import { Module } from '@nestjs/common';
import { FileReadController } from 'src/file-read/file-read.controller';
import { FileReadService } from 'src/file-read/file-read.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileReadModule } from './file-read/file-read.module';

@Module({
  imports: [FileReadModule],
  controllers: [AppController, FileReadController],
  providers: [AppService, FileReadService],
})
export class AppModule { }
