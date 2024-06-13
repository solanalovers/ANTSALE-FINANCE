const changeForm = (setForm: any) => {
    return (value: any) => setForm((prev: any) => ({ ...prev, ...value }))
}

const requiredField = (value: any) => ({
    isInvalid: value === '',
    errorMessage: 'This input is required',
    isRequired: true
})

const checkNumber = (value: string) => /^\d*\.?\d*$/.test(value);

function getBase64(file: File) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function () {
            resolve(reader.result);
        };

        reader.onerror = function (error) {
            reject('Error: ' + error);
        };
    });
}
export { changeForm, requiredField, checkNumber, getBase64 }
