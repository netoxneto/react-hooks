import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { DataContext } from '../../data/DataContext'
import SectionTitle from '../../components/layout/SectionTitle';

const UseContext = (props) => {
    const data = useContext(DataContext);
    const { text, number } = data.state;

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
        </div>
    )
}

export default UseContext
