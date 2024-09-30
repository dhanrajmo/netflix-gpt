export const checkValidateData = (email, password) => {
    const isEmailVaild = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(email);
    const isPassvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isEmailVaild) return 'Email Id is not valid';
    if (!isPassvalid) return 'Password is not valid';

    return null
}