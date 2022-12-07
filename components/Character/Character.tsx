import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { TCharacter } from '../../pages/types';

export const Character: React.FC<TCharacter> = ({ gender, image, name }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" image={image} alt={`Image of ${name}`} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {gender}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
