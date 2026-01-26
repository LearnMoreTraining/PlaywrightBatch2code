import fs from 'fs'
import {parse} from 'csv-parse/sync'
import XLSX from 'xlsx'

export class DataProvider{

      public  static getDataFromJson(filepath:string){
       
      let data=  JSON.parse( fs.readFileSync(filepath,'utf8'))
      return data

     }


     public  static getDataFromCSV(filepath:string){

          let data=  fs.readFileSync(filepath)
         let val=   parse(data,{columns:true, skip_empty_lines:true})
            return val
        }

     public  static getDataFromExcel(filepath:string){

        const file = fs.readFileSync(filepath)
          const workbook =  XLSX.read(file)
          const sheetName =  workbook.SheetNames[0]
          const worksheet = workbook.Sheets[sheetName]
          const record:any =  XLSX.utils.sheet_to_json(worksheet)
          return record

        }
}