import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    // console.log(json);
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(detail);
  return (
    <div>
      {loading ? null : (
        <>
          <h1>{detail.title_long}</h1>
          <span>{`Runtime: ${detail.runtime}min`}</span>
          <br />
          <img src={detail.large_cover_image} alt={detail.title}></img>
          <p>
            <b>Description: </b>
            {detail.description_full}
          </p>
        </>
      )}
    </div>
  );
}

export default Detail;
