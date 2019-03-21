import React, { memo, Fragment } from 'react';

//import moment
import Moment from 'moment';

//import images
import star from '../../assets/img/star.svg';

export default memo((props) => {
    return(
        <Fragment>
            {props.analyticData.map((data, key) =>
                <div className="box-shadow card-analytic" key={key}>
                    <div className="analytic-title">
                        <h5 className="text-white">{data.name}</h5>
                    </div>
                    <div className="analytic-badge">
                        {data.statusByDate.map((data, key) => 
                            {
                                if(data.status === "Complete") {
                                    return(
                                        <div className="" key={data.status+"--"+key}>
                                            <span className={"round-badge round-badge--green"}>
                                                {data.date === Moment().format("MM/DD") &&
                                                    <img src = {star}
                                                        alt="star"
                                                        title="star"
                                                        className="img-responsive"
                                                    />
                                                }
                                            </span>
                                            <span className="badge-text">{data.date}</span>
                                        </div>
                                    )
                                }
                                if(data.status === "QualityAlert") {
                                    return(<div className="" key={data.status+"--"+key}>
                                        <span className={"round-badge round-badge--green"}>
                                            {data.date === Moment().format("MM/DD") &&
                                                <img src = {star}
                                                    alt="star"
                                                    title="star"
                                                    className="img-responsive"
                                                />
                                            }
                                        </span>
                                        <span className={"badge-text" + (data.date === Moment().format("MM/DD") ? " text-white" : "")}>{data.date}</span>
                                    </div>)
                                }
                                if(data.status === "PartialLoad") {
                                    return(<div className="" key={data.status+"--"+key}>
                                        <span className={"round-badge round-badge--green"}>
                                            {data.date === Moment().format("MM/DD") &&
                                                <img src = {star}
                                                    alt="star"
                                                    title="star"
                                                    className="img-responsive"
                                                />
                                            }
                                        </span>
                                        <span className={"badge-text" + (data.date === Moment().format("MM/DD") ? " text-white" : "")}>{data.date}</span>
                                    </div>)
                                }
                                if(data.status === "Schedule") {
                                    return(
                                        <div className="" key={data.status+"--"+key}>
                                            <span className={"round-badge round-badge--transparent"}>
                                                {data.date === Moment().format("MM/DD") &&
                                                    <img src = {star}
                                                        alt="star"
                                                        title="star"
                                                        className="img-responsive"
                                                    />
                                                }
                                            </span>
                                            <span className={"badge-text" + (data.date === Moment().format("MM/DD") ? " text-white" : "")}>{data.date}</span>
                                        </div>
                                    )
                                }
                                if(data.status === "NoLoad") {
                                    return(
                                        <div className="" key={data.status+"--"+key}>
                                            <span className={"round-badge round-badge--green"}>
                                                {data.date === Moment().format("MM/DD") &&
                                                    <img src = {star}
                                                        alt="star"
                                                        title="star"
                                                        className="img-responsive"
                                                    />
                                                }
                                            </span>
                                            <span className={"badge-text" + (data.date === Moment().format("MM/DD") ? " text-white" : "")}>{data.date}</span>
                                        </div>
                                    )
                                }
                                return true;
                            }
                        )}
                    </div>   
                </div>
            )}
        </Fragment>
    )
})