import { Typography } from "@mui/material";
import { SecondaryPageHost } from "../../layout/SecondaryPage";
import Section from "../../layout/Section";

const ContactUs = () => {
  return (
    <SecondaryPageHost>
      <Typography textAlign={"center"} variant="h3">
        Contact Us
      </Typography>
      <Section title="Contact Us">
        You can contact the team at{" "}
        <a href="mailto:cgcc@clemson.edu">cgcc@clemson.edu</a>!
      </Section>
      <Section title="Want to Collaborate or Volunteer?">
        We are always looking for collaborators and volunteers to help with the
        camp. Feel free to reach out to us at our{" "}
        <a href="mailto:cgcc@clemson.edu">email</a> if you're interested!
      </Section>
      <Section title="Want to Sponsor the Camp?">
        We'd love to provide our campers with swag and godies that are shipped
        to their homes before our virtual camp every year. We could also like to support
        our volunteers if at all possible for all the time that they devote to
        this camp. If you'd like to help fund our virtual camp, please{" "}
        <a href="mailto:cgcc@clemson.edu">email us</a>.
      </Section>
    </SecondaryPageHost>
  );
};

export default ContactUs;
