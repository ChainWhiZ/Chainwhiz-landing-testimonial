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
    </figure>
  );
}

export default TwitterCard;
