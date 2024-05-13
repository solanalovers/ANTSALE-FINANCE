const changeForm = (setForm: any) => {
    return (value: any) => setForm((prev: any) => ({ ...prev, ...value }))
}

export { changeForm }
