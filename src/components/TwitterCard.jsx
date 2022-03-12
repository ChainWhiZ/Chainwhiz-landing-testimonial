function TwitterCard({ context,author,source }) {
  return (
    <figure>
      <span>
        <div className="emptyAvatar" />
        <div>
          <h4>{author}</h4>
          <p>{source}</p>
        </div>
      </span>
      {context.split('\n').map(elem=><p>{elem}&nbsp;</p>)}
      <div className="white-line"></div>
      <p className="date-metadata">11:30pm  12 Mar, 2022</p>
    </figure>
  );
}

export default TwitterCard;
