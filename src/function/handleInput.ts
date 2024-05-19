export const handleInput = (
  e: React.ChangeEvent<HTMLInputElement>,
  minValue: number,
  action: () => void
) => {
  const value = Number(e.target.value);
  const inputElement = e.target;

  if (value < minValue) {
    inputElement.classList.add('invalid-input');
    console.log("Số tiền không hợp lệ");
  } else {
    inputElement.classList.remove('invalid-input');

    action();
  }
};
