"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Define an enum called Direction with four possible values: Up, Down, Left, Right
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// 2. Create a function that takes a Direction enum as an argument and uses a switch to return a corresponding string like "Moving up!"
function move(direction) {
    switch (direction) {
        case Direction.Up:
            return "Moving up!";
        case Direction.Down:
            return "Moving down!";
        case Direction.Left:
            return "Moving left!";
        case Direction.Right:
            return "Moving right!";
        default:
            return "Unknown direction!";
    }
}
// 3. Define an enum called Status with explicit values: Success = 1, Failure = -1, Pending = 0
var Status;
(function (Status) {
    Status[Status["Success"] = 1] = "Success";
    Status[Status["Failure"] = -1] = "Failure";
    Status[Status["Pending"] = 0] = "Pending";
})(Status || (Status = {}));
// 4. Create a function called getStatusMessage that accepts the Status enum as an argument and returns a corresponding message like "Operation was successful! or "Operation failed!"
function getStatusMessage(status) {
    switch (status) {
        case Status.Success:
            return "Operation was successful!";
        case Status.Failure:
            return "Operation failed!";
        case Status.Pending:
            return "Operation is pending!";
        default:
            return "Unknown status!";
    }
}
// 5. Implement the same feature, but this time use a object literal instead of an enum
const StatusLiteral = {
    Success: 1,
    Failure: -1,
    Pending: 0,
};
// 6. Create a function called getStatusMessageLiteral that accepts the statusLiteral as an argument and returns a corresponding message
function getStatusMessageLiteral(status) {
    switch (status) {
        case "Success":
            return "Operation was successful!";
        case "Failure":
            return "Operation failed!";
        case "Pending":
            return "Operation is pending!";
        default:
            return "Unknown status!";
    }
}
