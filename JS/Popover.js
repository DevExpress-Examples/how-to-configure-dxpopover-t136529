window.DxSample = {};
$(function () {
    DxSample.app = new DevExpress.framework.html.HtmlApplication({
        namespace: DxSample,
        defaultLayout: 'default'
    });

    DxSample.app.router.register(":view/:name", { view: "home", name: "" });
    DxSample.app.navigate("home");
});


DxSample.home = function () {
    var viewModel = {
        visible: ko.observable(false),
        togglePopover: function() {
            this.visible(!this.visible());
        },
        colors: ["Red", "Green", "Black"]
    };
    return viewModel;
};