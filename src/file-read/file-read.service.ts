import { Injectable } from "@nestjs/common";
import { Readable } from "stream";
@Injectable()
export class FileReadService {
    async fileUpload(
        file: any
    ) {
        let data = ''
        return new Promise((resolve, reject) => {
            const redable = Readable.from(file.buffer);
            redable.on('data', (chunk) => {
                data += chunk.toString()
            })
            redable.on('error', (error) => {
                reject(error)
            })
            redable.on('end', () => {
                console.log(data)
                resolve(data)
            })
        })

    }
}