const changeForm = (setForm: any) => {
    return (value: any) => setForm((prev: any) => ({ ...prev, ...value }))
}

const requiredField = (value: any) => ({
    isInvalid: value === '',
    errorMessage: 'This input is required',
    isRequired: true
})

export { changeForm, requiredField }
