import { useState } from "react";
import Explorer from "./Explorer";
import { SkillInsightDialog } from "./SkillInsightDialog";

const AssessmentProfile = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Explorer openDialog={handleOpen} />
      <SkillInsightDialog open={open} handleClose={handleClose} />
    </>
  );
};
export default AssessmentProfile;
