import React from "react";
import StoreContext from "../../../StoreContext";

const Posts = () => {
    return (
        <div className="row">
            <div className="postsWrapper">
                <StoreContext.Consumer>
                    { (store) => {
                        return store.getState().profilePage.posts.map((el) => {
                            return (
                                <div key={el.id} className="col s4">
                                    <div className="card">
                                        <div className="card-image waves-effect waves-block waves-light">
                                            <img src={el.imgPost} alt={el.text}/>
                                        </div>
                                        <div className="card-content">
                    <span className="card-title activator grey-text text-darken-1">{el.text}
                        <i className="material-icons right">more_vert</i>
                    </span>
                                            <p>
                                                <a className="waves-effect waves-light btn-small"><i className="material-icons left">sentiment_very_satisfied</i>{el.likecount}</a>
                                                <a className="waves-effect btn-small"><i className="material-icons left">sentiment_very_dissatisfied</i>{el.dislikeCount}</a>
                                            </p>
                                        </div>
                                        <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4">{el.text}<i
                                            className="material-icons right">close</i></span>
                                            <p>Here is some more information about this product that is only revealed once clicked
                                                on.</p>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }}
                </StoreContext.Consumer>
            </div>
        </div>
    )
}
export default Posts