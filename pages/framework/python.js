// import React from 'react'
import mainLayout from '../../HOC/mainLayout'
// import "../css/style.css"

const Node = () => {
    return (
        <>
            <p>
                Python was the first language that I learned on the road to becoming a software
                developer back in 2016. Since Then I have developed my knowledge in Python and added
                more skills 
            </p>
            <p>
                I used Python on the raspberry Pi in order to interact with the GPIO pins. In my first 
                programming competition; the SAIT 2017 Cisco Hackathon, I was responsible for emulating
                an electronic alarm using a python script. Our team finished first in this hackathong
            </p>
            <p>
                In the 2017 U of C hackathon our team created a Biomedical IoT device. my Role in the project
                included writing a multi-threaded program to receive heart rate information using a heart rate
                sensor and allow that information to be consumed via a RESTful endpoint using Flask. We ended
                up coming third in this competition and at the time we had about 4 months of formal programming
                education. 
            </p>
            <p>
                For my application at Mawer Investment management I was given a programming challenge as part of
                my interview process. The challenge was to get all the Insider information from the SEDI website
                on all the insiders. To do this I wrote a pythong Application using the HTML parsing library: 'beautiful soup'
                from there I was able to retrieve all of the insiders and save their information in a MYSQL database
            </p>
            <p>
                I became interested in data science and machine learning over the past year and I ended up taking
                a number of courses to learn about machine learning in python. During this time I completed a number
                of course-based projects that included Jupyter Notebook, SciKit LEarn, Pandas, Numpy and Seabor. Though
                I have only just staretd my career as a data scientist I hope to explore the data science world
                further and develop skills using TensorFlow, Pytorch and Hadoop
            </p>
        </>
    )
}

const details = {
    page: 'Python'
  }

export default mainLayout(details)(Node)
