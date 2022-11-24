var AppStatus;
(function (AppStatus) {
    AppStatus["ACTIVE"] = "ACT";
    AppStatus["INACTIVE"] = "INACT";
    AppStatus["ONHOLD"] = "HLD";
    AppStatus["ONSTOP"] = "STOP";
})(AppStatus || (AppStatus = {}));
function checkStatus(status) {
    console.log(status);
}
checkStatus(AppStatus.ONSTOP);
