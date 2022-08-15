import { Echoable } from '../interfaces/echoable';
import { Decoratable } from '../components/decorator';
export declare class PrismaField extends Decoratable implements Echoable {
    name: string;
    nullable: boolean;
    default?: string;
    type?: any;
    echo: () => string;
    constructor(obj: any);
}
