import React from "react";

class CurrentInfo extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    editStatus = () => {
        this.setState({
            editMode: !this.state.editMode
        })
        this.props.updateStatus()
    }

    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <>
                {
                    this.state.editMode
                    ? <input
                            autoFocus={true}
                            onChange={this.onChangeStatus}
                            onBlur={this.editStatus}
                            type="text"
                            defaultValue={this.state.status}/>
                    : <span onDoubleClick={this.editStatus} className="card-subtitle">{this.props.status} </span>
                }

            </>
        )
    }
}

export default CurrentInfo