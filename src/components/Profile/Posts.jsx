import React from "react";

const Posts = React.memo((props) =>  {
    let postElements = props.posts.map((el) => {
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
                            <button className="waves-effect waves-light btn-small"><i
                                className="material-icons left">sentiment_very_satisfied</i>{el.likecount}</button>
                            <button className="waves-effect btn-small"><i
                                className="material-icons left">sentiment_very_dissatisfied</i>{el.dislikeCount}
                            </button>
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

    return (
        <div className="row">
            <div className="postsWrapper">
                {postElements}
            </div>
        </div>
    )
})

export default Posts