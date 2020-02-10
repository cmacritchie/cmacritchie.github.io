// import React from 'react'
import PageLayout from '../../HOC/pageLayout'
// import "../css/style.css"

const pageDetails = {
    title: 'Python',
    back:'/#skills',
    next:'/framework/csharp',
    nextTitle:'C#'
  }

const Python = () => {
    return (
        <PageLayout pageDetails={pageDetails}>
            <p>
                Python was the first language that I learned when I made the decision to pivot my career
                from Water Resourcs Engineering in 2016.
            </p>
            <p>
                I used Python on the Raspberry Pi in order to interact with the GPIO pins. In my first 
                programming competition-the SAIT 2017 Cisco Hackathon, I was responsible for emulating
                an electronic alarm using a python script. Our team finished first in this hackathon.
            </p>
            <picture className="picture-responsive">
                <img src={require(`../../static/winnersEdit2.jpg`)} />
            </picture>
            <p>
                In the 2017 U of C hackathon our team created a Biomedical IoT device. my Role in the project
                included writing a multi-threaded program to receive heart rate information using a heart rate
                sensor and allow that information to be consumed via a RESTful endpoint using Flask. We ended
                up finishing third in this competition and at the time we had about 4 months of formal programming
                education. 
            </p>
            <p>
                For my application to Mawer Investment Management I was given a programming challenge as part of
                my interview process. The challenge was to get all the Insider information from the SEDI website. 
                To do this I wrote a Python Application using the HTML parsing library: 
                'Beautiful soup', from there I was able to retrieve all of the insiders and save their 
                information in a MySQL database
            </p>
            <p>
                I became interested in data science and machine learning over the past year and I ended up taking
                a number of courses to learn about machine learning in Python. During this time I completed several
                course-based projects using Jupyter Notebook, SciKit Learn, Pandas, Numpy and Seaborn. 
            </p>
            <p>
                Here is a description 
                of the projects for Udacity Machine learning Engineer 1 course:
            </p>
            <ul>
                <li>Boston Housing (Data analysis & model development)</li>
                <li>Finding Donors (Supervised Learning)</li>
                <li>Identifying Customer Segments (Unsupervised Learning)</li>
            </ul>
            <p> 
                I have just started my career as a data scientist. I hope to explore data science
                further and develop skills using TensorFlow, Pytorch and Hadoop.
            </p>
            <p>
                the following is a list of resources I have used to learn Python:
            </p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.murach.com/shop/murach-s-python-programming-detail">Murach’s Python Programming</a>
                <br />
            <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/">Python for Data Science and Machine Learning Bootcamp</a>
                <br />
            <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/course/data-science-and-machine-learning-with-python-hands-on/">Machine Learning, Data Science and Deep Learning with Python</a>
                <br />
            <p>Udacity Machine Learning Engineer I (course no longer offered)</p>
        </PageLayout>
    )
}

export default Python
