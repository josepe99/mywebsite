const ResumeItem = (props) =>{
  return (
    <>
      <h3 class="resume-title">{ props.title }</h3>
      <div class="resume-item">
        <h4>{ props.subtitle }</h4>
        <h5>{ props.time }</h5>
        <p><em>{ props.place }</em></p>
        <p>{ props.resume }</p>
        { props.items && (
          <ul>
            { props.items.map(item => (
              <li>{ item }</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default ResumeItem;