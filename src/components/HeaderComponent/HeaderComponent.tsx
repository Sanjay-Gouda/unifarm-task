
import {Dropdown} from '../DropdownComponent/DropdownComponent'
import { SearchBox } from '../SearchComponent/SearchComponent'
import { FaThList } from 'react-icons/fa';
import { RiLayoutGridFill } from 'react-icons/ri';
import { useView } from '../../Context/contextView';


export const HeaderComponent = ()=>{

    const view= useView();

    console.log(view);


    return(

        <>
             <div className="container flex items-center justify-between mt-4 mx-auto ">
               

                <div className="hidden md:flex space-x-6">
                        <SearchBox/>
                    <Dropdown/>
                    
                </div>

                <div className="flex  w-1/12 h-10 justify-evenly">

                    <div >
                       <FaThList onClick={()=>view.handleShowGrid(false)}/> 
                    </div>

                    <div>
                       <RiLayoutGridFill onClick={()=>view.handleShowGrid(true)}  />
                    </div>
                </div>
            </div>

        </>


    )
}