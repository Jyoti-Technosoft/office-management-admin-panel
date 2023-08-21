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
    marginTop: "10px",
    textTransform: "capitalize",
    display: "flex",
    alignItems: "left",
    justifyContent: "left",
    padding: "15px 20px",
    background: "white",
    width: "100%",
    border: 'none',
    borderRadius: "10px",
    "&:hover": {
        background: "var(--primary-highlight-color)",
        color: "var(--primary-color)",
        fontWeight: 'bold',
    }
}
export const viewProfileTitle = {
    fontWeight: "bold",
    fontSize: "18px" ,
}
export const viewProfileSubtitle = {
    fontSize: "12px",
    color: 'var(--text-gray-color)',

}
export const viewEducationBox = {
    height: "auto",
    maxWidth: "100%",
    backgroundColor: "var(--primary-highlight-color)",
    borderRadius: "10px",
    padding: "15px",
    marginTop: "15px",
}
export const viewEducationTitle = {
    fontWeight: "bold",
    fontSize: "16px", 
    color: 'var(--text-gray-color)',
}
export const viewExperiencePosition = {
    fontWeight: "bold",
    fontSize: "13px" 
}
// FOR TABLES
export const tableHeadCell = {
    color:"var(--primary-text-color)",
    fontWeight:"bold",
}
export const tableBodyCell = {
    color:"var(--primary-text-color)",
}
export const tableMainHead = {
    fontWeight: 'bold',
    // marginTop: '50px',
    color:"var(--primary-text-color)",
}