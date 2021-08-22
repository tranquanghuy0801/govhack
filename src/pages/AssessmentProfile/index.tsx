import { useState } from "react";
import Explorer from "./Explorer";
import { SkillInsightDialog } from "./SkillInsightDialog";

const AssessmentProfile = () => {
  const [open, setOpen] = useState(true)

  return (
    <>
      <Explorer />
      <SkillInsightDialog open={open} handleClose={() => setOpen(pre => !pre)} />
    </>
  );
};
export default AssessmentProfile;
