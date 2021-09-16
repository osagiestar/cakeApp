import Customer from "./Customer";

test("email must have @ sign", () => {
    // const validEmail = customerList[i].email;
    const {getByText} = render(<Customer/>);
const validEmail = getByText(/j.smith@johnsmith.org/);
expect(validEmail).toHaveTextContent("@");
})