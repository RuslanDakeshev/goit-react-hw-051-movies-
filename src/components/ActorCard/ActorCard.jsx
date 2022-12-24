export const ActorCard = ({ name, role, photo_path }) => {
  return (
    <>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${photo_path}`} alt={name} />
        <p>{name}</p>
        <p>{role}</p>
      </div>
    </>
  );
};
