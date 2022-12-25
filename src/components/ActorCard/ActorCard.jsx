import { List,Img,Name,Character, Item } from "./ActorCard.styled";

export const ActorCard = ({ name, role, photo_path }) => {
  return (
    <List>
      <Item>
        <Img src={`https://image.tmdb.org/t/p/w500${photo_path}`} alt={name} />
        <Name>{name}</Name>
        <Character>{role}</Character>
      </Item>
    </List>
  );
};
