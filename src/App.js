import React from "react";
import "./App.css";
import { Box, Grid, Button, Slide } from "@material-ui/core"; //importing material ui component
import { ThemeProvider, Divider } from "@material-ui/core"; //importing material ui component
import { theme } from "./theme";

import TextInput from "./Components/TextInput";
import HeadingType from "./Components/HeadingType";
import ToggleButton from "./Components/ToggleButton";
import { useState } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import DatePicker from "./Components/DatePicker";
import SelectNative from "./Components/Select";

function App(props) {
  const currentDate = new Date();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    isRVParkingAllowed: "",
    isOvernightLocation: "",
    isOvernightParking: "",
    isOvernightParkingEnforced: "",
    isInfoCorrect: "",
    stayDate: currentDate,
    confirmationDate: currentDate,
  });
  const handleDateChange = (name, value) => {
    handleInputChange({ target: { name, value } });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleToggleChange = (name, newValue) => {
    if (newValue !== null) {
      setFormData({ ...formData, [name]: newValue });
    }
  };
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Box
          display="flex"
          justifyContent="center"
          textAlign="left"
          alignItems="center"
          minHeight="100vh"
          bgcolor="#FCFCFC"
        >
          <Grid
            xs={12}
            sm={8}
            style={{
              backgroundColor: "#fff",
              minHeight: "100vh",
              height: "100%",
            }}
          >
            <form noValidate style={{ padding: 15, paddingTop: 80 }}>
              <HeadingType
                variant="body"
                text="Report Overnight RV Parking at Idaho Potato Museum & Gifts"
                style={{ fontsize: "24px", fontWeight: "700" }}
              />
              <div className="required-label">
                <span className="esteric">*</span>These fields are required
              </div>
              <Divider />
              <div className="mt-30">
                <ToggleButton
                  required
                  isSubmitted={isSubmitted}
                  value={formData["isRVParkingAllowed"]}
                  name="isRVParkingAllowed"
                  onChange={handleToggleChange}
                  other={true}
                  label={"Is overnight RV Parking allowed?"}
                />
              </div>
              <div className="overflow-hidden">
                <Slide
                  in={formData["isRVParkingAllowed"] === "others"}
                  timeout={500}
                  mountOnEnter
                  unmountOnExit
                >
                  <div className="ml-6">
                    <TextInput
                      name="isRVParkingAllowedOthers"
                      variant="outlined"
                      fullWidth
                      placeholder="Please explain this in detail here..."
                      focused
                      label=""
                      onChange={handleInputChange}
                      value={formData["isRVParkingAllowedOthers"]}
                      maxRows={5}
                      noDivider
                      isSubmitted={isSubmitted}
                      multiline
                      required
                    />
                  </div>
                </Slide>
              </div>
              <Divider />
              <div className="overflow-hidden">
                <Slide
                  in={formData["isRVParkingAllowed"] === "no"}
                  timeout={500}
                  mountOnEnter
                  unmountOnExit
                  style={{ overflow: "hidden" }}
                >
                  <div className="mt-30 ml-6">
                    <SelectNative
                      noDivider
                      name="whyNotAllowed"
                      variant="outlined"
                      fullWidth
                      required
                      label="Why is overnight RV Parking not allowed?"
                      onChange={handleInputChange}
                      value={formData["whyNotAllowed"]}
                      isSubmitted={isSubmitted}
                      options={[
                        { vlaue: "storepolicy", text: "store policy" },
                        { vlaue: "localordinance", text: "local ordinance" },
                        { vlaue: "parkinglot", text: "size of parking lot" },
                        { vlaue: "safetyissues", text: "safety issues" },
                        { vlaue: "ohters", text: "ohters" },
                      ]}
                    />
                  </div>
                </Slide>
              </div>
              {formData["isRVParkingAllowed"] === "no" && <Divider />}

              <div className="mt-30">
                <ToggleButton
                  required
                  isSubmitted={isSubmitted}
                  value={formData["isOvernightLocation"]}
                  name="isOvernightLocation"
                  onChange={handleToggleChange}
                  other={false}
                  label={"Did you stay overnight at this location?"}
                />
              </div>
              <Divider />
              <div className="overflow-hidden">
                <Slide
                  in={formData["isOvernightLocation"] === "yes"}
                  timeout={500}
                  mountOnEnter
                  unmountOnExit
                >
                  <div className="mt-30 ml-6 mr-6">
                    <div className="ml-6 mr-6">
                      <Grid xs={12}>
                        <DatePicker
                          value={formData["stayDate"]}
                          onChange={(date) => {
                            handleDateChange("stayDate", date);
                          }}
                          required
                          label={"When did you stay?"}
                        />
                      </Grid>
                    </div>
                  </div>
                </Slide>
              </div>
              {formData["isOvernightLocation"] === "yes" && <Divider />}

              <div className="mt-30">
                <ToggleButton
                  required
                  isSubmitted={isSubmitted}
                  value={formData["isOvernightParking"]}
                  name="isOvernightParking"
                  onChange={handleToggleChange}
                  other={false}
                  label={"Did you confirm the overnight RV Parking policy?"}
                />
              </div>
              <Divider />
              <div className="overflow-hidden">
                <Slide
                  in={formData["isOvernightParking"] === "yes"}
                  timeout={500}
                  mountOnEnter
                  unmountOnExit
                >
                  <div>
                    <div className="mt-30 ml-6">
                      <SelectNative
                        name="confirmPolicy"
                        variant="outlined"
                        noDivider
                        fullWidth
                        required
                        label="How did you confirm the policy?"
                        onChange={handleInputChange}
                        value={formData["confirmPolicy"]}
                        isSubmitted={isSubmitted}
                        options={[
                          { vlaue: "person", text: "in person" },
                          { vlaue: "phone", text: "by phone" },
                          { vlaue: "notConfirmed", text: "did not confirm" },
                        ]}
                      />
                    </div>
                    <Divider />
                    <div className="mt-30 ml-6">
                      <SelectNative
                        name="whoConfirmPolicy"
                        variant="outlined"
                        noDivider
                        fullWidth
                        required
                        label="Who confirmed the policy?"
                        onChange={handleInputChange}
                        value={formData["whoConfirmPolicy"]}
                        isSubmitted={isSubmitted}
                        options={[
                          { vlaue: "associate", text: "associate" },
                          {
                            vlaue: "customerService",
                            text: "customer service",
                          },
                          { vlaue: "fuelDesk", text: "fuel desk" },
                          { vlaue: "manager", text: "manager" },
                          { vlaue: "localAuthority", text: "local authority" },
                          { vlaue: "ohters", text: "ohters" },
                        ]}
                      />
                    </div>
                    <Divider />
                    <div className="mt-30 ml-6 mr-6">
                      <div className="ml-6 mr-6">
                        <Grid xs={12}>
                          <DatePicker
                            value={formData["confirmationDate"]}
                            onChange={(date) =>
                              handleDateChange("confirmationDate", date)
                            }
                            required
                            label={"When did you confirm the policy?"}
                          />
                        </Grid>
                      </div>
                    </div>
                    <Divider />
                  </div>
                </Slide>
              </div>
              <div className="mt-30 space-between">
                <div>
                  <HeadingType
                    variant="body"
                    required="true"
                    text="Is the overnight parking policy enforced?"
                  />
                </div>
                <div>
                  <ToggleButton
                    required
                    isSubmitted={isSubmitted}
                    value={formData["isOvernightParkingEnforced"]}
                    name="isOvernightParkingEnforced"
                    onChange={handleToggleChange}
                    other={true}
                  />
                </div>
              </div>
              <div className="overflow-hidden">
                <Slide
                  in={formData["isOvernightParkingEnforced"] === "others"}
                  timeout={500}
                  mountOnEnter
                  unmountOnExit
                >
                  <div className="ml-6">
                    <TextInput
                      name="parkingPolicy"
                      variant="outlined"
                      fullWidth
                      placeholder="Please explain this in detail here..."
                      focused
                      required
                      label=""
                      onChange={handleInputChange}
                      value={formData["parkingPolicy"]}
                      maxRows={5}
                      isSubmitted={isSubmitted}
                      noDivider
                      multiline
                    />
                  </div>
                </Slide>
                <Divider />
              </div>
              <div className="mt-30 space-between">
                <div>
                  <HeadingType
                    variant="body"
                    required="true"
                    text="Is the information about this place correct?"
                  />
                </div>
                <div>
                  <ToggleButton
                    required
                    isSubmitted={isSubmitted}
                    value={formData["isInfoCorrect"]}
                    name="isInfoCorrect"
                    onChange={handleToggleChange}
                  />
                </div>
              </div>
              <Divider />
              <div className="mt-30 ml-6">
                <TextInput
                  name="comment"
                  variant="outlined"
                  fullWidth
                  placeholder="This is the tying area. Please explain this in detail here..."
                  focused
                  required
                  label="Comment"
                  onChange={handleInputChange}
                  value={formData["comment"]}
                  isSubmitted={isSubmitted}
                  maxRows={7}
                  multiline
                />
              </div>
              <div className="justify-center ml-6">
                <Button
                  style={{
                    padding: "15px 158px",
                    backgroundColor: "#1597C6",
                    color: "white",
                  }}
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => {
                    setIsSubmitted(true);
                  }}
                >
                  SUBMIT
                </Button>
              </div>
            </form>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
