const Data = props => {
  const {details} = props
  const {
    competingTeam,
    competingteamlogo,
    date,
    venue,
    firstinnings,
    teambannerurl,
  } = details
  return (
    <div>
      <img src={teambannerurl} />
      <img src={competingteamlogo} alt={competingTeam} />
      <h1>{competingTeam}</h1>
      <p>{date}</p>
      <p>{venue}</p>
      <hr color="red" />
      <h1>First innings</h1>
      <h1>{firstinnings}</h1>
    </div>
  )
}
export default Data
