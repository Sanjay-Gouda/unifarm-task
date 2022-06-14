import {useState,useContext,createContext} from 'react'



export const contextView  = createContext({showGrid:false,handleShowGrid:(grid)=>{}});


export const useView = ()=> {
    const view = useContext(contextView);
    return view
} 

export const ViewProvider = (props)=>{
    const [showGrid,setShowGrid] = useState(false);
    

          const handleShowGrid = (grid)=>{
            setShowGrid(grid);
          }  

    return (
        <contextView.Provider value={{showGrid,handleShowGrid}}>
               {
                props.children
               }     

        </contextView.Provider>
    )
}

