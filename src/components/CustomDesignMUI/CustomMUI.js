export const InputLable = {
    typography: "subtitle2",
    fontWeight: "bold",
    padding: "20px 0 0 0",
    color: 'var(--primary-color)',
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
};
export const InputField = {
    width: "100%",
    background: "var(--white-color)",
    borderRadius: "10px",
    marginBottom: '25px',
};
export const InputFieldProps = () => {
    return {
        // height: "4px",
        fontSize: "14px",
    };
}
export const errorMessageDesign = {
    color: "red",
    fontSize: '12px',
}
export const DashboardProfileButtons = {
    marginTop: "12px",
    textTransform: "capitalize",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 20px",
    background: "white",
    color: "black",
    height: "40px",
    width: "100%",
    borderRadius: "10px",
    "&:hover": {
        background: "var(--secondary-color)",
        color: "white",
        fontWeight: 'bold',
    }
}