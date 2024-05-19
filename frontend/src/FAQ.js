import React from 'react'
import { CAccordion, CAccordionBody, CAccordionItem, CAccordionHeader } from '@coreui/react'
import './css/faq.css'

const FAQ = () => {

    return (
        <div style={{ marginLeft: "10%", marginRight: "10%", marginBottom: '5vh' }}>
            <h1 style={{ textAlign: "center", color: "black", paddingTop: "1vh", marginBottom: "2vh", fontStyle: "italic", fontSize: "3rem" }}>Frequently Asked Questions</h1>
            <h3 style={{ color: 'black', fontSize: "1.25rem" }}>Here are some quick answers. If you have any other queries, you can reach out to us at <a href="mailto:ask@downtownfnb.com">ask@downtownfnb.com</a>. </h3>
            <CAccordion alwaysOpen>
                <CAccordionItem itemKey={1} >
                    <CAccordionHeader >How does DOWNTOWN fnb group support new franchisees?</CAccordionHeader>
                    <CAccordionBody>
                        <strong>We are committed to helping young entrepreneurs succeed in the food and beverage industry.  </strong>
                        Our franchise model is designed to provide you with the tools, resources, and support you need to open and operate your own outlet quickly and efficiently.
                    </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                    <CAccordionHeader>Do I need extensive business experience to become a DOWNTOWN franchisee?</CAccordionHeader>
                    <CAccordionBody>
                        <strong>No, extensive business experience is not required.   </strong> <br></br>Our franchise opportunity is ideal for young entrepreneurs who are passionate
                        about the food and beverage industry and are willing to learn and follow our proven system.
                        e provide all the necessary equipment and support to help you succeed,
                        even if you don't have prior business experience.
                    </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                    <CAccordionHeader> How quickly can I open my DOWNTOWN outlet? </CAccordionHeader>
                    <CAccordionBody>
                        We understand that young entrepreneurs are eager to get started,
                        which is why we have streamlined our franchise process to help you open your outlet as quickly as possible.
                        Once you sign the franchise agreement, we'll work with you to operate at one of our existing outlets as soon as possible.
                    </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={4}>
                    <CAccordionHeader>What is the initial investment required to become a franchisee?</CAccordionHeader>
                    <CAccordionBody>
                        <strong>The initial investment varies depending on the location and size of the outlet. <br></br></strong>
                        However, you can expect to invest from <strong>$150,000</strong>, which includes the franchise fee, equipment, inventory, and working capital.
                        Please reach out to our franchise development team at <a href="mailto:ask@downtownfnb.com">ask@downtownfnb.com</a> to learn more and get an exact estimate tailored to you.
                        We look forward to helping you start your journey with us!
                    </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={5}>
                    <CAccordionHeader>Can I operate a DOWNTOWN fnb group outlet as an absentee owner?</CAccordionHeader>
                    <CAccordionBody>
                        While we prefer our franchisees to be actively involved in the day-to-day operations of their outlets,
                        we do allow for absentee ownership in certain circumstances.
                        You would need to hire a qualified manager to oversee the operations and ensure that our brand standards are being met.
                    </CAccordionBody>
                </CAccordionItem>
            </CAccordion>
        </div >
    )
}

export default FAQ
