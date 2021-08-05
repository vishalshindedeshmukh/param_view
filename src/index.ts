"use strict";
export namespace param_view_ds {
    export enum Orientation {
        Landscape = 0, //  [Horizontal]
        Portrait = 1 //  [Vertical  ]
    };
    export enum Align_Horizontaly {
        Left,
        Right,
        Center,
    };
    export enum Align_Veritaly {
        Top = "Top",
        Bottom = "Bottom",
        Center = "Center"
    };

    //-----------------------------------
    export class input {
        lable: string;
        value: string;
        promt: string;
        constructor() { }
    };

    export class view {
        app_id: string;
        view_device_id: string;
        view_id: string;
        orientation: Orientation;
        align_veritaly: Align_Veritaly;
        align_horizontaly: Align_Horizontaly;
        constructor() { }
    };

}//name space



//export type { io_data_cls, ui_io_field_req };

//# sourceMappingURL=ui_db_com.js.map