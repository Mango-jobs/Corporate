import React, { useState } from "react"
import * as styles from "./currentJobGrid.module.scss"
import { RichText } from "../RichText/RichText"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation } from "swiper/modules"

const CurrentJobGrid = ({ data }) => {
  const { title, cards } = data
  const [activeIndex, setActiveIndex] = useState(null)

  const handleClose = () => setActiveIndex(null)

  const activeCard = cards?.[activeIndex]

  return (
    <div className="container" id="services">
      <div className={styles.box}>
        <div>
          <h3 className="title gradient">{title}</h3>
        </div>
        <div className={styles.cards}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
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
                    {datePosted}
                  </p>
                  <p className={styles.para}>
                    <span className={styles.subpara}>Work Location: </span>
                    {workLocation}
                  </p>
                  <p className={styles.para}>
                    <span className={styles.subpara}>Budget: </span>
                    {budget}
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

      {/* Overlay rendered once, outside Swiper */}
      {activeCard && (
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <button className={styles.closeButton} onClick={handleClose}>
              ×
            </button>
            <RichText content={activeCard.description} />
          </div>
        </div>
      )}
    </div>
  )
}

export default CurrentJobGrid
