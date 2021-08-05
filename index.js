"use strict";
export var param_view_ds;
(function (param_view_ds) {
    let Orientation;
    (function (Orientation) {
        Orientation[Orientation["Landscape"] = 0] = "Landscape";
        Orientation[Orientation["Portrait"] = 1] = "Portrait"; //  [Vertical  ]
    })(Orientation = param_view_ds.Orientation || (param_view_ds.Orientation = {}));
    ;
    let Align_Horizontaly;
    (function (Align_Horizontaly) {
        Align_Horizontaly[Align_Horizontaly["Left"] = 0] = "Left";
        Align_Horizontaly[Align_Horizontaly["Right"] = 1] = "Right";
        Align_Horizontaly[Align_Horizontaly["Center"] = 2] = "Center";
    })(Align_Horizontaly = param_view_ds.Align_Horizontaly || (param_view_ds.Align_Horizontaly = {}));
    ;
    let Align_Veritaly;
    (function (Align_Veritaly) {
        Align_Veritaly["Top"] = "Top";
        Align_Veritaly["Bottom"] = "Bottom";
        Align_Veritaly["Center"] = "Center";
    })(Align_Veritaly = param_view_ds.Align_Veritaly || (param_view_ds.Align_Veritaly = {}));
    ;
    //-----------------------------------
    class input {
        constructor() { }
    }
    param_view_ds.input = input;
    ;
    class view {
        constructor() { }
    }
    param_view_ds.view = view;
    ;
})(param_view_ds || (param_view_ds = {})); //name space
//# sourceMappingURL=index.js.map