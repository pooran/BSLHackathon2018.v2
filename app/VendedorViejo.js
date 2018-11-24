/*
 * JS for VendedorViejo generated by Appery.io
 */
Apperyio.getProjectGUID = function() {
    return '8700fb82-4281-4205-b2b0-709172fa6b23';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}
Apperyio.AppPages = [{
    "name": "ExamplePage",
    "location": "ExamplePage.html"
}, {
    "name": "Login_banco",
    "location": "Login_banco.html"
}, {
    "name": "Login_dci",
    "location": "Login_dci.html"
}, {
    "name": "AddSell",
    "location": "AddSell.html"
}, {
    "name": "details",
    "location": "details.html"
}, {
    "name": "Login_vendedor",
    "location": "Login_vendedor.html"
}, {
    "name": "Login_corredor",
    "location": "Login_corredor.html"
}, {
    "name": "Board",
    "location": "Board.html"
}, {
    "name": "Register",
    "location": "Register.html"
}, {
    "name": "Comprador",
    "location": "Comprador.html"
}, {
    "name": "Vendedor_detalle_registro",
    "location": "Vendedor_detalle_registro.html"
}, {
    "name": "Validaciones",
    "location": "Validaciones.html"
}, {
    "name": "Login_comprador",
    "location": "Login_comprador.html"
}, {
    "name": "Vendedor",
    "location": "Vendedor.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "Welcome_OAuth_Login_with_Google_App",
    "location": "Welcome_OAuth_Login_with_Google_App.html"
}, {
    "name": "Welcome",
    "location": "Welcome.html"
}, {
    "name": "VendedorViejo",
    "location": "VendedorViejo.html"
}, {
    "name": "VendedorAdjustes",
    "location": "VendedorAdjustes.html"
}];

function VendedorViejo_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelabel_10': 'VendedorViejo_mobilelabel_10',
        'mobilelist_11': 'VendedorViejo_mobilelist_11',
        'mobilelistitem_12': 'VendedorViejo_mobilelistitem_12',
        'mobilelistitembutton_13': 'VendedorViejo_mobilelistitembutton_13',
        'mobilelistitem_14': 'VendedorViejo_mobilelistitem_14',
        'mobilelistitembutton_15': 'VendedorViejo_mobilelistitembutton_15',
        'mobilelistitem_16': 'VendedorViejo_mobilelistitem_16',
        'mobilelistitembutton_17': 'VendedorViejo_mobilelistitembutton_17',
        'mobilenavbar_6': 'VendedorViejo_mobilenavbar_6',
        'v1': 'VendedorViejo_v1',
        'v2': 'VendedorViejo_v2',
        'v3': 'VendedorViejo_v3'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    /*
     * Nonvisual components
     */
    Apperyio.mappings = Apperyio.mappings || {};
    Apperyio.datasources = Apperyio.datasources || {};
    Apperyio.CurrentScreen = 'VendedorViejo';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var VendedorViejo_onLoad = function() {
        VendedorViejo_elementsExtraJS();
        VendedorViejo_deviceEvents();
        VendedorViejo_windowEvents();
        VendedorViejo_elementsEvents();
    };
    // screen window events
    function VendedorViejo_windowEvents() {
        $('#VendedorViejo').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function VendedorViejo_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function VendedorViejo_elementsExtraJS() {
        // screen (VendedorViejo) extra code
        /* mobilelist_11 */
        listView = $("#VendedorViejo_mobilelist_11");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#VendedorViejo_mobilelist_11 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }
        /* mobilelistitem_12 */
        /* mobilelistitem_14 */
        /* mobilelistitem_16 */
    };
    // screen elements handler
    function VendedorViejo_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#VendedorViejo_mobilefooter [name="v1"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Vendedor', {
                        reverse: true
                    });
                }
            },
        }, '#VendedorViejo_mobilefooter [name="v1"]');
        $(document).off("click", '#VendedorViejo_mobilefooter [name="v3"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('VendedorAdjustes', {
                        reverse: false
                    });
                }
            },
        }, '#VendedorViejo_mobilefooter [name="v3"]');
    };
    $(document).off("pagebeforeshow", "#VendedorViejo").on("pagebeforeshow", "#VendedorViejo", function(event, ui) {
        Apperyio.CurrentScreen = "VendedorViejo";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    VendedorViejo_onLoad();
};
$(document).off("pagecreate", "#VendedorViejo").on("pagecreate", "#VendedorViejo", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    VendedorViejo_js();
});