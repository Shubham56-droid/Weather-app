import React from 'react'
import "./Form.css";

function error()
{
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Please Enter City And Country
        </div>
    )
}

function error2()
{
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Both City And Country Cannot Be Same
        </div>
    )
}

export const Form = (props) => {
    return (
        <div>
            <div>{props.error? error(): null}</div>
            <div>{props.error2? error2(): null}</div>
            <h1 className="namehead">Weather App</h1>
            <form onSubmit={props.loadWeather}>
            <div className="col py-3">
                <div className="input-block">
                    <input type="text" className="form-control" name="city" autoComplete="off" placeholder="City"/>
                </div>
                <div className="input-block">
                <input type="text" className="form-control" name="country" autoComplete="off" placeholder="Country"/>
                </div>
                <div className="col-md-3 py-3 output-block">
                    <button className="btn btn-warning">Get Weather</button>
                </div>
            </div>
            </form>
        </div>
    )
}


