import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';
import UseCallbackButtons from './UseCallbackButtons';

export default (props) => {
    let [count, setCount] = useState(0);

    const inc = useCallback(delta => {
        setCount(current => current + delta);
    }, [setCount]);

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <SectionTitle title="Exercicio #1" />
            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons inc={inc} />
            </div>
        </div>
    )
}
