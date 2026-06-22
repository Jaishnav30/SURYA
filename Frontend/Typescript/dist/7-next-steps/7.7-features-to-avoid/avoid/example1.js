"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Avoid plain enum
var Status;
(function (Status) {
    Status[Status["Active"] = 0] = "Active";
    Status[Status["Inactive"] = 1] = "Inactive";
    Status[Status["Pending"] = 2] = "Pending";
    Status[Status["Deleted"] = 3] = "Deleted";
})(Status || (Status = {}));
