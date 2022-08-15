"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaField = void 0;
const field_1 = require("../templates/field");
const decorator_1 = require("../components/decorator");
class PrismaField extends decorator_1.Decoratable {
    constructor(obj) {
        super(obj);
        this.echo = () => {
            var _a;
            let name = this.name;
            name = this.nullable ? `${name}?` : `${name}!`;
            const template = this.default ? field_1.FIELD_TEMPLATE_DEFAULT : field_1.FIELD_TEMPLATE;
            return template
                .replace('#!{NAME}', name)
                .replace('#!{TYPE}', this.type)
                .replace('#!{DECORATORS}', this.echoDecorators())
                .replace('#!{DEFAULT}', (_a = this.default) !== null && _a !== void 0 ? _a : 'undefined');
        };
    }
}
exports.PrismaField = PrismaField;
//# sourceMappingURL=field.js.map