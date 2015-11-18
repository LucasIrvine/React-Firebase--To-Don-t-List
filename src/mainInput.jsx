var React = require('react');


module.exports = React.createClass({
    getInitialState: function(){
        return {
            text : ""
        };
    },
    handleClick: function(event){
        var newText = this.state.text;

        this.props.itemsStore.push({
            text: newText,
            done: false
        });

        this.setState({text : ''});
    },
    handleInputChange: function(event){
        this.setState({text : event.target.value});
    },
    render: function(){
        return <div className="input-group">
            <input
                type="text"
                className="form-control"
                value={this.state.text}
                onChange={this.handleInputChange}
            />
            <span className="input-group-btn">
                <button
                    className="btn btn-default"
                    type="button"
                    onClick={this.handleClick}>
                    Add
                </button>
            </span>
        </div>;
    }
});
