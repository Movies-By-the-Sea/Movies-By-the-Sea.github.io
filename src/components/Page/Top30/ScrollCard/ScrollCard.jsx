import { useMediaQuery } from 'react-responsive';

import './scrollCard.css';

export default function ScrollCard({data, handleOpen}) {

    const isMobile = useMediaQuery({query:'(max-width:600px)'});

    return (
        <div className='t3-scroll-parent' >
          {data.map((item, index) => (
              <div className="sc-box">
                {isMobile ? (<></>) : (
                  <img 
                  key       = {item.name}
                  alt       = {item.name}
                  src       = {item.poster}
                  className = "sc-img"
                  />
                )}
                <div className="sc-text">
                  <div className="sc-title">{index + 1}. {item.name}</div>
                  <p className="sc-subtitle">
                    {isMobile ? (`${item.ratings.overall} / 5`) : (`MBTS Score: ${item.ratings.overall} / 5`)}  
                    <div className="info-divider">|</div>
                    {item.genre.map((i)=>i.name + ' ')}
                    {isMobile ? (<></>) : (
                      <>
                        <div className="info-divider">|</div>
                        {item.year}
                      </>
                    )}
                  </p>
                  {isMobile ? (
                    <img 
                    key       = {item.name}
                    alt       = {item.name}
                    src       = {item.poster}
                    className = "sc-img"
                    />
                  ) : (<></>)}
                  <p>Directed by {item.director}. Starring {item.actors.map((i) => i.name + ', ')}</p>
                  <div className="sc-action">
                    <div 
                      onClick   = {handleOpen(item)}
                      className = "sc-button btn-left">Read More</div>
                    <a 
                      target = {"_blank"}
                      rel    = "noreferrer"
                      href   = {item.trailer} className = "sc-button">Watch Trailer</a>
                  </div>
                </div>
              </div>
            ))}
        </div>
    );
  }