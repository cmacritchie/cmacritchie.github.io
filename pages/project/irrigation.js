import PageLayout from '../../HOC/pageLayout'


const pageDetails = {
    title: 'Home Irrigation',
    back:'/#projects',
    next:'/project/louisRiel',
    nextTitle:'Louis Riel Houses'
  }

const LouisRiel = () => {
    return (
        <PageLayout pageDetails={pageDetails}>
            <p>
                The Home irrigation IoT project is a project that was built shortly after I graduated from the SAIT OOSD
                program. At this time I had competed in two Hackathons and my roles in both included developing the 
                electronic and hardware setup with the Raspberry Pi 3 and writing the Python Scripts. I decided to put
                together an irrigation system that would track soil moisture, sunlight, temperature and water 
                resevoir volume.    
            </p>    
            <p>
                The script was written in Python and runs on the Raspberry Pi. It uses Flask as the web framework,
                GPIO library to interact with the GPIO Pins, and NumPy for various array operations. The stats are 
                recorded hourly and stored on a MySQL database. 
            </p>
            <picture className="picture-responsive">
                <img src={require(`../../assets/irrigation1.jpg`)} />
            </picture>
            
            <p>The electronic components include:</p> 
            <ul>
                <li>9V water pump</li>
                <li>3.3V Relay</li>
                <li>soil moisture sensor</li>
                <li>light dependent Resistor</li>
                <li>MCP3008 - 8-Channel 10-Bit Analog-to-Digital Converter</li>
                <li>Ultrasonic Range Finder</li>
                <li>LM35 temperature sensor</li>
            </ul>
            
            <p>
                The project backend is nearly complete; I put this project on hold because I was was busy learning
                other projects and frameworks. Now that I have a few more years experience with programming I am 
                considering revisiting this project and completing it.
            </p>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/cmacritchie/irrigationiot">Home Irrigation Source Code </a>
        </PageLayout>
    )
}

export default LouisRiel