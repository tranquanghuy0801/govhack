import { Step, Stepper, StepLabel, StepContent } from "@material-ui/core"
import PageLayout from "pages/App/PageLayout"
import { useEffect } from "react"
import { useState } from "react"
import { Outlet, useLocation, useMatch } from 'react-router-dom'

const UserProfile = () => {
  return (
    <PageLayout title='Assessment Profile'>
      {/* <Outlet /> */}
      <StepRoute />
    </PageLayout>
  )
}
export default UserProfile

const steps = [
  'Skill Assessment',
  'Assessment Profile'
]

const StepRoute = () => {
  const [activeStep, setActiveStep] = useState(0)

  const location = useLocation()
  const { pathname } = location
  const [, , step] = pathname.split('/')
  useEffect(() => {
    const index = step === 'explore' ? 1 : 0

    setActiveStep(index)
  }, [step])

  return (
    <div style={{ height: '100%' }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Outlet />
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  )
}