var React = require('react');
var MainInput = require('./mainInput');
var List = require('./list');
var ReactFire = require('reactfire');
var FireBase = require('firebase');
var rootUrl = '<your-firebase-url>';


var App = React.createClass({
    getInitialState : function(){
        return {
            items : {},
            fbLoaded: false
        };
    },
    //copies methods from any listed to this component
    mixins : [ ReactFire ],
    componentWillMount : function(){
        //bindAsObject given by ReactFire
        //amounts to this.state.items = {}
        var fb = new Firebase(rootUrl + 'items/');
        this.bindAsObject(fb, 'items');

        fb.on('value', this.handleDataLoaded);
    },

    handleDataLoaded: function(){
        this.setState({fbLoaded : true});
    },
    render: function() {

        return <div className="row panel panel-default">
            <div className="col-md-8 col-md-offset-2">
                <h2 className="text-center">
                    To-Don't List
                </h2>
                <MainInput itemsStore={this.firebaseRefs.items} />
                <List classList={'content ' + (this.state.fbLoaded ? 'loaded' : '')} items={this.state.items} />
            </div>
        </div>
    }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
