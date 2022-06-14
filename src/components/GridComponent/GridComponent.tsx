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
        btnLabel:string,

    },
}


export const GridComponet = (props:DataProps)=>{

    const {name,currency,poolFilled,APY,chartLoader,rewad,logo,btnLabel} = props.data

    return (


        <div className="w-full  rounded overflow-hidden shadow-lg p-4  ">

                    <div className="flex ">

                        <div className=" w-12 h-12 mr-7">
                            <img src={logo} alt="image"/>
                        </div>   
                        <div className="flex flex-col justify-between">
                            <p className="mb-2 text-sm text-gray-500" >{name}</p>
                            <p className="text-base font-semibold">{currency}</p>
                        </div>
                    </div>

                    <div className="flex justify-between p-3  ">
                                    <div className="flex  justify-between items-center w-4/5">
                                        <p className="mb-2 text-sm text-gray-500" >Pool Filled</p>

                                        <div className="flex justify-center items-center">
                                            <div>
                                        <img src={chartLoader}/>      
                                            </div>
                                        <p className="text-base font-semibold">{poolFilled}</p>
                                        </div>
                                    </div>
                    </div>

                    <div className="flex justify-between p-3  ">
                                    <div className="flex  justify-between items-center w-4/5">
                                        <p className="mb-2 text-sm text-gray-500" >Rewards</p>

                                        <div className="flex justify-center items-center">
                                            <div>
                                        <img src={rewad}/>      
                                            </div>
                                        </div>
                                    </div>
                    </div>


                    <div className="flex justify-between p-3  ">
                                    <div className="flex  justify-between items-center w-4/5">
                                        <p className="mb-2 text-sm text-gray-500" >APY</p>

                                        <div className="flex justify-center items-center">
                                            <div>
                                        <img src='./assets/chartLoader.svg'/>      
                                            </div>
                                        <p className="text-base font-semibold">{APY}%</p>
                                        </div>
                                    </div>
                    </div>


                            <div className="flex justify-around">
                                <ButtonComponent btnLabel = {btnLabel} />
                                <ButtonComponent btnLabel="Stake"/>

                            </div>
        </div>


       




 
// </div>

    )
}