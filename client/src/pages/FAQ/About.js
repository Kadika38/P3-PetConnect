import React from 'react'
import './style.css'
import mission1 from '../../images/dog-bath.png'
import mission2 from '../../images/dog-friend.jpg'
import mission3 from '../../images/dog-selfie.jpg'
import dogpark from '../../images/dog-park.jpg'

export default function About() {
    return (
        <div class="faq">
       <p> Founded in 2022, PetConnect started as a brainstorming session between UCSD Full Stack Development students and quickly 
           snowballed into an obvious commonality between 5 different humans - our love for dogs.  
        We thought, what if we had a place to combine our love of connecting on social with our love of our dogs? So we got hard at work 
        to figure out what that would look like. After hours of work, various prototypes and concepts - we landed on the first iteration of 
        PetConnect (which was more of a PetConnector than a place for PetConnections)
        We started our business with our simple thing in mind, whether you're here for a pick me up or 
        you're here to find your new furever friend, PetConnect
        is a place for everyone to do just that - connect. </p><br /><br /><br /><br />


        <img class="about-photos" src={dogpark} alt="" />
        <br /><br /><br /><br /><br /><br /><br /><br />


        <div class="container d-flex align-items-center flex-column">

        
            
<h1 class="masthead-heading text-uppercase mb-0"> Our Mission</h1>


<div class="divider-custom divider-light">
    <div class="divider-custom-line"></div>
    <div class="divider-custom-icon"><i class="fas fa-paw fa-beat"></i></div>
    <div class="divider-custom-line"></div>
</div>

</div>
<p>We are dedicated to raising the standards of pet purchasing and interactions, 
providing healthy tips and tricks, interactive breeder / buyer transactions, extensive 
background checks (on breeder and pups) and much more. We inspire our customers to provide 
their pets with the best quality of life by responsibly researching their breeders. Through unique 
social interactions and testimonials, we're able to ensure a happy and productive relationship. 
Ultimately, we always promise to put our customers’ pets’ health and happiness before profits and continue 
to seek new and innovative ways to deliver the best experience possible (for people and pups!) </p>
        <br /><br /> <br /><br />
        <div class="row">
    <div class="col-sm">
        <img class="about-photos" src={mission1} alt="" /></div>
        <div class="col-sm">

        <img class="about-photos" src={mission2} alt="" /></div>
        <div class="col-sm">

        <img class="about-photos" src={mission3} alt="" /></div>
        </div>
        
        </div>
    )};
        