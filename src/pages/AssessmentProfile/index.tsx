import { useState } from "react";
import Explorer from "./Explorer";
import { SkillInsightDialog } from "./SkillInsightDialog";

const AssessmentProfile = () => {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('Description')

  const handleOpen = (label) => {
    setTitle(label)
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  return (
    <>
      <Explorer openDialog={handleOpen} />
      <SkillInsightDialog title={title} open={open} handleClose={handleClose} />
    </>
  );
};
export default AssessmentProfile;
