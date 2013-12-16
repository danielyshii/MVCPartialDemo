ImageManager = function (config) {

    var self = this;

    self.config = {
        container: null,
        clickHandler: self.DefaultClickHandler
    }

    self.Init = function (config)
    {
        self.config.container = config.container;
        self.config.clickHandler = config.clickHandler;

        self.loadPartial();
    }

    self.DefaultClickHandler = function () {

        alert('On Default Click Handler');

    }

    self.ConfigureImageHandler = function () {

        $('.carrousel-container .img-click').click(self.config.clickHandler);

    }

    self.loadPartial = function ()
    {
        $.ajax({
            type: "GET",
            url: '/Common/ImageCarrousel',
            dataType: "html",
            success: function (data) {
                $(self.config.container).empty();
                $(self.config.container).html(data);

                self.ConfigureImageHandler();
            }

        });
    }

    self.Init(config);

}