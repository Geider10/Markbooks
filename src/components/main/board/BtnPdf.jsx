import {jsPDF} from 'jspdf';
import {FilterContext} from '../../../context/dataContext';
import {useContext} from 'react';
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
        let x = 10
        let y1 =40, y2=50, y3=60

        doc.text("LinkBook",90,20)
        parsearLinks().forEach(link => {
            // console.log(y1);
            if(y1 <= 240){
                // console.log("page 1");
                doc.text("Nombre:" + `${link.name}`, x, y1)
                doc.text("Url:" + `${link.url}`, x, y2)
                doc.text("Categoria:" + `${link.category}`, x, y3)
                doc.line(10,y3 + 5,200,y3 + 5)
                y1+=40
                y2+=40
                y3+=40
                if(y1 == 240){//se ejecuta una vez, crea una pagina y formatea las coordenadas
                    doc.addPage()
                    y1 = 40, y2 =  50, y3 = 60
                }
            }
            else if(y1 > 240){
                doc.setPage(2)
                // console.log("page 2");
                doc.text("Nombre:" + `${link.name}`, x, y1)
                doc.text("Url:" + `${link.url}`, x, y2)
                doc.text("Categoria:" + `${link.category}`, x, y3)
                doc.line(10,y3 + 5,200,y3 + 5)
                y1+=40
                y2+=40
                y3+=40
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