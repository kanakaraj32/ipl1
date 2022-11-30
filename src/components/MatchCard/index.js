const Data = props => {
  // eslint-disable-next-line
  const {detail} = props
  const {competingTeam, venue} = detail
  return (
    <div>
      <h1>{competingTeam}</h1>
      <p>{venue}</p>
    </div>
  )
}
export default Data
