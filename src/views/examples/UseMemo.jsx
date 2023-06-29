import React, { useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

function sum(a, b) {
    const future = Date.now() + (2 * 1000);
    while(Date.now() < future){}
    return a + b
}

export default (props) => {
    let [number1, setNumber1] = useState(0);
    let [number2, setNumber2] = useState(0);
    let [number3, setNumber3] = useState(0);

    let result = useMemo(_ => sum(number1, number2), [number1, number2]);

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />

            <SectionTitle title="Exercicio #1" />
            <div className="center">
                <span className="text">{result}</span>

                <input type="number"
                    className="input"
                    value={number1}
                    onChange={e => setNumber1(parseInt(e.target.value))} />

                <input type="number"
                    className="input"
                    value={number2}
                    onChange={e => setNumber2(parseInt(e.target.value))} />

                <input type="number"
                    className="input"
                    value={number3}
                    onChange={e => setNumber3(parseInt(e.target.value))} />

            </div>
        </div>
    )
}
