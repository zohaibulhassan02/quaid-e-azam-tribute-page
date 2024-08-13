import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUserGraduate } from "react-icons/fa";
import { GiCrossroad } from "react-icons/gi";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { TbExchange } from "react-icons/tb";
import { IoHandRight } from "react-icons/io5";
import { GiFreedomDove } from "react-icons/gi";
import { IoHourglassOutline } from "react-icons/io5";

const Timeline = () => {
  return (
    <section id="timeline">
      <h5>Quaid-e-Azam: A Legacy</h5>
      <h2>From Origins to Independence</h2>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0fff50", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #0fffc8" }}
          date="1876 - 1896"
          iconStyle={{
            background: "#0fff50",
            color: "#000",
          }}
          icon={<FaUserGraduate />}
        >
          <h3 className="vertical-timeline-element-title">
            Early Life and Education
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            The Making of a Visionary Leader
          </h4>
          <p>
            Born in Karachi, Studied law in London; became the youngest Indian
            barrister.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0fff50", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #0fffc8" }}
          date="1896 - 1916"
          iconStyle={{
            background: "#0fff50",
            color: "#000",
          }}
          icon={<GiCrossroad />}
        >
          <h3 className="vertical-timeline-element-title">
            Political Beginnings
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Emergence on the Indian Political Scene
          </h4>
          <p>
            Joined the Indian National Congress (INC),Joined the All-India
            Muslim League, promoting Hindu-Muslim unity.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0fff50", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #0fffc8" }}
          date="1916 - 1920"
          iconStyle={{
            background: "#0fff50",
            color: "#000",
          }}
          icon={<FaBalanceScaleLeft />}
        >
          <h3 className="vertical-timeline-element-title">
            The Advocate of Hindu-Muslim Unity
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Championing Muslim Rights in British India
          </h4>
          <p>
            Played a key role in the Lucknow Pact. Resigned from the INC over
            differences with Gandhi.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0fff50", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #0fffc8" }}
          date="1920 - 1930"
          iconStyle={{
            background: "#0fff50",
            color: "#000",
          }}
          icon={<TbExchange />}
        >
          <h3 className="vertical-timeline-element-title">
            Shift Towards Muslim Rights
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            A New Focus on Protecting Muslim Identity
          </h4>
          <p>
            Resigned from INC, Proposed the "Delhi Muslim Proposals", Presented
            the "Fourteen Points" as a framework for Muslim demands.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0fff50", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #0fffc8" }}
          date="1930 - 1940"
          iconStyle={{
            background: "#0fff50",
            color: "#000",
          }}
          icon={<IoHandRight />}
        >
          <h3 className="vertical-timeline-element-title">
            Demand for Pakistan
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            The Architect of the Two-Nation Theory
          </h4>
          <p>
            Returned to India to lead the Muslim League, Lahore Resolution
            called for a separate Muslim state.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0fff50", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #0fffc8" }}
          date="1940 - 1947"
          iconStyle={{
            background: "#0fff50",
            color: "#000",
          }}
          icon={<GiFreedomDove />}
        >
          <h3 className="vertical-timeline-element-title">
            The Road to Independence
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Paving the Way for Pakistan's Creation
          </h4>
          <p>
            Rejected the Cripps Mission, Failed talks with Gandhi at Malabar
            Hill, Initially accepted, then rejected the Cabinet Mission Plan due
            to Congress's stance, Pakistan was created; Jinnah became the first
            Governor-General.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0fff50", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #0fffc8" }}
          date="1947 - 1948"
          iconStyle={{
            background: "#0fff50",
            color: "#000",
          }}
          icon={<IoHourglassOutline />}
        >
          <h3 className="vertical-timeline-element-title">Final Years</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Defining a Nation and Leaving a Legacy
          </h4>
          <p>
            Addressed Pakistan's Constituent Assembly, envisioning a secular,
            inclusive state, Passed away in Karachi, a year after Pakistan's
            creation.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;
