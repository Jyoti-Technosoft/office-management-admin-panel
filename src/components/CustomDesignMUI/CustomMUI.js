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
    marginBottom: '10px',
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
    marginTop: "20px",
    textTransform: "capitalize",
    
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px 20px",
    background: "white",
    color: "black",
    width: "100%",
    border: 'none',
    borderRadius: "10px",
    "&:hover": {
        background: "var(--secondary-color)",
        color: "white",
        fontWeight: 'bold',
    }
}
export const viewProfileTitle = {
    fontWeight: "bold",
    fontSize: "18px" 
}
export const viewProfileSubtitle = {
    fontSize: "12px",
}
export const viewEducationBox = {
    height: "auto",
    maxWidth: "100%",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "15px",
    marginTop: "15px",
}
export const viewEducationTitle = {
    fontWeight: "bold",
    fontSize: "16px" 
}
export const viewExperiencePosition = {
    fontWeight: "bold",
    fontSize: "13px" 
}