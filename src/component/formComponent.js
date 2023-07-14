import React, { useState } from "react";
import {
  TextField,
  Box,
  Radio,
  FormControlLabel,
  FormHelperText,
  Alert,
  AlertTitle,
  Collapse,
  IconButton,
} from "@mui/material";
import { Icon } from "@iconify/react";

export default function FormComponent() {
  const [selectedValue, setSelectedValue] = useState("a");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState([]);
  const [open, setOpen] = React.useState(true);
  const [successAlert, setSuccessAlert] = useState(false); // State untuk mengontrol tampilan Alert
  const [errorAlert, setErrorAlert] = useState(false); // State untuk mengontrol tampilan Alert warning

  const handleChangeRadio = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setError(!emailPattern.test(value));
  };

  const getSelectedOptionLabel = () => {
    if (selectedValue === "a") {
      return "Email";
    } else if (selectedValue === "b") {
      return "Instagram";
    } else if (selectedValue === "c") {
      return "LinkedIn";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataObj = {
      name: event.target.elements.name.value,
      subject: event.target.elements.subject.value,
      email: selectedValue === "a" ? email : null,
      linkedin:
        selectedValue === "c" ? event.target.elements.linkedin.value : null,
      instagram:
        selectedValue === "b" ? event.target.elements.instagram.value : null,
      pesan: event.target.elements.pesan.value,
    };
    // console.log("Data yang akan dikirim:", formDataObj);

    // const formDataJson = JSON.stringify([formDataObj]);

    // Mengirimkan data ke backend melalui permintaan HTTP (misalnya menggunakan fetch atau axios)
    // Gantikan URL_BACKEND dengan URL yang sesuai dengan endpoint backend Anda
    // fetch("http://127.0.0.1:8000/1", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: formDataJson,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // Proses tanggapan dari backend jika diperlukan
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     // Tangani kesalahan jika terjadi
    //     console.error(error);
    //   });
    try {
      const response = await fetch("http://localhost:8000/1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataObj),
      });

      if (!response.ok) {
        throw new Error("Failed to create Data");
      }

      const result = await response.json();
      setSuccessAlert(true);
      console.log(result);
    } catch (error) {
      console.log(error);
      setErrorAlert(true);
    }
    setOpen(true);
    setTimeout(() => {
      setSuccessAlert(false);
      setErrorAlert(false);
    }, 4000);
    // Menyegarkan form
    // event.target.reset();
    // setEmail("");
    // setError(false);
  };
  return (
    <div>
      <Box
        component="form"
        onSubmit={handleSubmit} // Menambahkan penanganan submit form
        sx={{
          "& .MuiTextField-root": { margin: "10px", width: "100%" },
        }}
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            variant="standard"
            InputProps={{
              sx: {
                color: "white",
                "&::before": {
                  borderBottom: "2px solid rgb(168, 85, 247)",
                },
                "&::after": {
                  borderBottom: "2px solid rgb(168, 85, 247)",
                },
                "&:hover:not(.Mui-disabled):before": {
                  borderBottom: "2px solid rgb(168, 85, 247)",
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: "rgb(168, 85, 247)",
                "&.Mui-focused": {
                  color: "rgb(168, 85, 247)",
                },
              },
            }}
          />
        </div>
        <div>
          <TextField
            required
            id="subject"
            name="subject"
            label="Subject"
            variant="standard"
            InputProps={{
              sx: {
                color: "white",
                "&::before": {
                  borderBottom: "2px solid rgb(168, 85, 247)",
                },
                "&::after": {
                  borderBottom: "2px solid rgb(168, 85, 247)",
                },
                "&:hover:not(.Mui-disabled):before": {
                  borderBottom: "2px solid rgb(168, 85, 247)",
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: "rgb(168, 85, 247)",
                "&.Mui-focused": {
                  color: "rgb(168, 85, 247)",
                },
              },
            }}
          />
        </div>
        <div className="flex justify-center">
          <FormControlLabel
            control={
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChangeRadio}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
                sx={{
                  color: selectedValue === "a" ? "purple" : "rgb(168, 85, 247)",
                  "&.Mui-checked": {
                    color: "purple",
                  },
                }}
              />
            }
            sx={{
              color: selectedValue === "a" ? "purple" : "rgb(168, 85, 247)",
            }}
            label="Email"
          />
          <FormControlLabel
            control={
              <Radio
                checked={selectedValue === "c"}
                onChange={handleChangeRadio}
                value="c"
                name="radio-buttons"
                inputProps={{ "aria-label": "C" }}
                sx={{
                  color: selectedValue === "c" ? "purple" : "rgb(168, 85, 247)",
                  "&.Mui-checked": {
                    color: "purple",
                  },
                }}
              />
            }
            sx={{
              color: selectedValue === "c" ? "purple" : "rgb(168, 85, 247)",
            }}
            label="LinkedIn"
          />
          <FormControlLabel
            control={
              <Radio
                checked={selectedValue === "b"}
                onChange={handleChangeRadio}
                value="b"
                name="radio-buttons"
                inputProps={{ "aria-label": "B" }}
                sx={{
                  color: selectedValue === "b" ? "purple" : "rgb(168, 85, 247)",
                  "&.Mui-checked": {
                    color: "purple",
                  },
                }}
              />
            }
            sx={{
              color: selectedValue === "b" ? "purple" : "rgb(168, 85, 247)",
            }}
            label="Instagram"
          />
        </div>

        {selectedValue === "c" && (
          <TextField
            required
            id="linkedin"
            name="linkedin"
            label="LinkedIn"
            variant="standard"
            InputProps={{
              sx: {
                color: "white",
                "&::before": {
                  borderBottom: "2px solid rgb(168, 85, 247)",
                },
                "&::after": {
                  borderBottom: "2px solid rgb(168, 85, 247)",
                },
                "&:hover:not(.Mui-disabled):before": {
                  borderBottom: "2px solid rgb(168, 85, 247)",
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: "rgb(168, 85, 247)",
                "&.Mui-focused": {
                  color: "rgb(168, 85, 247)",
                },
              },
            }}
          />
        )}
        {selectedValue === "b" && (
          <TextField
            required
            id="instagram"
            name="instagram"
            label="Instagram"
            variant="standard"
            InputProps={{
              sx: {
                color: "white",
                "&::before": {
                  borderBottom: "2px solid rgb(168, 85, 247)",
                },
                "&::after": {
                  borderBottom: "2px solid rgb(168, 85, 247)",
                },
                "&:hover:not(.Mui-disabled):before": {
                  borderBottom: "2px solid rgb(168, 85, 247)",
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: "rgb(168, 85, 247)",
                "&.Mui-focused": {
                  color: "rgb(168, 85, 247)",
                },
              },
            }}
          />
        )}
        {selectedValue === "a" && (
          <div>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              variant="standard"
              value={email}
              onChange={handleChange}
              aria-describedby="my-helper-text"
              InputProps={{
                sx: {
                  color: "white",
                  "&::before": {
                    borderBottom: "2px solid rgb(168, 85, 247)",
                  },
                  "&::after": {
                    borderBottom: "2px solid rgb(168, 85, 247)",
                  },
                  "&:hover:not(.Mui-disabled):before": {
                    borderBottom: "2px solid rgb(168, 85, 247)",
                  },
                },
              }}
              InputLabelProps={{
                sx: {
                  color: "rgb(168, 85, 247)",
                  "&.Mui-focused": {
                    color: "rgb(168, 85, 247)",
                  },
                },
              }}
            />
            {error && (
              <FormHelperText id="my-helper-text" error>
                Email tidak valid
              </FormHelperText>
            )}
          </div>
        )}

        <div>
          <TextField
            required
            id="pesan"
            name="pesan"
            label="Multiline"
            multiline
            rows={4}
            variant="standard"
            InputProps={{
              sx: {
                color: "white",
                "&::before": {
                  borderBottom: "2px solid rgb(168, 85, 247)",
                },
                "&::after": {
                  borderBottom: "2px solid rgb(168, 85, 247)",
                },
                "&:hover:not(.Mui-disabled):before": {
                  borderBottom: "2px solid rgb(168, 85, 247)",
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: "rgb(168, 85, 247)",
                "&.Mui-focused": {
                  color: "rgb(168, 85, 247)",
                },
              },
            }}
          />
        </div>
        <div className="flex justify-end pt-5">
          <button
            className="button_custom_send type1"
            type="submit"
            variant="contained"
          >
            <span className="btn-txt">Send</span>
          </button>
        </div>
      </Box>
      {successAlert && (
        <Collapse
          in={open}
          className="absolute w-[250px] md:w-[550px] top-24 right-8"
          style={{ position: "fixed" }}
        >
          <Alert
            severity="success"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                {/* <CloseIcon fontSize="inherit" /> */}
                <Icon
                  icon="line-md:close-small"
                  width={25}
                  style={{ color: "red" }}
                />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            <AlertTitle>Success</AlertTitle>
            Pesan akan dibalas melalui{" "}
            <strong>{getSelectedOptionLabel()}</strong>
          </Alert>
        </Collapse>
      )}
      {errorAlert && (
        <Collapse
          in={open}
          className="absolute w-[250px] md:w-[550px] top-24 right-8"
          style={{ position: "fixed" }}
        >
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                {/* <CloseIcon fontSize="inherit" /> */}
                <Icon
                  icon="line-md:close-small"
                  width={25}
                  style={{ color: "red" }}
                />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            <AlertTitle>Error</AlertTitle>
            Pesan form melebihi batas harian, silahkan hubungi melalui{" "}
            <strong>Media Sosial</strong> tertera
          </Alert>
        </Collapse>
      )}
    </div>
  );
}
