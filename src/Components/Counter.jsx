import React, { useState } from 'react'

export default function Counter() {
    const[value,setValue]=useState(10);
    const handleClickadd=()=>{
        setValue(value=>value+1);
    }
    const handleClicksub=()=>{
        setValue(value=>value-1);
    }
    return (
        <>
            <div className='border col-6 text-white p-2 offset-3'>
              
                <div className='col h2 text-white '>
                    Fun Counter
                </div>
                
                     <button type="button" onClick={handleClickadd} class="btn btn-success pl-2">+1</button>
                    &nbsp;
                     <button type="button" onClick={handleClicksub} class="btn btn-danger pl-2">-1</button>
              
                <div className='h2 text-white'>
                    Counter:&nbsp;
                    <span className='text-success'>{value}</span>
                </div>
             
            </div>
        </>
    )
}
