export declare namespace param_view_ds {
    enum Orientation {
        Landscape = 0,
        Portrait = 1
    }
    enum Align_Horizontaly {
        Left = 0,
        Right = 1,
        Center = 2
    }
    enum Align_Veritaly {
        Top = "Top",
        Bottom = "Bottom",
        Center = "Center"
    }
    class input {
        lable: string;
        value: string;
        promt: string;
        constructor();
    }
    class view {
        app_id: string;
        view_device_id: string;
        view_id: string;
        orientation: Orientation;
        align_veritaly: Align_Veritaly;
        align_horizontaly: Align_Horizontaly;
        constructor();
    }
}
//# sourceMappingURL=index.d.ts.map