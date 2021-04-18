import React, {useEffect, useState} from "react";

const CurrentInfo = (props) => {

    let [editMode, setEditMode] =useState(false);
    let [status, setStatus] =useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateMode = () => {
        setEditMode(true)
    }
    const deactivateMode = () => {
        setEditMode(false)
    }

    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
        props.updateStatus(e.currentTarget.value)
    }


    return (
            <>
                {
                    editMode
                        ? <input
                            autoFocus={true}
                            onChange={onChangeStatus}
                            onBlur={deactivateMode}
                            type="text"
                            defaultValue={status}/>
                        : <span onDoubleClick={activateMode}
                                className="card-subtitle">{props.status || "статуса нет"} </span>
                }

            </>
    )
}
// class CurrentInfo extends React.Component {
//     state = {
//         editMode: false,
//         status: this.props.status
//     }
//     editStatus = () => {
//         this.setState({
//             editMode: !this.state.editMode
//         })
//         this.props.updateStatus(this.state.status)
//     }
//
//     onChangeStatus = (e) => {
//         this.setState({
//             status: e.currentTarget.value
//         })
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         if (prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status
//             })
//         }
//     }
//
//     render() {
//         return (
//             <>
//                 {
//                     this.state.editMode
//                         ? <input
//                             autoFocus={true}
//                             onChange={this.onChangeStatus}
//                             onBlur={this.editStatus}
//                             type="text"
//                             defaultValue={this.state.status}/>
//                         : <span onDoubleClick={this.editStatus}
//                                 className="card-subtitle">{this.props.status || "статуса нет"} </span>
//                 }
//
//             </>
//         )
//     }
//
// }

export default CurrentInfo