var React = require('react');
var ListItem = require('./listItem');

module.exports = React.createClass({
    createList: function(){
        if(Object.keys(this.props.items).length === 0){
            return <h4>Please Add a To-Don't</h4>;
        }else{
            var listItems = [];
            for(var key in this.props.items){
                var thisItem = this.props.items[key];
                thisItem.key = key;
                listItems.push(
                    <ListItem
                        item={this.props.items[key]}
                        key={key}
                    />
                );
            }
            return listItems;
        }
    },
    render: function(){

        return <div className={this.props.classList}>
            {this.createList()}
        </div>;
    }
});
