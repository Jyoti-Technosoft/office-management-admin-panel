import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Grid,
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
      <Grid container spacing={5}>
        {documentData.map((document, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Button>
              <Card
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "15px",
                  height: "100%",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={PdfIcon}
                  alt={document.alt}
                />
                <CardContent>
                  <Typography sx={viewProfileSubtitle}>
                    {document.name}
                  </Typography>
                </CardContent>
              </Card>
            </Button>
          </Grid>
        ))}
      </Grid>
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
            color: "white",
            fontWeight: "bold",
            "&:hover": {
              background: "var(--secondary-color)",
              color: "white",
            },
          }}
          variant="contained"
        >
          Download ALL (Zip)
        </Button>
      </Box>
    </Box>
  );
};

export default ViewDocument;
