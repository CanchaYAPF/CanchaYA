export const isNameValid = (name) => {
    return /^[A-Za-z]+$/.test(name);
};
export const isLastnameValid = (lastname) => {
    return /^[A-Za-z]+$/.test(lastname);
};
export const isPasswordValid = (password) => {
    return password.length >= 6 &&
        /[A-Z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[^A-Za-z0-9]/.test(password);
};
export const isPasswordRepeated = (password, repeatPassword) => {
    return password === repeatPassword;
};

export const isPhoneValid = (phone) => {
    return /^[0-9]+$/.test(phone);
};

export const isBirthdateValid = (birthdate) => {
    if (!birthdate ) {
        return false;
    } else {
        const currentDate = new Date();
        const birthdateDateFormat = new Date(birthdate);
        const age = currentDate.getFullYear() - birthdateDateFormat.getFullYear();
        return age >= 15 && age<=90  ? true : false;
    }
}
