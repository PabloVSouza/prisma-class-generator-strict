import { GeneratorOptions } from '@prisma/generator-helper';
import * as prettier from 'prettier';
export declare const GENERATOR_NAME = "Prisma Class Generator";
export interface PrismaClassGeneratorConfig {
    useSwagger: boolean;
    dryRun: boolean;
    makeIndexFile: boolean;
    seperateRelationFields: boolean;
    use: boolean;
}
export declare class PrismaClassGenerator {
    static instance: PrismaClassGenerator;
    _options: GeneratorOptions;
    _prettierOptions: prettier.Options;
    rootPath: string;
    clientPath: string;
    constructor(options?: GeneratorOptions);
    get options(): GeneratorOptions;
    set options(value: GeneratorOptions);
    get prettierOptions(): prettier.Options;
    set prettierOptions(value: prettier.Options);
    static getInstance(options?: GeneratorOptions): PrismaClassGenerator;
    getClientImportPath(): string;
    setPrismaClientPath(): void;
    run: () => Promise<void>;
    getConfig: () => PrismaClassGeneratorConfig;
}
