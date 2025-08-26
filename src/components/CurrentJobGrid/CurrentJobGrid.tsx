import React, { useState, useRef, useEffect } from "react"
import * as styles from "./currentJobGrid.module.scss"
import { RichText } from "../RichText/RichText"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation } from "swiper/modules"
import useSiteQuery from "../../hooks"

const CurrentJobGrid = ({ data }) => {
  const { title, cards } = data
  const [activeIndex, setActiveIndex] = useState(null)

  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const activeCard = cards?.[activeIndex]

  const handleClose = () => setActiveIndex(null)

  const dateExtraction = (data) => {
    const date = new Date(data)
    const day = String(date.getDate()).padStart(2, "0")
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()
    return `${day} ${month} ${year}`
  }

    const { emailId} = useSiteQuery()
  return (
    <div className="container" id="current-jobs">
      <div>
        <div>
          <h3 className="title gradient">{title}</h3>
        </div>

        {/* Navigation Buttons on Top */}
        <div className={styles.navWrapper}>
          <button ref={prevRef} className={styles.navButton}>‹</button>
          <button ref={nextRef} className={styles.navButton}>›</button>
        </div>

        <div className={styles.cards}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 1.7,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3.3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Navigation]}
            className={`mySwiper ${styles.customSwiper}`}
          >
            {cards.map((item, id) => {
              const {
                title,
                workLocation,
                skills,
                experience,
                datePosted,
                budget,
              } = item
              const postDate = dateExtraction(datePosted)
              return (
                <SwiperSlide key={id} className={styles.card}>
                  <p className={styles.title}>{title}</p>
                  <p className={styles.para}>
                    <span className={styles.subpara}>Skill: </span>
                    {skills}
                  </p>
                  <p className={styles.para}>
                    <span className={styles.subpara}>Experience:</span>{" "}
                    {experience}
                  </p>
                  <p className={styles.para}>
                    <span className={styles.subpara}>Date Posted:</span>{" "}
                    {postDate}
                  </p>
                  <p className={styles.para}>
                    <span className={styles.subpara}>Work Location: </span>
                    {workLocation}
                  </p>
                  <p className={styles.para}>
                    <span className={styles.subpara}>Budget: </span>
                    {budget}
                  </p>
                   <p className={styles.para}>
                    <span className={styles.subpara}>Send Resume: </span>
                    {emailId}
                  </p>
                  <button
                    className={styles.button}
                    onClick={() => setActiveIndex(id)}
                  >
                    View
                  </button>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>

      {activeCard && (
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <button className={styles.closeButton} onClick={handleClose}>
              ×
            </button>
            <RichText content={activeCard.description} />
            <button className={styles.btn}><a target='blank' href = 'https://docs.google.com/forms/d/e/1FAIpQLSdzeUX47xvOPqbBT_1wOg3u43v82bofCDAwiWABiXl1nx2unw/viewform?pli=1'>Send Resume</a>  </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CurrentJobGrid
