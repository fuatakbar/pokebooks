export function getEmailName(email: string): string {
    const atIndex = email.indexOf('@');
    if (atIndex === -1) {
        return "Invalid Email Address";
    }
    return email.substring(0, atIndex);
}

export function pokeNumbering(number: number | string): string {
    const num = Number(number);
    if (isNaN(num)) {
        throw new Error("Invalid number input");
    }
    return num.toString().padStart(4, '0');
}