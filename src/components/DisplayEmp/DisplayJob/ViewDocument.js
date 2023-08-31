import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PdfIcon from "../../../assets/img/icons/pdfIcon.png";
import { viewProfileSubtitle } from "../../CustomDesignMUI/CustomMUI";

const ViewDocument = ({ onBackClick }) => {
  const documentData = [
    { name: "Signed Offer Letter.pdf", alt: "pdficon" },
    { name: "NYSC Certificate.pdf", alt: "pdficon" },
    { name: "Guarantor's Form.pdf", alt: "pdficon" },
    { name: "Degree Certificate.pdf", alt: "pdficon" },
    { name: "John Doe CV.pdf", alt: "pdficon" },
    { name: "Birth Certificate.pdf", alt: "pdficon" },
  ];

  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", marginBottom: "30px", borderBottom: 1 }}
      >
        <IconButton onClick={onBackClick}>
          <ArrowBackIcon />
        </IconButton>
        View Job Details / View Documents
      </Typography>
      {documentData.map((document, index) => (
        <Button>
          <Card
            sx={{
              backgroundColor: "var(--primary-highlight-color)",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "15px",
              height: "180px",
              width: "130px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              margin: "15px",
            }}
          >
            <CardMedia component="img" image={PdfIcon} alt={document.alt} />
            <CardContent>
              <Typography sx={viewProfileSubtitle}>{document.name}</Typography>
            </CardContent>
          </Card>
        </Button>
      ))}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "45px",
          marginBottom: "35px",
        }}
      >
        <Button
          sx={{
            background: "var(--primary-color)",
            textTransform: "capitalize",
            color: "var(--plain-white)",
            fontWeight: "bold",
            "&:hover": {
              background: "var(--primary-highlight-color)",
              color: "var(--primary-color)",
            },
            ":focus": {
              outline: "none",
            },
          }}
          variant="outlined"
        >
          Download ALL (Zip)
        </Button>
      </Box>
    </Box>
  );
};

export default ViewDocument;
