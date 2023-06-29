import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcfatorial(n){
    if(n < 0) return -1
    if(n == 0 ) return 1
    return calcfatorial(n - 1) * n
}

const UseEffect = (props) => {
    let [number, setNumber] = useState(1);
    let [numberTho, setNumberTho] = useState(1);
    let [fatorial, setFatorial] = useState(1);

    useEffect(()=>{
        setFatorial(calcfatorial(number))
    }, [number]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercicio #1" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial}</span>
                </div>

                <input type="number"
                    className='input'
                    value={number}
                    onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercicio #2"/>
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{numberTho % 2 == 0 ? "Par" : "Ímpar"}</span>
                </div>

                <input type="number" 
                    className="input" 
                    value={numberTho}
                    onChange={e => setNumberTho(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseEffect
