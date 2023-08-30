import React from 'react'

export const CheckBox = ({label}: {label:string}) => {

    const [isCheck, setIsCheck] = React.useState(false)

    // const handleClick: React.ChangeEventHandler = () => {
    //     setIsCheck(!isCheck)
    //     console.log(isCheck)
    // }

  return (
    
    <label style={
        isCheck? {padding: "1rem", border: "2px solid green"} 
        : {padding: "1rem", border: "2px solid red"}
    }>
        <input type="checkbox" checked={isCheck} onChange={({currentTarget}) => setIsCheck(currentTarget.checked)}/>
        {label}
    </label>

  )
}
