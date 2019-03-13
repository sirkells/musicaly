import React from "react";

const Artist = props => {
  if (!props.artist) return null;
  const { images, name, followers, genres } = props.artist;
  return (
    <div>
      <h3>{name}</h3>
      <p>{followers.total} followers</p>
      <p>{genres.join(", ")}</p>
      <img
        //   images[0] && images[0].url handles no image data
        src={images[0] && images[0].url}
        alt="artist-image"
        style={{
          height: 200,
          width: 200,
          borderRadius: 100,
          objectFit: "cover"
        }}
      />
    </div>
  );
};

export default Artist;
