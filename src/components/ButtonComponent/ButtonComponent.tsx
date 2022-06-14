
type BtnProps = {
    btnLabel:string,
}


export const ButtonComponent = (props :BtnProps) =>{


    return(

        <div>

            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
            {props.btnLabel}
            </button>

        </div>
    )
}