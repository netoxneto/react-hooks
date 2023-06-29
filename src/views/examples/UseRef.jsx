import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function merge(string1, string2){
   return [...string1].map((e, i)=>{
    return `${e}${string2[i] || ''}`
   }).join('')
}

const UseRef = (props) => {
    let [val, setVal] = useState('')
    let [val2, setVal2] = useState('')
    let count = useRef(0)

    let myInput1 = useRef(null)
    let myInput2 = useRef(null)

    useEffect(()=>{
        count.current++
        myInput2.current.focus();
    }, [val])

    useEffect(()=>{
        count.current++
        myInput1.current.focus();
    }, [val2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercicio #1"/>
            <div className="center">
                <div>
                    <span className="text">Valor: {merge(val, val2)} [</span>
                    <span className='text red'>{count.current}</span>
                    <span className='text'>]</span>
                </div>

                <input type="text"
                    className="input" 
                    value={val}
                    onChange={e => setVal(e.target.value)}
                    ref={myInput1}/>
            </div>

            <SectionTitle title="Exercicio #2"/>
            <div className="center">
                <input type="text"
                className="input"
                value={val2} 
                onChange={e => setVal2(e.target.value)}
                ref={myInput2}/>
            </div>
        </div>
    )
}

export default UseRef
