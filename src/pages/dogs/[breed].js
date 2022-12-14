import React from "react";
import DogImage from "../../components/DogImage";

function BreedPage({ serverData }) {
  const { breed, imageUrl } = serverData;
  return (
    <div>
      <p>Image of a {breed}.</p>
      <DogImage imageSrc={imageUrl} />
    </div>
  );
}

export default BreedPage;

export async function getServerData(context) {
  const { breed } = context.params;
  try {
    const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`Response failed`);
    }

    return {
      props: {
        breed,
        imageUrl: data.message,
      },
    };
  } catch (error) {
    return {
      status: 200,
      headers: {},
      props: {},
    };
  }
}
