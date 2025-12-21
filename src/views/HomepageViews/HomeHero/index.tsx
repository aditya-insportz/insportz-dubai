import styles from './style.module.scss'

interface HomeHeroProps {
  videoId: string
}

function HomeHero({ videoId }: HomeHeroProps) {
  return (
    <section className={styles['hero__section']}>
      <div className={styles['hero__container']}>
        <div className={styles['video__wrapper']}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&cc_load_policy=0&playsinline=1`}
            title="Hero Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles['video__iframe']}
          />
          <div className={styles['video__overlay']}></div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero