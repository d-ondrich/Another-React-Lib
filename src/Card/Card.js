import React from "react";
import PropTypes from "prop-types";
import "./Card.css"

const Card = ({
  header,
  subheader,
  date,
  tags,
  showTags,
  showDate,
  backgroundImage,
  borderColor,
  borderWidth,
  borderRadius,
  onClick
}) => {
  return (
    <div>
      <div className='card-grid-space'>
        <a
          target='_blank'
          className='card'
          href={`${onClick}`}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            borderColor,
            borderWidth,
            borderRadius
          }}
        >
          <div>
            <h1
              style={{
                color: header.fontColor,
                fontSize: header.fontSize,
                fontFamily: header.fontFamily
              }}
            >
              {header.title}
            </h1>
            <p
              style={{
                color: subheader.fontColor,
                fontSize: subheader.fontSize,
                fontFamily: subheader.fontFamily
              }}
            >
              {subheader.title}
            </p>
            {showDate && (
              <div
                className='date'
                style={{
                  color: date.fontColor,
                  fontSize: date.fontSize,
                  fontFamily: date.fontFamily
                }}
              >
                {date.text}
              </div>
            )}
            <div className='tags'>
              {showTags &&
                tags.map((tag, index) => (
                  <div className='tag' key={index}>
                    {tag.name}
                  </div>
                ))}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

Card.defaultProps = {
  showTags: false,
  showDate: false,
  onClick: () => {}
}

Card.propTypes = {
  header: PropTypes.shape({
    fontColor: PropTypes.string,
    fontSize: PropTypes.string,
    fontFamily: PropTypes.string,
    title: PropTypes.string,
  }),
  subheader: PropTypes.shape({
    fontColor: PropTypes.string,
    fontSize: PropTypes.string,
    fontFamily: PropTypes.string,
    title: PropTypes.string,
  }),
  date: PropTypes.shape({
    fontColor: PropTypes.string,
    fontSize: PropTypes.string,
    fontFamily: PropTypes.string,
    text: PropTypes.string,
  }),
  showDate: PropTypes.bool,
  showTags: PropTypes.bool,
  tags: PropTypes.arrayOf({
    name: PropTypes.string,
  }),
  onClick: PropTypes.func,
  backgroundImage: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.string,
  borderRadius: PropTypes.string,
}


export default Card;