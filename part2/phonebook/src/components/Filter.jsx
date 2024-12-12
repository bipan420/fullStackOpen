const Filter = ({ filterPerson, filterFieldChanged }) => {
  return (
    <div>
      filter shown with: <input type="text" value={filterPerson} onChange={filterFieldChanged} />
    </div>
  )
}
export default Filter