
import { UNIFARM_DATA } from "../../unifarmData";
import { GridComponet } from "../GridComponent/GridComponent";
import { ListComponent } from "../ListComponent/ListComponent";
import { useView } from "../../Context/contextView";



export const View = ()=>{

    const view =useView();


    return(


        <>
          {
            view.showGrid ? 

            <div className=" container mx-auto mt-4 w-full grid grid-cols-4 gap-3">
                    {
                        UNIFARM_DATA.map((item)=>{
                            return(
                                <GridComponet data={item} />
                            )
                        })
                    }
            </div>

                :
                
                    UNIFARM_DATA.map((item)=>{
                        return(
                            <ListComponent data={item} />
                        )
                    })      

          }     
        </>


    )

}