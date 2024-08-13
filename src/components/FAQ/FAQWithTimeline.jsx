import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from "@mui/material";
import { Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import CakeIcon from "@mui/icons-material/Cake";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import SchoolIcon from "@mui/icons-material/School";
import { FaUniversity } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { HiBuildingLibrary } from "react-icons/hi2";
import { FaFileSignature } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { PiUniteBold } from "react-icons/pi";
import { GiOppositeHearts } from "react-icons/gi";
import { GiPublicSpeaker } from "react-icons/gi";
import { GiReturnArrow } from "react-icons/gi";
import { MdVerified } from "react-icons/md";
import { GiCrossMark } from "react-icons/gi";
import { GiBugleCall } from "react-icons/gi";
import { GiSunrise } from "react-icons/gi";
import { GiStarMedal } from "react-icons/gi";
import { GiMedallist } from "react-icons/gi";
import { GiRuleBook } from "react-icons/gi";
import { GiUbisoftSun } from "react-icons/gi";
import { PiEqualizerBold } from "react-icons/pi";
import { MdAutoGraph } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";
import { GiSecretBook } from "react-icons/gi";
import { GiColdHeart } from "react-icons/gi";
import "./faq.css"; // Import your CSS file

const theme = createTheme({
  typography: {
    fontFamily: "'Archivo', sans-serif",
  },
});

// Timeline Component
const EducationTimeline = ({ title }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Timeline position="alternate" className="custom-timeline">
          {/* PRIMARY COLOR */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="#333"
            >
              December 25, 1876
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fff50" }}
              >
                <CakeIcon style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fff50, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Birth of Quaid-e-Azam
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Born in Karachi, British India.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* PRIMARY VARIANT COLOR */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="#333"
            >
              1882
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fffc8" }}
              >
                <HistoryEduIcon style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fffc8, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Early Education in Karachi
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Began primary education in Karachi.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* PRIMARY COLOR */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="#333"
            >
              1887
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fff50" }}
              >
                <SchoolIcon style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fff50, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Attended Sindh Madrasatul Islam
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Enrolled at a prestigious school.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* PRIMARY VARIANT COLOR */}

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="#333"
            >
              1892
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fffc8" }}
              >
                <FaUniversity size={22} style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fffc8, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Higher Education in England
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Enrolled at Lincoln's Inn, London.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* PRIMARY COLOR */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="#333"
            >
              1896
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fff50" }}
              >
                <GoLaw size={22} style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fff50, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Returned to British India
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Became a successful barrister.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* PRIMARY VARIANT COLOR */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="#333"
            >
              1897
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fffc8" }}
              >
                <HiBuildingLibrary size={22} style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fffc8, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Practiced Law in Bombay
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Started legal career in Bombay.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </ThemeProvider>
  );
};

const PoliticalTimeline = ({ title }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Timeline position="alternate" className="custom-timeline">
          {/* PRIMARY COLOR */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="#333"
            >
              1906
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fff50" }}
              >
                <FaFileSignature size={22} style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fff50, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Joined All India Congress
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Beginning of political engagement.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* PRIMARY VARIANT COLOR */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="#333"
            >
              1913
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fffc8" }}
              >
                <FaHandshake size={22} style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fffc8, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Joined All India Muslim League
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Advocate for Muslim rights.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* PRIMARY COLOR */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="#333"
            >
              1916
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fff50" }}
              >
                <PiUniteBold size={22} style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fff50, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Lucknow Pact with Congress
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Hindu-Muslim unity for representation.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* PRIMARY VARIANT COLOR */}

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="#333"
            >
              1920
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fffc8" }}
              >
                <FaFileSignature size={22} style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fffc8, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Resigned from Congress
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Disillusioned with non-cooperation movement.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* PRIMARY COLOR */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="#333"
            >
              1928
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fff50" }}
              >
                <GiOppositeHearts size={22} style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fff50, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Nehru Report Opposition
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Advocated for Muslim safeguards.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* PRIMARY VARIANT COLOR */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="#333"
            >
              1930
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fffc8" }}
              >
                <GiPublicSpeaker size={22} style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fffc8, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Allahabad Address by Iqbal
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Idea of separate Muslim state.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* PRIMARY COLOR */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="#333"
            >
              1934
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fff50" }}
              >
                <GiReturnArrow size={22} style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fff50, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Returned to Indian Politics
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Revival of Muslim League leadership.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* PRIMARY VARIANT COLOR */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="#333"
            >
              1940
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fffc8" }}
              >
                <MdVerified size={22} style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fffc8, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Lahore Resolution Passed
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Demand for Pakistan creation.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* PRIMARY COLOR */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="#333"
            >
              1942
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fff50" }}
              >
                <GiCrossMark size={22} style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fff50, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Cripps Mission Rejection
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Insufficient Muslim autonomy.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* PRIMARY VARIANT COLOR */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="#333"
            >
              1943
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fffc8" }}
              >
                <GiPublicSpeaker size={22} style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fffc8, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Karachi Session Speech
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Reaffirmed Pakistan demand.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* PRIMARY COLOR */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="#333"
            >
              1946
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fff50" }}
              >
                <GiBugleCall size={22} style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fff50, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Direct Action Day Call
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Civil disobedience for Pakistan.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* PRIMARY VARIANT COLOR */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="#333"
            >
              1947
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fffc8" }}
              >
                <GiSunrise size={22} style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fffc8, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Pakistan's Independence Achieved
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Father of the new nation.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* PRIMARY COLOR */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="#333"
            >
              1947
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fff50" }}
              >
                <GiStarMedal size={22} style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fff50, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  First Governor-General of Pakistan
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Leadership of independent Pakistan.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </ThemeProvider>
  );
};

