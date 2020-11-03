import React from 'react'

const Widget = (props) => {
    return (
        <div className="widget">
            <div className="widget_value">
                <h1 className="value">
                    {props.value}
                </h1>
                <p className="wedget_title">
                    {props.title}
                </p>
            </div>
        </div>
    )
}

export default Widget;
