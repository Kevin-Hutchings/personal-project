import React, { useContext } from "react";
import { UserContext } from "../../context/context";
import { useSelector } from "react-redux";
import "./History.css";

const History = () => {
  const { user } = useContext(UserContext);
  const toggle = useSelector((state) => state.list.toggle);

  return (
    <div className={`history ${toggle && user.id ? "smash" : ""}`}>
      <section className="history-about">
        <h1>About the studio</h1>
        <ul>
          <li>
            Studio Ghibli is a Japanese Animation studio located in Koganei,
            Tokyo, Japan.
          </li>
          <li>
            It was founded in June of 1985 by directors Hayao Miyazaki, Isao
            Takahata, and producer Toshio Suzuki.
          </li>
          <li>
            Studio Ghibli is known throughout the world for its animated feature
            films, such as “Spirited Away”, “My Neighbor Totoro”, “Princess
            Mononoke”, and “Howl’s Moving Castle.”
          </li>
          <li>
            The films are well known for their traditional, hand drawn animation
            style and soundtracks composed by Joe Hisaishi
          </li>
          <li>
            Studio Ghibli has produced some of the highest-grossing anime
            feature films in Japan.
          </li>
          <li>
            Studio Ghibli has released 22 animated feature films since its
            founding, as well as an animated tv series and over 20 short films.
            It has also produced commercials, contributed to the development of
            several video games, and has a museum dedicated to showcasing its
            works in Tokyo.
          </li>
        </ul>
      </section>

      <section className="miyazaki">
        <h1>Hayao Miyazaki</h1>
        <p>
          Hayao Miyazaki is a Japanese Animator, director, producer,
          screenwriter, author, and manga artist. He is widely regarded as one
          of the most accomplished filmmakers in the history of animation.
          During his time at Studio Ghibli, he has been involved in some of the
          studio's most successful films.
        </p>
        <p>
          Miyazaki's works are characterized by the recurrence of themes such as
          humanity's relationship with nature and technology, the wholesomeness
          of natural and traditional patterns of living, the importance of art
          and craftsmanship, and the difficulty of maintaining a pacifist ethic
          in a violent world. The protagonists of his films are often strong
          girls or young women, and several of his films present morally
          ambiguous antagonists with redeeming qualities.
        </p>
        <p>
          Notable awards: Academy award for Best Animated Feature, Academy
          Honorary Award, Person of Cultural Merit
        </p>
      </section>

      <section className="hisaishi">
        <h1>Joe Hisaishi</h1>
        <p>
          Mamoru Fujisawa, aka Joe Hisaishi is a Japanese composer and musical
          director known for over 100 film scores and solo albums. Hisaishi's
          music has been known to explore and incorporate different genres,
          including minimalist, experimental electronic, European classical, and
          Japanese classical. He is known for his close working relationship
          with Miyazaki, having written the music for all but one of his films.
        </p>
        <p>
          Hisaishi has won the Japanese Academy Award for Best Music seven times
          and is a member of the Academy of Motion Picture Arts and Sciences.
        </p>
      </section>
    </div>
  );
};

export default History;
