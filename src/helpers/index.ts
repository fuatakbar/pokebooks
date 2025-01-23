export function getEmailName(email: string): string {
    const atIndex = email.indexOf('@');
    if (atIndex === -1) {
        return "Invalid Email Address";
    }
    return email.substring(0, atIndex);
}