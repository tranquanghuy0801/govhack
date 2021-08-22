import { Button, Dialog, DialogContent, Typography } from "@material-ui/core";
import { skills } from "assets/skills";
import { useNavigate } from "react-router-dom";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
const data = skills.slice(skills.length - random(3, 5)).map(skill => ({
  name: skill, value: random(20, 200)
}))

export const SkillInsightDialog = ({ open, handleClose }: any) => {
  const navigate = useNavigate()
  const handleClick = () => navigate('/search')

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <Typography variant='h5' style={{ fontWeight: 600 }}>
          Description
        </Typography>
        <Typography variant='body1'>
          Designs, develops, modifies, documents, tests, implements, installs, supports, software applications and systems
        </Typography>

        <Typography variant='h5' style={{ fontWeight: 600, marginTop: 32 }}>
          Skill insights
        </Typography>
        
        <ResponsiveContainer width="100%" height={300}>
          <PieChart width={400} height={400}>
            <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#82ca9d" label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>

        <Button
          variant='contained'
          color='primary'
          style={{ marginTop: 32, marginBottom: 16, padding: 16 }}
          fullWidth
          onClick={handleClick}
        >
          See which region demand these skills
        </Button>
      </DialogContent>
    </Dialog>
  )
}

function random(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
