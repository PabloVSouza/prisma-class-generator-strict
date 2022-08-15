"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGenerateError = exports.GeneratorPathNotExists = exports.GeneratorFormatNotValidError = void 0;
const util_1 = require("./util");
class GeneratorFormatNotValidError extends Error {
    constructor(config) {
        super();
        this.config = config;
    }
}
exports.GeneratorFormatNotValidError = GeneratorFormatNotValidError;
class GeneratorPathNotExists extends Error {
}
exports.GeneratorPathNotExists = GeneratorPathNotExists;
const handleGenerateError = (e) => {
    if (e instanceof GeneratorFormatNotValidError) {
        (0, util_1.log)('Usage Example');
        (0, util_1.log)(`
generator prismaClassGenerator {
	provider	= "prisma-class-generator-strict"
	output		= (string)
	dryRun   	= (boolean)
	useSwagger	= (boolean)
  capitalizeFileName = (boolean)
	seperateRelationFields = (boolean),
}`);
        (0, util_1.log)(`Your Input : ${JSON.stringify(e.config)}`);
        return;
    }
    if (e instanceof GeneratorPathNotExists) {
        (0, util_1.log)('path not valid in generator');
        return;
    }
    console.log('unexpected error occured');
    console.log(e);
};
exports.handleGenerateError = handleGenerateError;
//# sourceMappingURL=error-handler.js.map