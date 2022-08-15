import { DMMF } from '@prisma/generator-helper';
import { PrismaClass } from './components/class';
import { PrismaDecorator } from './components/decorator';
import { PrismaField } from './components/field';
import { PrismaClassGeneratorConfig } from './generator';
export declare class PrismaConvertor {
    static instance: PrismaConvertor;
    private _config;
    private _dmmf;
    get dmmf(): DMMF.Document;
    set dmmf(value: DMMF.Document);
    get config(): PrismaClassGeneratorConfig;
    set config(value: PrismaClassGeneratorConfig);
    static getInstance(): PrismaConvertor;
    getPrimitiveMapTypeFromDMMF: (dmmfField: DMMF.Field) => string;
    extractSwaggerDecoratorFromField: (dmmfField: DMMF.Field) => PrismaDecorator;
    convertModel: (model: DMMF.Model) => PrismaClass[];
    convertModels: () => PrismaClass[][];
    convertField: (dmmfField: DMMF.Field) => PrismaField;
}
