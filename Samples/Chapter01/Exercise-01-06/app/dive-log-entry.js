"use strict";
// No decorator!
// Looks like this is not a standard class
Object.defineProperty(exports, "__esModule", { value: true });
var DiveLogEntry = /** @class */ (function () {
    function DiveLogEntry() {
    }
    DiveLogEntry.StockDives = [
        {
            site: 'Abu Gotta Ramada',
            location: 'Hurghada, Egypt',
            depth: 72,
            time: 54
        },
        {
            site: 'Ponte Mahoon',
            location: 'Maehbourg, Mauritius',
            depth: 54,
            time: 38
        },
        {
            site: 'Molnar Cave',
            location: 'Budapest, Hungary',
            depth: 98,
            time: 62
        }
    ];
    return DiveLogEntry;
}());
exports.DiveLogEntry = DiveLogEntry;
// How you declare the type in typescript
// variable name: type
// So here StockDives: DiveLogEntry[] 
// is like int[]. An array of DiveLogEntries
// Now every dive is an object of DiveLogEntry 
//# sourceMappingURL=dive-log-entry.js.map