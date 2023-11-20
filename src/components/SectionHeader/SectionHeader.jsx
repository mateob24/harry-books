import "../SectionHeader/SectionHeader.css"

export const SectionHeader = () => {
  return (
    <>
        <section className='harry-intro'>
          <div className="logo-box">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/800px-Harry_Potter_wordmark.svg.png" className='logo' alt="harry-potter" />
            <img src="https://logolook.net/wp-content/uploads/2021/11/Hogwarts-Emblem.png" className='logo1' alt="logo"/>
          </div>
            <p className='slogan'>¡Conoce Hogwarts, conoce <span className="slogan-span">Harry Potter en HarryBooks!</span></p>
        </section>
    </>
  )
}
