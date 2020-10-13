import React, { useState, useEffect } from "react";
import "./Card.css";
import avatar from "../../img/avatar.png";
import like from "../../img/like.png";

//import { connect } from "react-redux";
//import { fetchImg } from "../../store/actions/photo";

function Card() {
  const [url, setUrl] = useState(
    "https://www.flickr.com/services/rest/?method=flickr.photos.getPopular&api_key=80d0cf5bb3998d2e51cc12f5d707fede&user_id=110044247%40N08&per_page=30&format=json&nojsoncallback=1"
  );
  //URL: https://www.flickr.com/services/rest/?method=flickr.photos.getPopular&api_key=80d0cf5bb3998d2e51cc12f5d707fede&user_id=110044247%40N08&per_page=30&format=json&nojsoncallback=1
  //https://www.flickr.com/services/rest/?method=flickr.photos.getPopular&api_key=80d0cf5bb3998d2e51cc12f5d707fede&user_id=185307336%40N02&format=json&nojsoncallback=1"
  const [src, setSrc] = useState([]);

  const [titleImg, setTitleImg] = useState([]);

  const [id, setId] = useState([]);

  let urls = [];
  let titles = [];
  let idImg = [];

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => getData(data));

    function getData(data) {
      data.photos.photo.forEach((item) => {
        let server = item.server;
        let id = item.id;
        let secret = item.secret;
        let title = item.title;
        let imgSrc =
          "https://live.staticflickr.com/" +
          server +
          "/" +
          id +
          "_" +
          secret +
          "_w.jpg";
        idImg.push(id);
        urls.push(imgSrc);
        titles.push(title);
      });
      setId([...id, ...idImg]);
      setSrc([...src, ...urls]);
      setTitleImg([...titleImg, ...titles]);
      console.log(idImg);
    }
  }, []);

  // useEffect(() => {
  //   this.props.fetchImg();
  // });

  return (
    <div className="Card" id="main">
      {src.map((item, index) => (
        <div className="block" key={index}>
          <div>
            <img className="avatar" src={avatar} />
          </div>

          <img className="img" src={item} />

          <div className="about">
            <img src={like} className="icon" onClick={() => alert(id[index])} />
            <p className="name">{titleImg[index]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Card;

// function mapStateToProps(state) {
//   return {
//     response: state.photo.response,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     fetchImg: () => dispatch(fetchImg()),
//   };
// }

//export default connect(mapStateToProps, mapDispatchToProps)(Card);
