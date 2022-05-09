import { Typography } from "@mui/material"
import { SecondaryPageHost } from "../../layout/SecondaryPage"

export const CodeOfConductText = () => {
  return (
    <Typography>
      The CGCC Teaching Team commits to: creating an inclusive, welcoming, safe coding camp where everyone has the opportunity to learn, succeed and have fun. We respectfully communicate and interact with all camp participants and their parents/guardians.
      <br />
      In return, we ask that all CGCC Campers agree to the following Camper Code of Conduct to maintain an inclusive, fun, and safe camp for learning. 
      <br />
      <br />
      As the camper, I agree to meet these program expectations:
      <br />
      ● Treat camp instructors and other campers with respect.
      <br />
      ● Plan ahead for my personal needs as much as possible to participate fully and on time.
      <br />
      ● Follow instructor instructions and raise concerns respectfully.
      <br />
      ● Do my best to complete assigned individual and group projects on time. If I need additional support to do so, I will inform the instructors ahead of class.
      <br />
      ● Advocate for my learning needs, including requesting help or accommodation when I need it.
      <br />
      ● I will not engage in any bullying, harassment, hate speech, threats of violence, or share any media with excessive violence, animal harm, pornography, sexualization of children, or that promote self-harm or suicide. We do not expect these issues to occur but include them to be mindful of online camp safety. 
      <br />
      <br />
      What are the consequences if I do not meet the program's behavior expectations?
      <br />
      ● Staff will give me a warning regarding behaviors and actions that are not allowed and, in most cases, allow me to correct the behavior. 
      <br />
      ● Depending on the behavior, they may also contact my parent(s) or guardian(s).
      <br />
      ● In some cases, staff may discuss with me and require me to sign a corrective action plan to stay in the program.
      <br />
      <br />
      As the parent/guardian, I will support my teen's participation in this program by:
      <br />
      ● Making arrangements, so my teen is available to participate in scheduled camp times.
      <br />
      ● Allowing time for my teen to complete required assignments.
      <br />
      ● I will communicate with camp staff before program start time if my teen will be absent.
      <br />
      ● Working together with program staff to resolve any issues that arise with my teen. 
      <br />
      ● Understanding that CGCC program staff cannot monitor, nor be responsible for, what my camper does online outside of program activities. I will review and discuss online safety and this code of conduct with my teen.
    </Typography>
  )
}

export const CodeOfConductWithHeader = () => {
  return (
    <>
    <Typography textAlign={"center"} variant="h4">
    Code of Conduct
  </Typography>
  <CodeOfConductText />
</>
  )
}

const CodeOfConduct = () => {
  return (
    <SecondaryPageHost >
      <Typography textAlign={'center'} variant="h4" paddingBottom={3} >Code of Conduct</Typography>
      <CodeOfConductText />
    </SecondaryPageHost >
  )
}

export default CodeOfConduct