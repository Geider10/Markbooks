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
                doc.setPage(pageNumber)
                let split = doc.splitTextToSize(link.url,maxLineWidth)//retorna arrat de str
                // console.log(split);
                doc.text("Nombre:" + `${link.name}`, 10, y1)
                y1+=10
                split.forEach((line,index)=>{
                    if(index == 0){
                        doc.text("Url:" + `${line}`, 10, y1 )
                    }
                    else{
                        doc.text(`${line}`, 10, y1 )
                    }
                    y1+=10
                })
                doc.text("Categoria:" + `${link.category}`, 10, y1)
                doc.line(10,y1 + 3,200,y1 + 3)
                y1+=10
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