import { ButtonComponent } from "../ButtonComponent/ButtonComponent"

type DataProps = {
    data :{
        id:number,
        name:string,
        currency:string,
        poolFilled:number,
        APY:number,
        chartLoader:string,
        rewad:string,
        logo:string,
        btnLabel :string,

    },
}



export const ListComponent = (props:DataProps)=>{
    // console.log(props.data);

    const {name,currency,poolFilled,APY,chartLoader,rewad,logo,btnLabel} = props.data

    

    return(

    <div className=" container mx-auto border-b-2 p-3  w-full flex justify-between mt-3">

            <div className="flex justify-between ">

                <div className=" w-12 h-12 mr-7">
                    <img src={logo} alt="image"/>
                </div>   
                <div className="flex flex-col justify-between">
                    <p className="mb-2 text-sm text-gray-500" >{name}</p>
                    <p className="text-base font-semibold">{currency}</p>
                </div>
            </div>
           
            <div className="flex justify-between ">
                <div className="flex flex-col justify-between items-center">
                    <p className="mb-2 text-sm text-gray-500" >Pool Filled</p>

                    <div className="flex justify-center items-center">
                        <div>
                      <img src={chartLoader}/>      
                        </div>
                    <p className="text-base font-semibold">{poolFilled}</p>
                    </div>
                </div>
            </div>
           
            <div className="flex justify-between items-center ">
                <div className="flex flex-col justify-between">
                    <p className="mb-2 text-sm text-gray-500" >Rewards</p>

                    <div className="w-4/5">
                    <img src={rewad}/>

                    </div>
                </div>
            </div>
           
            <div className="flex justify-between ">

                   
                <div className="flex flex-col justify-between">
                    <p className="mb-2 text-sm text-gray-500" >APY</p>

                        <div className="flex  justify-center items-center">
                            <p className="text-base font-semibold mr-5">{APY}%</p>
                            
                           <ButtonComponent btnLabel ={btnLabel}/>

                        </div>


                </div>
            </div>


            
           




    </div>
)
}