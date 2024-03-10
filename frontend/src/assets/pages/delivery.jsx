

function delivery({roles}) {
  return (
    roles === "driver" ?
    <div>
      view all orders 
    </div>
    : <div>
        <h1>You are not authorized</h1>
      </div>
  )
}

export default delivery
