// Field-level validations: https://redux-form.com/7.2.1/examples/fieldlevelvalidation/

export const REQUIRED = value =>
	value ? undefined : 'Oh hey! Don’t leave me empty'
