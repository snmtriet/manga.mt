const Read = () => {
  return (
    <div className="flex flex-col gap-lg">
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index}>
          <img src="https://mangafire.vercel.app/temp/005.jpg" />
        </div>
      ))}
    </div>
  )
}

export default Read
