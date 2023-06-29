import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    let [name, setName] = useState("Inicial...")
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Input" />

            <h1>{name}</h1>
            <input type="text" className="input"
                value={name}
                onChange={e => setName(e.target.value)} />

        </div>
    )
}

export default UseState