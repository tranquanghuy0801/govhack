import { Typography, Chip } from "@material-ui/core";
import { options as industries } from 'assets/industry';
import _sample from 'lodash.samplesize';

const getRandomIndustries = () => {
  const randomNumber = Math.ceil(Math.random() * 5);

  return _sample(industries, randomNumber)
}

const random254 = () => Math.ceil(Math.random() * 254);

const MarkerPopup = ({ location }: { location: string}) => {
  return (
    <div style={{ padding: '0.2rem' }}>
      <Typography variant='h6'>
        {location}
      </Typography>
      <Typography>
        {Math.ceil(Math.random() * 100)} jobs
      </Typography>
      <div>
        {
          getRandomIndustries().map((industry: string) => (
            <Chip style={{
              margin: '0.1rem',
              backgroundColor: `rgba(${random254()}, ${random254()}, ${random254()}, 0.5)`
            }} size="small" label={industry} key={industry}/>
          ))
        }
      </div>
    </div>
  )
}

export default MarkerPopup;