// Use Intl formatter to format currency with undefinedas local so it prints number based on where user is:
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
 currency: "CAD", style: "currency"
})

export function formatCurrency(number:number) {
 return CURRENCY_FORMATTER.format(number)
}