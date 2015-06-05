define(function(){
    var logo   = React.createElement("div", null, "LOGO"),
        search = React.createElement("div", null, "SEARCH"),
        assign = React.createElement("select", null, React.createElement("option", null, "Create New")),
        user   = React.createElement("div", null, "Dorian"),
        app;

    app = React.createClass({displayName: "app",
        render : function() {
            return (
            React.createElement("nav", null, 
                React.createElement("logo", null), 
                React.createElement("search", null), 
                React.createElement("assign", null), 
                React.createElement("user", null)
            ));
        }
    });

    return app;

});