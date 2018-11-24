/*
 * JS for ExamplePage generated by Appery.io
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

function ExamplePage_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_2': 'ExamplePage_mobilebutton_2',
        'mobilebutton_3': 'ExamplePage_mobilebutton_3',
        'mobiletextinput_4': 'ExamplePage_mobiletextinput_4',
        'mobiledatepicker_5': 'ExamplePage_mobiledatepicker_5',
        'mobilebutton_6': 'ExamplePage_mobilebutton_6',
        'mobiletoggle_12': 'ExamplePage_mobiletoggle_12',
        'mobileslider_11': 'ExamplePage_mobileslider_11',
        'mobilelist_13': 'ExamplePage_mobilelist_13',
        'mobilelistitem_14': 'ExamplePage_mobilelistitem_14',
        'mobilelistitembutton_15': 'ExamplePage_mobilelistitembutton_15',
        'mobilelistitem_16': 'ExamplePage_mobilelistitem_16',
        'mobilelistitembutton_17': 'ExamplePage_mobilelistitembutton_17',
        'mobilelistitem_18': 'ExamplePage_mobilelistitem_18',
        'mobilelistitembutton_19': 'ExamplePage_mobilelistitembutton_19',
        'mobilecheckboxgroup_7': 'ExamplePage_mobilecheckboxgroup_7',
        'mobilecheckbox_8': 'ExamplePage_mobilecheckbox_8',
        'mobilecheckbox_9': 'ExamplePage_mobilecheckbox_9',
        'mobilenavbar_20': 'ExamplePage_mobilenavbar_20',
        'mobilenavbaritem_21': 'ExamplePage_mobilenavbaritem_21',
        'mobilenavbaritem_22': 'ExamplePage_mobilenavbaritem_22',
        'mobilenavbaritem_23': 'ExamplePage_mobilenavbaritem_23'
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
    Apperyio.CurrentScreen = 'ExamplePage';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var ExamplePage_onLoad = function() {
        ExamplePage_elementsExtraJS();
        ExamplePage_deviceEvents();
        ExamplePage_windowEvents();
        ExamplePage_elementsEvents();
    };
    // screen window events
    function ExamplePage_windowEvents() {
        $('#ExamplePage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function ExamplePage_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function ExamplePage_elementsExtraJS() {
        // screen (ExamplePage) extra code
        /* mobiledatepicker_5 */
        ExamplePage_mobiledatepicker_5_selector = "#ExamplePage_mobiledatepicker_5";
        ExamplePage_mobiledatepicker_5_dataPickerOptions = {
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            maxDate: new Date(""),
            minDate: new Date(""),
            dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            showOtherMonths: true
        };
        ExamplePage_mobiledatepicker_5_dataPickerOptions.defaultDate = new Date("10/21/2014");
        Apperyio.__registerComponent('mobiledatepicker_5',
            new Apperyio.ApperyMobileDatePickerComponent("ExamplePage_mobiledatepicker_5", ExamplePage_mobiledatepicker_5_dataPickerOptions));
        /* mobiletoggle_12 */
        $("#ExamplePage_mobiletoggle_12").parent().find(".ui-flipswitch-on").attr("tabindex", "8");
        /* mobilelist_13 */
        listView = $("#ExamplePage_mobilelist_13");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#ExamplePage_mobilelist_13 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }
        /* mobilelistitem_14 */
        /* mobilelistitem_16 */
        /* mobilelistitem_18 */
    };
    // screen elements handler
    function ExamplePage_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
    };
    $(document).off("pagebeforeshow", "#ExamplePage").on("pagebeforeshow", "#ExamplePage", function(event, ui) {
        Apperyio.CurrentScreen = "ExamplePage";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    ExamplePage_onLoad();
};
$(document).off("pagecreate", "#ExamplePage").on("pagecreate", "#ExamplePage", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    ExamplePage_js();
});