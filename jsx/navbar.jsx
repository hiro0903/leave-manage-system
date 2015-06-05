define(function(){
    var info = this.props.data.user,
        logo   = <div>LOGO</div>,
        search = <div>SEARCH</div>,
        assign = <select><option>Create New</option></select>,
        user   = <div>Dorian</div>,
        app;

    app = React.createClass({
        render : function() {
            return (
            <nav>
                <logo />
                <search />
                <assign />
                <user />
            </nav>);
        }
    });

    return app;

});
