# sim-manager

Original project setup trying to write various algorithms in JS and expose them through a central configurator.

## Notes
// Age is display-only
// Retirement age vs years until retirement
// Annual contribution
// Retirement salary
// Stock Market Average Growth Rate + user override
// Inflation avg + user override

## Desired Features
- Interest Growth Calculator
- Mortgage Value/Payment Calculator
- Retirement years Calculator
- Net Worth calculator

## Finding the simplest, extensible solution
- A More general formula can be used in some cases:
    balance = (principal - expenses + contributions) * (1 + growth_percent)
- Generic formulas do not work great when the behavior changes from one year to the next
- Potentially, different formulas could be used depending on the factors
- A much more generic approach might be useful

### Income / expense model
- Add incomes and expenses as one-time or recurring payments
- Group incomes & expenses by year, color code by type (green income, red expense), symbols for category
- Recurring allows user to mass populate or auto-complete 


## Notes on specific effects
Inflation
- Effectively increase your retirement salary year over year
- So dramatic, it's almost not worth looking at, want a toggle

Contribution Growth
- Can be ammortized as a percentage by assuming inflation-match or predictable raises
- Actually made in big, unpredictable steps

Mortgages
- Shifts retirement expenses once paid

## Potentially Needed Components
- Optimizing user inputs (minimal inputs, self-describing, etc.)
- Looking up public data (10yr s&p growth avg., avg. mortage rates, house prices)
- Filtering by user area (mortgage rates, house prices)
- Calculating year by year values
- Introducing new factors into yearly values
