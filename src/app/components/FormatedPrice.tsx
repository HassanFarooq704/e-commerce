interface Amount {
    amount: number
}

const FormatedPrice = ({ amount }: Amount) => {
    const formatedAmount = new Number(amount).toLocaleString("en-Us", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2
    });
    return (
        <span>{formatedAmount}</span>
    )
}

export default FormatedPrice