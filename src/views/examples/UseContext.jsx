import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { DataContext } from '../../data/DataContext'
import SectionTitle from '../../components/layout/SectionTitle';

import { storageContext } from '../../data/Storage';

const UseContext = (props) => {
    const data = useContext(DataContext);
    const { text, number } = data.state;

    const { textTwo, numberTwo, setNumber } = useContext(storageContext);

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Exercicio #1" />
            <div className="center">
                <span className="text">{number}</span>
                <span className="text">{text}</span>
                <div>
                    <button onClick={e => data.setState({ number: number - 1, text })} className="btn">-1</button>
                    <button onClick={e => data.setState({ number: number + 1, text })} className="btn">+1</button>
                </div>
            </div>

            <SectionTitle title="Exercicio #2" />
            <div className="center">
                <span className="text">{textTwo}</span>
                <span className="text">{numberTwo}</span>
                <div>
                    <button className="btn" onClick={() => setNumber(numberTwo - 1)}>-1</button>
                    <button className="btn" onClick={() => setNumber(numberTwo + 1)}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
