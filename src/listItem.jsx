var React = require('react');
var FireBase = require('firebase');
var rootUrl = '<your-firebase-url>';

module.exports = React.createClass({

    getInitialState: function(){
        return {
            text : this.props.item.text,
            done : this.props.item.done
        };
    },

    componentWillMount: function(){
        this.fb = new Firebase(rootUrl + 'items/' + this.props.item.key);

    },

    changeItem: function(event){
        var updateObj = {text: event.target.value};
        this.setState(updateObj);
        this.fb.update(updateObj);
    },

    handleCheck: function(event){
        var updateObj = {done: event.target.checked};
        this.setState(updateObj);
        this.fb.update(updateObj);
    },

    deleteItem: function(event){
        this.fb.remove();
    },

    render: function(){
        return <div className={'input-group '+ (this.state.done ? 'completed' : '')}>
            <span className="input-group-addon">
                <input
                    checked={this.state.done}
                    type="checkbox"
                    onChange={this.handleCheck}
                />
            </span>
            <input type="text" className="form-control" onChange={this.changeItem} value={this.state.text} />
            <span className="input-group-btn">
                <button onClick={this.deleteItem} className="btn btn-info">
                    delete
                </button>
            </span>
        </div>;
    }
});