const VisionTimeline = ({ title }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Timeline position="alternate" className="custom-timeline">
          {/* PRIMARY COLOR */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fff50" }}
              >
                <GiMedallist size={22} style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fff50, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Unity, Faith, Discipline
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  National solidarity and strong ethics.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* PRIMARY VARIANT COLOR */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fffc8" }}
              >
                <GiRuleBook size={22} style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fffc8, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Democracy
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Constitutional rule and justice for all.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* PRIMARY COLOR */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fff50" }}
              >
                <GiUbisoftSun size={22} style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fff50, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Secularism
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Religious freedom with a neutral state.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* PRIMARY VARIANT COLOR */}

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fffc8" }}
              >
                <PiEqualizerBold size={22} style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fffc8, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Equality
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Equal rights and minority protection.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* PRIMARY COLOR */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fff50" }}
              >
                <MdAutoGraph size={22} style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fff50, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Economic Growth
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Self-reliance through industrial and agricultural development.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* PRIMARY VARIANT COLOR */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fffc8" }}
              >
                <IoSchoolSharp size={22} style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fffc8, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Education
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Focus on literacy, science, and technology.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* PRIMARY COLOR */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fff50" }}
              >
                <GiSecretBook size={22} style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fff50", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fff50, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Independent Foreign Policy
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Peaceful and non-aligned relations.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* PRIMARY VARIANT COLOR */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
              <TimelineDot
                color="primary"
                sx={{ boxShadow: 3, p: 1.3, bgcolor: "#0fffc8" }}
              >
                <GiColdHeart size={22} style={{ color: "white" }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#0fffc8", height: 4 }} />
            </TimelineSeparator>

            <TimelineContent>
              <Box
                sx={{
                  ml: 1,
                  py: "12px",
                  px: 2,
                  background: "linear-gradient(90deg, #0fffc8, transparent)",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Social Reforms
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Empowerment of women and societal progress.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </ThemeProvider>
  );
};

// Educational Accordion Component
const EducationalAccordion = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (isExpanded) => {
    setExpanded(isExpanded);
  };

  return (
    <>
      <Accordion
        expanded={expanded}
        onChange={(e, isExpanded) => handleChange(isExpanded)}
        className="faq-accordion"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
          className="faq-summary"
        >
          <Typography variant="h6" className="faq-question">
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="faq-details">
          <EducationTimeline title={title} />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

// Political Accordion Component
const PoliticalAccordion = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (isExpanded) => {
    setExpanded(isExpanded);
  };

  return (
    <>
      <Accordion
        expanded={expanded}
        onChange={(e, isExpanded) => handleChange(isExpanded)}
        className="faq-accordion"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
          className="faq-summary"
        >
          <Typography variant="h6" className="faq-question">
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="faq-details">
          <PoliticalTimeline title={title} />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

// Vision Accordion Component
const VisionAccordion = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (isExpanded) => {
    setExpanded(isExpanded);
  };

  return (
    <>
      <Accordion
        expanded={expanded}
        onChange={(e, isExpanded) => handleChange(isExpanded)}
        className="faq-accordion"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
          className="faq-summary"
        >
          <Typography variant="h6" className="faq-question">
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="faq-details">
          <VisionTimeline title={title} />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

// Main Component
const FAQWithTimeline = () => {
  return (
    <Container className="faq-container">
      <EducationalAccordion
        title="Early Life & Education"
        content={<EducationTimeline />}
      />

      <PoliticalAccordion
        title="Political Career Highlights"
        content={<PoliticalTimeline />}
      />

      <VisionAccordion title="Jinnah's Vision" content={<VisionTimeline />} />
    </Container>
  );
};

export default FAQWithTimeline;
