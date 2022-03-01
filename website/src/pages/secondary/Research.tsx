import { Typography } from "@mui/material";
import { SecondaryPageHost } from "../../layout/SecondaryPage";
import Section from "../../layout/Section";

export {};

const Research = () => {
  return (
    <SecondaryPageHost>
      <Typography variant="h3" paddingBottom={3} textAlign="center">
        Research
      </Typography>
      <Section title="Our Goals">
        For the past two summers, the CGCC team has been hosting these camps
        with the goal of introducing autistic students to their potential in
        video game development. While we will always keep this goal priority
        number 1, we also conduct these camps to perform research in autism and
        computer science education. Through the previous two camps alone, we
        have already found that events like these appear to help students
        improve their communication and collaboration skills, both of which are
        important to the field of computer science in general and are seen as
        challenges for autistic students. While we continue to try to make
        computer science more accessible to neurodiverse individuals, we aim to
        continue further developing the research field at the same time.
        However, we cannot achieve this without the help of you!
      </Section>
      <Section title="What does it mean to participate in CGCC Research">
        <p>
          By allowing your child to participate in the research aspects of the
          camp, you are allowing them to help us progress the field of computer
          science education for neurodiverse individuals. Taking part in the
          research aspects of the camp do not change the camp experience for
          students. In fact, your student likely wont even remember there was a
          research aspect to the camp at all. Part of the general camp
          experience is providing feedback at the end of the camp. We collect
          this feedback from every student in a group format so that next year
          we can attempt to make the camp an even better experience. By allowing
          your child to participate in the research side of camp, all you are
          consenting to is for us to use their anonymous responses in our
          publications, as well as any other points of interest we pick up when
          we review camp recordings (such as anonymized quotes that hint at an
          improvement in communication skills).
        </p>
        <p>
          If you are on the fence about whether you should allow your child to
          participate in the research side of CGCC, or have any questions or
          concerns about how we do research at CGCC, feel free to reach out to
          us here!
        </p>
      </Section>
      <Section title="Check out our publications from previous camps!">
        <ol>
          <li>
            Moster, M., Kokinda, E., Re, M., Dominic, J., Lehmann, J., Begel,
            A., Rodeghero, P. "'Can You Help Me?' An Experience Report of
            Teamwork in a Game Coding Camp for Autistic High School Students",
            to appear in Proc. of the 44th IEEE/ACM International Conference on
            Software Engineering - Software Engineering Education and Training
            Track (ICSE SEET '22), Pittsburgh, PA, USA, May 21-29, 2022.
            <br />[
            <a href="https://doi.org/10.5281/zenodo.5902445">camp materials</a>]
          </li>
          <li>
            Begel, A., Dominic, J., Phillis, C., Beeson, T., Rodeghero, P. "How
            a Remote Video Game Coding Camp Improved Autistic College Students'
            Self-Efficacy in Communication", in Proc. of the 51st Technical
            Symposium on Computer Science Education (SIGCSE’21), Toronto,
            Canada, March 13-20, 2021.
            <br />
            🎉🎉🎉 <strong>Best Paper Award!</strong> 🎉🎉🎉
            <br />[
            <a href="https://www.microsoft.com/en-us/research/publication/how-a-remote-video-game-coding-camp-improved-autistic-college-students-self-efficacy-in-communication/">
              paper link
            </a>
            ]
          </li>
        </ol>
      </Section>
      <Section title="Other Media">
        <ol>
          <li>
            The Accessible Computer Science Education Fall Workshop Invited Talk
            at Microsoft: "How a Remote Video Game Coding Camp Improved Autistic
            College Students' Self-Efficacy in Communication" (November 2020)
            <br />[
            <a href="https://www.microsoft.com/en-us/research/video/how-a-remote-video-game-coding-camp-improved-autistic-college-students-self-efficacy-in-communication/">
              talk link
            </a>
            ]
          </li>
          <li>
            Empirical Software Engineering Banter Podcast with Margaret Anne D
            Storey: "Lessons learned from an Autism Coding Camp: A Q&A with
            Andrew Begel and Paige Rodeghero" (December 2020)
            <br />[
            <a href="https://anchor.fm/margaret-anne-d-storey/episodes/Lessons-learned-from-an-Autism-Coding-Camp-A-QA-with-Andrew-Begel-and-Paige-Rodeghero-eo5ppn">
              listen in your browser
            </a>
            ] [
            <a href="https://open.spotify.com/episode/5hmhgCjmy4UFvvH4SXsLiU">
              listen on spotify
            </a>
            ] [
            <a href="https://podcasts.apple.com/sg/podcast/lessons-learned-from-autism-coding-camp-q-andrew-begel/id1534793825?i=1000503340129">
              listen on Apple Podcasts
            </a>
            ]
          </li>
        </ol>
      </Section>
    </SecondaryPageHost>
  );
};

export default Research;
