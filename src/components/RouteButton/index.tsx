import { IconButton } from "@material-ui/core"
import { useNavigate } from "react-router-dom"

export type RouteButtonProps = {
  path: string
  icon: React.ComponentType
}

const RouteButton: React.FC<RouteButtonProps> = ({ path, icon }) => {
  const navigate = useNavigate()

  return (
    <IconButton onClick={() => navigate(path)}>
      {icon}
    </IconButton>
  )
}
export default RouteButton