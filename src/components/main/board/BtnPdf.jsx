import {jsPDF} from 'jspdf';
import {FilterContext} from '../../../context/dataContext';
import {useContext, useState} from 'react';
import Download from '../../../icons/Download';
function BtnPdf(){
    const {links} = useContext(FilterContext)
    const parsearLinks = ()=>{
        const list = links
        const newLinks = list.map(link=>{
            if(typeof(link.id) != "string" || typeof(link.star) != "string"){
                let idStr= link.id.toString()
                let startStr = link.star.toString() 
                return {...link, id: idStr, star: startStr}
            }
            return link
        })
        return newLinks
    }
    const createPdf=()=>{
        const doc = new jsPDF()
        let y1 =40
        let sizePdf = doc.internal.pageSize.getWidth()
        let maxLineWidth = sizePdf - 40
        let pageNumber = 1
        doc.text("LinkBook",90,20)
        parsearLinks().forEach((link) => {
            if(y1 <= 250){
                doc.line(10,y1 - 6,200,y1 - 6)
                doc.setPage(pageNumber)
                let nameSplit = doc.splitTextToSize(link.name,maxLineWidth)//retorna array de str
                let urlSplit = doc.splitTextToSize(link.url,maxLineWidth)
                let categorySplit = doc.splitTextToSize(link.category,maxLineWidth)

                nameSplit.forEach((value,index)=>{
                    if(index == 0){
                        doc.text("Nombre:" + `${value}`, 10, y1 )
                    }
                    else{
                        doc.text(`${value}`, 10, y1 )
                    }
                    y1+=10
                })
                urlSplit.forEach((value,index)=>{
                    if(index == 0){
                        doc.text("Url:" + `${value}`, 10, y1 )
                    }
                    else{
                        doc.text(`${value}`, 10, y1 )
                    }
                    y1+=10
                })
                categorySplit.forEach((value,index)=>{
                    if(index == 0){
                        doc.text("Categoria:" + `${value}`, 10, y1 )
                    }
                    else{
                        doc.text(`${value}`, 10, y1 )
                    }
                    y1+=10
                })
                if(y1 == 250){//se ejecuta una vez, crea una pagina y formatea las coordenadas
                    doc.addPage()
                    y1 = 40
                    pageNumber++
                }
            }
        });
        doc.save('LinkBook.pdf')
    }
    return (
        <div>
            <button onClick={createPdf} className=' py-1 px-2 rounded-md bg-sky-500 flex gap-1 items-center' > PDF <Download/></button>
        </div>
    )
}
export default BtnPdf