import React, { useEffect, useState } from 'react'
import './css/TimelineComponent.css'
import timeline1 from './images/timeline1.jpeg'
import timeline2 from './images/timeline2.jpeg'
import timeline3 from './images/timeline3.jpeg'
import timeline4 from './images/timeline4.jpeg'
import timeline5 from './images/timeline5.jpeg'

const TimelineComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const handleScroll = () => {

            const viewportHeight = window.innerHeight
            let index = -1

            document.querySelectorAll('.item').forEach((item, i) => {
                const rect = item.getBoundingClientRect()
                const min = rect.top + viewportHeight * 0.6
                const max = rect.bottom + viewportHeight * 0.45

                if (window.scrollY >= min && window.scrollY <= max) {
                    index = i
                }
            })

            if (index !== -1) {
                setActiveIndex(index)
            }
        }

        window.addEventListener('scroll', handleScroll)

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        const selectors = {
            id: document.querySelector('#shell'),
            item: document.querySelectorAll('#shell .item'),
            activeClass: 'item--active',
            img: '.img',
        }

        selectors.item.forEach((item, i) => {
            item.classList.remove(selectors.activeClass)
        })

        selectors.id.style.backgroundImage = `url(${selectors.item[activeIndex]
            .querySelector(selectors.img)
            .getAttribute('src')})`

        selectors.item[activeIndex].classList.add(selectors.activeClass)
    }, [activeIndex])

    return (
        <div className="shell" id="shell">
            <div className="header">
                <h2 className="title">Be our partner</h2>
                <h3 className="subtitle">Join us today!</h3>
            </div>
            <div className="timeline">
                <div class="item" data-text="Own a franchaise">
                    <div class="content">
                        <img src={timeline1} alt="" class="img"></img>
                        <h2 class="content-title">Own a Franchise</h2>
                        <p class="content-desc">
                            如果你停止，就是谷底。如果你还在继续，
                            就是上坡，这是我听过关于人生低谷最好的阐述。
                        </p>
                    </div>
                </div>

                <div class="item" data-text="001">
                    <div class="content">
                        <img src={timeline2} alt="" class="img"></img>
                        <h2 class="content-title">Take a tour of our outlet</h2>
                        <p class="content-desc">
                            如果你停止，就是谷底。如果你还在继续，
                            就是上坡，这是我听过关于人生低谷最好的阐述。
                        </p>
                    </div>
                </div>

                <div class="item" data-text="001">
                    <div class="content">
                        <img src={timeline3} alt="" class="img"></img>
                        <h2 class="content-title">Peek inside our kitchen</h2>
                        <p class="content-desc">
                            如果你停止，就是谷底。如果你还在继续，
                            就是上坡，这是我听过关于人生低谷最好的阐述。
                        </p>
                    </div>
                </div>

                <div class="item" data-text="001">
                    <div class="content">
                        <img src={timeline4} alt="" class="img"></img>
                        <h2 class="content-title">Research & Development</h2>
                        <p class="content-desc">
                            如果你停止，就是谷底。如果你还在继续，
                            就是上坡，这是我听过关于人生低谷最好的阐述。
                        </p>
                    </div>
                </div>

                <div class="item" data-text="001">
                    <div class="content">
                        <img src={timeline5} alt="" class="img"></img>
                        <h2 class="content-title">Successful Stories</h2>
                        <p class="content-desc">
                            如果你停止，就是谷底。如果你还在继续，
                            就是上坡，这是我听过关于人生低谷最好的阐述。
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TimelineComponent
