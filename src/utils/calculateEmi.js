export function calculateEmi(principal, annualRate, tenureYears) {
    const monthlyRate = annualRate / 12 / 100;
    const tenureMonths = tenureYears * 12;
    const emi =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
        (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    const totalAmount = emi * tenureMonths;
    const totalInterest = totalAmount - principal;

    return {
        monthlyEMI: emi.toFixed(2),
        totalPrincipal: principal.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        totalAmount: totalAmount.toFixed(2),
    };
}

export default calculateEmi;