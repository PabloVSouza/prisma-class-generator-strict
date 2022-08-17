import { FIELD_TEMPLATE, FIELD_TEMPLATE_DEFAULT } from '../templates/field'
import { Echoable } from '../interfaces/echoable'
import { Decoratable } from '../components/decorator'

export class PrismaField extends Decoratable implements Echoable {
	name: string
	nullable: boolean
	default?: string
	type?: any

	echo = () => {
		let name = this.name
		const isRelation = this.type.indexOf('[]') > -1

		name =
			this.nullable || isRelation
				? `${name}?`
				: `${name}${!this.default ? '!' : ''}`
		const template = this.default ? FIELD_TEMPLATE_DEFAULT : FIELD_TEMPLATE
		return template
			.replace('#!{NAME}', name)
			.replace('#!{TYPE}', this.type)
			.replace('#!{DECORATORS}', this.echoDecorators())
			.replace('#!{DEFAULT}', this.default ?? 'undefined')
	}

	constructor(obj) {
		super(obj)
	}
}
