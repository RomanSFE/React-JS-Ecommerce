import React from 'react'

function Title({name, title}) {
    return (
        <div className="row">
            <div className="col-10 ma-auto my-2 top-title text-center">
                <h2 className="text-title">{name} <strong>{title}</strong></h2>
            </div>
        </div>
    )
}
export default Title
