import React, { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { ConnectFormWrapper } from "../styles/StyledConnectForm";
import { useRouter } from "next/router";
import { StyledText } from "../styles/StyledText";
import { HorizontalMargin, VerticalMargin } from "../styles/StyledMargin";
import { Link } from "next/link";
import { HorizontalDivider } from "../styles/StyledDivider";
import Colors from "../constants/Colors";
import LoadingSpinner from "./LoadingSpinner";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";

const EventForm = ({
  createCryptoEvent,
  state,
  cleanReducers,
  projectId,
  setShowModal,
}) => {
  const router = useRouter();

  const [formValues, setFormValues] = useState({
    projectType: "",
    otherProjectType: "",
    currentDate: new Date(),
    link: "",
  });

  useEffect(() => {
    return () => {
      cleanReducers();
    };
  }, []);

  return (
    <ConnectFormWrapper>
      <Formik
        enableReinitialize={true}
        initialValues={formValues}
        validationSchema={Yup.object({
          projectType: Yup.string().required("This field is required."),
        })}
        onSubmit={async (values, actions) => {
          try {
            await createCryptoEvent(values, projectId);
            setShowModal(false);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {(formik) => (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <form onSubmit={formik.handleSubmit}>
              <div className="input-wrapper">
                <StyledText h5 mono regular color="black">
                  EVENT TYPE
                </StyledText>
                <Field
                  {...formik.getFieldProps("projectType")}
                  className="text-input"
                  as="select"
                  id="projectType"
                  label="Nom du projet"
                  fullWidth={true}
                  placeholder="Ex: ICO, Listing.."
                >
                  <option value="listing">Listing</option>
                  <option value="ico">ICO</option>
                  <option value="airdrop">Airdrop</option>
                  <option value="other">Other</option>
                </Field>
                <StyledText color="red">
                  <ErrorMessage name="projectType" />
                </StyledText>
              </div>

              {formik.values.projectType == "other" && (
                <div className="input-wrapper">
                  <StyledText h5 mono regular color="black">
                    OTHER EVENT TYPE
                  </StyledText>
                  <Field
                    {...formik.getFieldProps("otherProjectType")}
                    className="text-input"
                    id="otherProjectType"
                    label="Nom du projet"
                    fullWidth={true}
                    placeholder="Ex: Launching app"
                  />

                  <StyledText color="red">
                    <ErrorMessage name="otherProjectType" />
                  </StyledText>
                </div>
              )}

              <div className="input-wrapper">
                <StyledText h5 mono regular color="black">
                  EVENT DATE
                </StyledText>
                <DateTimePicker
                  renderInput={(props) => (
                    <TextField {...props} variant="standard" />
                  )}
                  value={formik.values.currentDate}
                  onChange={(newValue) => {
                    formik.setFieldValue("currentDate", newValue);
                  }}
                />
              </div>

              <div className="input-wrapper">
                <StyledText h5 mono regular color="black">
                  LINK
                </StyledText>
                <Field
                  {...formik.getFieldProps("link")}
                  className="text-input"
                  id="link"
                  label="Nom du projet"
                  fullWidth={true}
                  placeholder="Ex: www.hivefive.bz"
                />

                <StyledText color="red">
                  <ErrorMessage name="link" />
                </StyledText>
              </div>
              <HorizontalMargin m2 />
              <div className="button-wrapper">
                <button className="form-button" type="submit">
                  <StyledText link h4>
                    Valider
                  </StyledText>
                </button>
              </div>
            </form>
          </LocalizationProvider>
        )}
      </Formik>
    </ConnectFormWrapper>
  );
};

export default EventForm;
