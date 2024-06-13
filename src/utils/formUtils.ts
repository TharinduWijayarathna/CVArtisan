export const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setState: React.Dispatch<React.SetStateAction<any>>
  ) => {
    const { name, value } = event.target;
    setState((prevState: any) => ({ ...prevState, [name]: value }));
  };
  