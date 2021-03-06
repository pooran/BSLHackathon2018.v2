/*
 * JS for VendedorAdjustes generated by Appery.io
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

function VendedorAdjustes_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelabel_18': 'VendedorAdjustes_mobilelabel_18',
        'mobiletextinput_20': 'VendedorAdjustes_mobiletextinput_20',
        'mobilelabel_19': 'VendedorAdjustes_mobilelabel_19',
        'mobiletextinput_21': 'VendedorAdjustes_mobiletextinput_21',
        'mobilelabel_22': 'VendedorAdjustes_mobilelabel_22',
        'mobiletextinput_24': 'VendedorAdjustes_mobiletextinput_24',
        'mobilelabel_23': 'VendedorAdjustes_mobilelabel_23',
        'mobiletextinput_25': 'VendedorAdjustes_mobiletextinput_25',
        'mobilelink_26': 'VendedorAdjustes_mobilelink_26',
        'mobilenavbar_6': 'VendedorAdjustes_mobilenavbar_6',
        'v1': 'VendedorAdjustes_v1',
        'v2': 'VendedorAdjustes_v2',
        'v3': 'VendedorAdjustes_v3'
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
    Apperyio.CurrentScreen = 'VendedorAdjustes';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var VendedorAdjustes_onLoad = function() {
        VendedorAdjustes_elementsExtraJS();
        VendedorAdjustes_deviceEvents();
        VendedorAdjustes_windowEvents();
        VendedorAdjustes_elementsEvents();
    };
    // screen window events
    function VendedorAdjustes_windowEvents() {
        $('#VendedorAdjustes').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function VendedorAdjustes_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function VendedorAdjustes_elementsExtraJS() {
        // screen (VendedorAdjustes) extra code
    };
    // screen elements handler
    function VendedorAdjustes_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#VendedorAdjustes_mobilecontainer [name="mobilelink_26"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('startScreen', {
                        reverse: false
                    });
                }
            },
        }, '#VendedorAdjustes_mobilecontainer [name="mobilelink_26"]');
    };
    $(document).off("pagebeforeshow", "#VendedorAdjustes").on("pagebeforeshow", "#VendedorAdjustes", function(event, ui) {
        Apperyio.CurrentScreen = "VendedorAdjustes";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    VendedorAdjustes_onLoad();
};
$(document).off("pagecreate", "#VendedorAdjustes").on("pagecreate", "#VendedorAdjustes", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    VendedorAdjustes_js();
});